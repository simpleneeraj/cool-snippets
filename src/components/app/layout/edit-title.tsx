import { SolarPen2LineDuotone } from '@/app-kit/icons/SolarPen2LineDuotone';
import {
  Button,
  Input,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from '@heroui/react';

export default function TitleChangerComponent() {
  return (
    <Popover placement="bottom-start" backdrop="opaque">
      <PopoverTrigger>
        <Button size="sm" variant="light" isIconOnly>
          <SolarPen2LineDuotone className={'h-5 w-5'} />
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
