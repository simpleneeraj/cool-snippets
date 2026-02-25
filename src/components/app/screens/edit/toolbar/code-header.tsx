import React from 'react';
import { Label } from '@/app-kit/ui/label';
import UIView from '@/app-kit/source/UIView';
import { Button } from '@/app-kit/ui/button';
import { Radio, RadioGroup } from '@/app-kit/ui/radio-group';
import { Menu, MenuPopup, MenuTrigger } from '@/app-kit/ui/menu';
import uiTemplates from '../../../widget/aside/primary/ui-templates';

type Props = {
  value: string;
  onAction?: (key: React.Key) => void;
};

const CodeHeaderDropdown: React.FC<Props> = ({ value, onAction }) => {
  return (
    <Menu>
      <MenuTrigger render={<Button variant="outline" />}>
        {uiTemplates?.find((item) => item?.value === value)?.codeHeader}
      </MenuTrigger>
      <MenuPopup>
        <RadioGroup value={value} className={'gap-1'} onValueChange={onAction}>
          {uiTemplates.map((template) => (
            <Label
              key={template.value}
              className="flex flex-1 items-start gap-2 rounded-lg border p-3 hover:bg-accent/50 has-data-checked:border-primary/48 has-data-checked:bg-accent/50 justify-between"
            >
              <UIView className="flex items-start gap-2">
                <Radio value={template.value} />
                <div className="flex flex-col gap-1">
                  <p>{template.name}</p>
                </div>
              </UIView>
              {template.codeHeader}
            </Label>
          ))}
        </RadioGroup>
      </MenuPopup>
    </Menu>
  );
};

export default CodeHeaderDropdown;
