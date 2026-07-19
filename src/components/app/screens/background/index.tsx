import { useScreen } from '@/store/screen';
import backgroundVariants from './variants';
import UIView from '@shared/uikit/UIView';
import {
  Combobox,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxPopup,
} from '@shared/ui/combobox';
import { Badge } from '@shared/ui/badge';
import BackgroundContent from './content';
import React from 'react';

const BackgroundScreens = () => {
  const screen = useScreen((state) => state.screen);
  const onChangeScreen = useScreen((state) => state.onChangeScreen);

  const selectedItem = React.useMemo(
    () => backgroundVariants.find((item) => item.value === screen.background),
    [screen.background],
  );

  return (
    <UIView className="layout-fill gap-2">
      <Combobox
        value={selectedItem}
        items={backgroundVariants}
        onValueChange={(item: any) => onChangeScreen('background', item?.value)}
      >
        <ComboboxInput
          aria-label="Choose background"
          placeholder="Choose a background"
        />
        <ComboboxPopup>
          <ComboboxEmpty>No backgrounds found.</ComboboxEmpty>
          <ComboboxList>
            {(item) => (
              <ComboboxItem key={item.value} value={item}>
                <UIView className="flex items-center gap-2">
                  {item.label}
                  {item.new && (
                    <Badge size="sm" variant="success">
                      New
                    </Badge>
                  )}
                </UIView>
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxPopup>
      </Combobox>
      <BackgroundContent />
    </UIView>
  );
};
export default BackgroundScreens;
