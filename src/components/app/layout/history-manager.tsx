'use client';

import React from 'react';
import { useHotkeys } from 'react-hotkeys-hook';
import { UndoLeftRoundLinearIcon, UndoRightRoundLinearIcon } from '@solar-icons/react';
import { Button } from '@/app-kit/ui/button';
import { Tooltip, TooltipPopup, TooltipTrigger } from '@/app-kit/ui/tooltip';
import useHistory from '@/store/hooks/use-history';

const HistoryManager: React.FC = () => {
  const { undo, redo, canUndo, canRedo } = useHistory();

  useHotkeys('mod+z', (event) => {
    event.preventDefault();
    undo();
  });
  useHotkeys('mod+shift+z', (event) => {
    event.preventDefault();
    redo();
  });

  return (
    <React.Fragment>
      <Tooltip>
        <TooltipTrigger
          render={
            <Button variant="outline" disabled={!canUndo} onClick={undo} />
          }
        >
          <UndoLeftRoundLinearIcon />
        </TooltipTrigger>
        <TooltipPopup>Undo (⌘Z)</TooltipPopup>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger
          render={
            <Button variant="outline" disabled={!canRedo} onClick={redo} />
          }
        >
          <UndoRightRoundLinearIcon />
        </TooltipTrigger>
        <TooltipPopup>Redo (⌘⇧Z)</TooltipPopup>
      </Tooltip>
    </React.Fragment>
  );
};

export default HistoryManager;
