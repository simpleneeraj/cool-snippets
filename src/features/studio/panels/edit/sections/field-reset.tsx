'use client';

import { Button } from '@shared/ui/button';
import { Tooltip, TooltipPopup, TooltipTrigger } from '@shared/ui/tooltip';
import { RestartIcon } from '@solar-icons/react/bold/restart';

type Props = {
  /** True when the value already matches its default — the button greys out. */
  isDefault: boolean;
  onReset: () => void;
};

/**
 * Inline "reset to default" affordance for a single field. It stays mounted on
 * every field so the row layout never shifts, and only becomes actionable once
 * the value has drifted from its default.
 */
const FieldReset = ({ isDefault, onReset }: Props) => (
  <Tooltip>
    <TooltipTrigger
      render={
        <Button
          variant="ghost"
          size="icon-xs"
          className="text-muted-foreground disabled:opacity-40"
          disabled={isDefault}
          onClick={onReset}
          aria-label="Reset to default"
        />
      }
    >
      <RestartIcon />
    </TooltipTrigger>
    <TooltipPopup>Reset to default</TooltipPopup>
  </Tooltip>
);

export default FieldReset;
