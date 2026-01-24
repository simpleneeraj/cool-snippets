import React from 'react';
import { useImmer } from 'use-immer';
import { useDebounce } from 'use-debounce';
import UIView from '@/app-kit/source/UIView';
import { capitalize, subtract } from 'lodash';
import useIcons from '@/server/icons/hooks/use-icons';
import { Input, Select, SelectItem } from '@heroui/react';
import useDynamicHeight from '@/app-kit/hooks/use-dynamic-height';
import UIVirtualizeGrid from '@/app-kit/components/UIVirtualizeGrid';
import { PickerIconsProps, PickerProps } from '@/typings/icon-picker';
import UILoadingFallback from '@/app-kit/components/UILoadingFallback';

interface FluentEmojiState {
  searchTerm: string | null;
  selectedType: string | null;
}

const FluentEmoji: React.FC<PickerProps & PickerIconsProps> = (props) => {
  const [ref, height] = useDynamicHeight();
  const calculatedHeight = subtract(height, 80);
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
          size="sm"
          variant="bordered"
          className="max-w-40"
          placeholder="Select set"
          aria-label="Icon set selector"
          onChange={(e) =>
            updateState((draft) => {
              draft.selectedType = e.target.value;
            })
          }
        >
          {types?.map((item) => (
            <SelectItem key={item}>{capitalize(item)}</SelectItem>
          ))}
        </Select>

        <Input
          size="sm"
          placeholder="Search emoji..."
          onChange={(e) =>
            updateState((draft) => {
              draft.searchTerm = e.target.value;
            })
          }
          isClearable
          onClear={() =>
            updateState((draft) => {
              draft.searchTerm = '';
            })
          }
        />
      </UIView>
      <UIView className="flex flex-col flex-1" ref={ref}>
        <UIVirtualizeGrid
          {...props}
          items={query.data?.icons || []}
          height={calculatedHeight}
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
