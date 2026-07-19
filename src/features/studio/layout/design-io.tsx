'use client';

import React, { useRef, useState } from 'react';
import slugify from 'slugify';
import { format } from 'date-fns';
import appConfig from '@shared/config/site';
import { toastManager } from '@shared/ui/toast';
import useSlideEditor from '@features/studio/store/hooks/use-editor';
import {
  buildDesignFile,
  parseDesignFile,
  readFileAsText,
  DesignImportError,
  DESIGN_FILE_EXTENSION,
} from '@features/studio/lib/design-io';
import UIView from '@shared/uikit/UIView';
import { keepSelectionProps } from '@features/studio/selection-manager';
import { Button } from '@shared/ui/button';
import { Spinner } from '@shared/ui/spinner';
import { Tooltip, TooltipPopup, TooltipTrigger } from '@shared/ui/tooltip';
import {
  Dialog,
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogPanel,
  DialogPopup,
  DialogTitle,
  DialogTrigger,
} from '@shared/ui/dialog';
import { CodeSquareOutlineIcon, DownloadMinimalisticLinearIcon, SquareShareLineLinearIcon } from '@solar-icons/react';

/**
 * Import/export the whole design as a portable JSON file. Uploaded images live
 * in IndexedDB, so export inlines them as data URLs and import re-`putAsset`s
 * them — the file is self-contained and moves between machines.
 */
const DesignIO: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [exporting, setExporting] = useState(false);
  const [importing, setImporting] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const { slides, replaceSlides } = useSlideEditor();

  const onExport = async () => {
    setExporting(true);
    try {
      const file = await buildDesignFile(slides, new Date().toISOString());
      const blob = new Blob([JSON.stringify(file, null, 2)], {
        type: 'application/json',
      });
      const name = slugify(
        `${appConfig.snippet.output}-${format(new Date(), 'yyyy-MM-dd-HH-mm-ss')}`,
        { lower: true, replacement: '-' },
      );

      const url = URL.createObjectURL(blob);
      const anchor = document.createElement('a');
      anchor.href = url;
      anchor.download = `${name}${DESIGN_FILE_EXTENSION}`;
      anchor.click();
      URL.revokeObjectURL(url);

      toastManager.add({
        title: 'Design exported',
        description: 'Your design was saved as a JSON file.',
        type: 'success',
      });
    } catch {
      toastManager.add({
        title: 'Export failed',
        description: 'The design could not be exported. Please try again.',
        type: 'error',
      });
    } finally {
      setExporting(false);
    }
  };

  const onImportFile = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    // Clear the input so re-selecting the same file still fires `change`.
    event.target.value = '';
    if (!file) return;

    setImporting(true);
    try {
      const nextSlides = await parseDesignFile(await readFileAsText(file));
      replaceSlides(nextSlides);
      setIsOpen(false);
      toastManager.add({
        title: 'Design imported',
        description: 'Your canvas was replaced with the imported design.',
        type: 'success',
      });
    } catch (error) {
      toastManager.add({
        title: 'Import failed',
        description:
          error instanceof DesignImportError
            ? error.message
            : 'The file could not be imported.',
        type: 'error',
      });
    } finally {
      setImporting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <Tooltip>
        <TooltipTrigger
          render={
            <DialogTrigger
              render={
                <Button variant="outline" aria-label="Import or export JSON" />
              }
            />
          }
        >
          <CodeSquareOutlineIcon />
        </TooltipTrigger>
        <TooltipPopup>Import / export JSON</TooltipPopup>
      </Tooltip>

      <DialogPopup {...keepSelectionProps} showCloseButton={false}>
        <DialogHeader>
          <DialogTitle>Design file</DialogTitle>
          <DialogDescription>
            Save your design to a JSON file or load one back. Uploaded images are
            embedded, so the file is self-contained.
          </DialogDescription>
        </DialogHeader>

        <DialogPanel>
          <UIView className="flex flex-col gap-3">
            <UIView className="flex items-center justify-between gap-4 rounded-lg border border-border p-3">
              <UIView className="flex flex-col gap-0.5">
                <span className="text-sm font-medium">Export design</span>
                <span className="text-xs text-muted-foreground">
                  Download the current canvas as a <code>.json</code> file.
                </span>
              </UIView>
              <Button
                variant="outline"
                disabled={exporting}
                onClick={onExport}
              >
                {exporting ? <Spinner /> : <DownloadMinimalisticLinearIcon />}
                Export
              </Button>
            </UIView>

            <UIView className="flex items-center justify-between gap-4 rounded-lg border border-border p-3">
              <UIView className="flex flex-col gap-0.5">
                <span className="text-sm font-medium">Import design</span>
                <span className="text-xs text-muted-foreground">
                  Replaces the current canvas — this can be undone with ⌘Z.
                </span>
              </UIView>
              <Button
                variant="outline"
                disabled={importing}
                onClick={() => inputRef.current?.click()}
              >
                {importing ? <Spinner /> : <SquareShareLineLinearIcon />}
                Import
              </Button>
            </UIView>
          </UIView>

          <input
            ref={inputRef}
            type="file"
            accept="application/json,.json"
            className="hidden"
            onChange={onImportFile}
          />
        </DialogPanel>

        <DialogFooter>
          <DialogClose render={<Button variant="ghost" />}>Close</DialogClose>
        </DialogFooter>
      </DialogPopup>
    </Dialog>
  );
};

export default DesignIO;
