import UIButton from '@/ui-kit/source/UIButton/button';
import {
  Card,
  CardHeader,
  Autocomplete,
  AutocompleteItem,
} from '@nextui-org/react';
import { capitalize } from 'lodash';
import themes from '@/plugins/codemirror/themes';
import UIView from '@/ui-kit/source/UIView';

function ScreenEdit() {
  return (
    <Card radius="none" className="bg-transparent shadow-none">
      <CardHeader className="flex gap-1 py-1 px-2 bg-default-100">
        <div className="flex-1 flex item-center justify-between">
          <p className="text-tiny">CANVAS</p>
          <UIButton
            size="sm"
            radius="none"
            variant="light"
            disableRipple
            className="p-0 h-auto min-w-fit text-tiny text-default-600"
          >
            Reset
          </UIButton>
        </div>
      </CardHeader>
      <UIView className="p-2">
        <Autocomplete
          labelPlacement="outside"
          size={'sm'}
          defaultItems={Object.keys(themes).map((item, index) => {
            return {
              name: capitalize(item),
              id: index,
            };
          })}
          aria-label="Choose a theme"
          className="max-w-xs"
          variant="flat"
          placeholder="Choose a theme"
        >
          {(item) => (
            <AutocompleteItem startContent="→" key={item.id}>
              {item.name}
            </AutocompleteItem>
          )}
        </Autocomplete>
      </UIView>
      <UIView className="p-2"></UIView>
    </Card>
  );
}

export default ScreenEdit;
