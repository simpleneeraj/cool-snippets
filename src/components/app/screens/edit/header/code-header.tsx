import React from 'react';
import {
  Button,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  DropdownTrigger,
} from '@nextui-org/react';
import templatesDraft from '../../../widget/aside/primary/templates-draft';

type Props = {
  value: string;
  onAction?: (key: React.Key) => void;
};

const CodeHeaderDropdown: React.FC<Props> = ({ value, onAction }) => {
  return (
    <Dropdown
      title="Change the headers styles"
      classNames={{
        base: 'before:bg-default-200',
        content:
          'py-1 px-1 border border-default-200 bg-gradient-to-br from-white to-default-200 dark:from-default-50 dark:to-black',
      }}
    >
      <DropdownTrigger>
        <Button size="sm" variant="bordered" className="min-w-20">
          {templatesDraft?.find((item) => item.value === value)?.codeHeader}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        onAction={onAction}
        variant="faded"
        aria-label="Code headers styles"
      >
        {templatesDraft.map((item) => (
          <DropdownItem
            key={item.value}
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
