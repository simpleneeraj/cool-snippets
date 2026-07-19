import React from 'react';
import { useImmer } from 'use-immer';
import { useDebounce } from 'use-debounce';
import UIView from '@shared/uikit/UIView';
import { capitalize, subtract } from 'lodash';
import useIcons from '@shared/hooks/use-icons';
import { Input } from '@shared/ui/input';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@shared/ui/select';
import UIVirtualizeGrid from '@shared/motion/UIVirtualizeGrid';
import { PickerIconsProps, PickerProps } from '@shared/types/icon-picker';
import UILoadingFallback from '@shared/motion/UILoadingFallback';

interface FluentEmojiState {
  searchTerm: string | null;
  selectedType: string | null;
}

const FluentEmoji: React.FC<PickerProps & PickerIconsProps> = (props) => {
  const [state, updateState] = useImmer<FluentEmojiState>({
    searchTerm: null,
    selectedType: null,
  });
  const [debounceState] = useDebounce(state, 500);
  const query = useIcons({
    provider: props?.provider,
    type: debounceState?.selectedType,
    query: debounceState?.searchTerm,
  });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const types = React.useMemo(() => query.data?.types || [], []);

  return (
    <UIView className="flex-1 flex flex-col">
      <UIView className="py-2 flex gap-2">
        <Select
          value={state.selectedType ?? ''}
          onValueChange={(value) =>
            updateState((draft) => {
              draft.selectedType = value as string;
            })
          }
        >
          <SelectTrigger className="max-w-40" aria-label="Icon set selector">
            <SelectValue placeholder="Select set" />
          </SelectTrigger>
          <SelectContent>
            {types?.map((item) => (
              <SelectItem key={item} value={item}>
                {capitalize(item)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Input
          placeholder="Search emoji..."
          onChange={(e) =>
            updateState((draft) => {
              draft.searchTerm = e.target.value;
            })
          }
        />
      </UIView>
      <UIView className="layout-fill">
        <UIVirtualizeGrid
          {...props}
          items={query.data?.icons || []}
          emptyContent={
            query.isValidating ? (
              <UILoadingFallback />
            ) : (
              <UIView className="flex-1 flex flex-col items-center justify-center">
                <span className="pointer-events-none whitespace-pre-wrap bg-linear-to-b from-black to-gray-300/80 bg-clip-text text-center text-2xl leading-none text-transparent dark:from-white dark:to-slate-900/10">
                  No items available
                </span>
              </UIView>
            )
          }
        ></UIVirtualizeGrid>
      </UIView>
    </UIView>
  );
};

export default React.memo(FluentEmoji);
