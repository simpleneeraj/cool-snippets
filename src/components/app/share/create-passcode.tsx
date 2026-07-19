import { useImmer } from 'use-immer';
import UIView from '@/app-kit/source/UIView';
import React from 'react';
import { randomBytes } from 'crypto';
import { format } from 'date-fns';
import { Badge } from '@/app-kit/ui/badge';
import { Input } from '@/app-kit/ui/input';
import { Button } from '@/app-kit/ui/button';
import { Separator } from '@/app-kit/ui/separator';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from '@/app-kit/ui/popover';
import { SolarPasswordMinimalisticInputLineDuotone } from '@/app-kit/icons/SolarPasswordMinimalisticInputLineDuotone';
import { SolarCrownLineDuotone } from '@/app-kit/icons/SolarCrownLineDuotone';
import { SolarRefreshLineDuotone } from '@/app-kit/icons/SolarRefreshLineDuotone';

type CreatePasscodeProps = {
  premium?: boolean;
};

const CreatePasscode: React.FC<CreatePasscodeProps> = ({}) => {
  const [state, updateState] = useImmer({
    password: '',
    confirmPassword: '',
  });

  const onChangeState = (
    field: 'password' | 'confirmPassword',
    value: string
  ) => {
    updateState((draft) => {
      draft[field] = value;
    });
  };

  const generateRandomPassword = () => {
    // Generate 8 random bytes (16 hex characters) and convert to uppercase
    const randomHex = randomBytes(8).toString('hex');

    // Get current date in 'yyMMdd' format
    const datePart = format(new Date(), 'yyMMdd');

    // Combine randomHex and datePart, trim to 16 characters if necessary
    const randomPassword = `${randomHex}${datePart}`.slice(0, 16);

    onChangeState('password', randomPassword);
    onChangeState('confirmPassword', randomPassword);
  };

  return (
    <Popover>
      <PopoverTrigger render={<Button size="sm" variant="outline" />}>
        <SolarPasswordMinimalisticInputLineDuotone className="h-4 w-4" />
        Passcode
      </PopoverTrigger>
      <PopoverContent align="end" className="min-w-60">
        <div className="flex w-full flex-col gap-2 px-1 py-2">
          <h3 className="flex items-center gap-2 text-sm font-bold">
            Link Password
            <Badge variant="outline" className="gap-1 text-xs">
              <SolarCrownLineDuotone className="h-3.5 w-3.5" />
              Pro
            </Badge>
          </h3>
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="passcode" className="text-sm font-medium">
                Password
              </label>
              <Input
                id="passcode"
                placeholder="Create Passcode"
                value={state.password}
                onChange={(e) => onChangeState('password', e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="confirm-passcode" className="text-sm font-medium">
                Confirm Password
              </label>
              <Input
                id="confirm-passcode"
                placeholder="Confirm Passcode"
                value={state.confirmPassword}
                onChange={(e) =>
                  onChangeState('confirmPassword', e.target.value)
                }
              />
            </div>
            <Separator className="my-1" />
            <UIView className="flex items-center gap-2">
              <Button
                onClick={generateRandomPassword}
                size="icon"
                variant="outline"
              >
                <SolarRefreshLineDuotone className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="outline" className="w-full">
                Add Password
              </Button>
            </UIView>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default CreatePasscode;
