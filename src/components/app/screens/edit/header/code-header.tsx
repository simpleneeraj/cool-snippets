import React from 'react';
import {
  Button,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  DropdownTrigger,
} from '@nextui-org/react';
import UnixNeon from '../../../widget/code/templates/unix-neon';
import { unixColors } from '../../../widget/code/templates/colors';
import { HeaderInputType, HeaderVariants } from '@/typings/templates';
import templatesDraft from '../../../widget/aside/primary/templates-draft';

const CodeHeaderDropdown: React.FC = () => {
  return (
    <Dropdown
      classNames={{
        base: 'before:bg-default-200',
        content:
          'py-1 px-1 border border-default-200 bg-gradient-to-br from-white to-default-200 dark:from-default-50 dark:to-black',
      }}
    >
      <DropdownTrigger>
        <Button size="sm" variant="bordered">
          <UnixNeon
            colors={unixColors}
            variant={HeaderVariants.OUTLINE}
            inputType={HeaderInputType.NONE}
            style={{ gap: '6px', size: '14px', padding: '0px' }}
          />
        </Button>
      </DropdownTrigger>
      <DropdownMenu variant="faded" aria-label="Code headers styles">
        {templatesDraft.map((item) => (
          <DropdownItem
            key={item.name}
            className="max-w-widget-sm"
            endContent={item.codeHeader}
            description={item.description}
          >
            {item.name}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

export default CodeHeaderDropdown;
