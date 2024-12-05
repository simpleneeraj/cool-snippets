import {
  Button,
  Input,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from '@nextui-org/react';
import HighlighterIcon from '@/ui-kit/icons/HighlighterIcon';

export default function TitleChangerComponent() {
  return (
    <Popover placement="bottom-start" backdrop="opaque">
      <PopoverTrigger>
        <Button size="sm" variant="light" isIconOnly>
          <HighlighterIcon className="h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="flex flex-col gap-2 px-2 py-3">
          <span className="text-sm font-semibold">Edit Title</span>
          <Input variant="bordered" size="sm" placeholder="Enter a new title" />
        </div>
      </PopoverContent>
    </Popover>
  );
}
