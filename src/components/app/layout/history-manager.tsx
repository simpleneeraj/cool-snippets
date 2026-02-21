import React from 'react';
import { SolarUndoLeftRoundLinear } from '@/app-kit/icons/SolarUndoLeftRoundLinear';
import { SolarUndoRightRoundLinear } from '@/app-kit/icons/SolarUndoRightRoundLinear';
import { Button } from '@/app-kit/ui/button';
import { Tooltip, TooltipPopup, TooltipTrigger } from '@/app-kit/ui/tooltip';

type HistoryManagerProps = {};

const HistoryManager: React.FC<HistoryManagerProps> = ({}) => {
  return (
    <React.Fragment>
      <Tooltip>
        <TooltipTrigger render={<Button variant="outline" />}>
          <SolarUndoLeftRoundLinear />
        </TooltipTrigger>
        <TooltipPopup>Undo (⌘⇧Z)</TooltipPopup>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger render={<Button variant="outline" />}>
          <SolarUndoRightRoundLinear />
        </TooltipTrigger>
        <TooltipPopup>Redo (⌘⇧Y)</TooltipPopup>
      </Tooltip>
    </React.Fragment>
  );
};

export default HistoryManager;
