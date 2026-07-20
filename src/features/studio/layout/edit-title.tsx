'use client';

import React from 'react';
import { Input } from '@shared/ui/input';
import { Button } from '@shared/ui/button';
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
import { Field, FieldLabel } from '@shared/ui/field';
import { Form } from '@shared/ui/form';
import useSlideEditor from '@features/studio/store/hooks/use-editor';

export const UNTITLED_SNIPPET = 'Untitled code snippet';

export default function EditTitleDialog() {
  const { currentSlide, onChangeSlide } = useSlideEditor();
  const [open, setOpen] = React.useState(false);
  const [draft, setDraft] = React.useState('');

  const name = currentSlide?.name?.trim() || UNTITLED_SNIPPET;

  // Seed the field from the stored name each time the dialog opens, so a
  // cancelled edit never leaks into the next one.
  const onOpenChange = (nextOpen: boolean) => {
    if (nextOpen) setDraft(currentSlide?.name ?? '');
    setOpen(nextOpen);
  };

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const trimmed = draft.trim();
    // An empty name would render as a blank header with no way back, so treat
    // it as "no change" rather than writing it.
    if (trimmed) onChangeSlide({ name: trimmed });

    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger render={<Button variant="ghost" />}>
        <h4 className="flex items-center gap-1 text-lg text-foreground">
          {name}
        </h4>
      </DialogTrigger>

      <DialogPopup className="sm:max-w-sm">
        <Form className="contents" onSubmit={onSubmit}>
          <DialogHeader>
            <DialogTitle>Rename project</DialogTitle>
            <DialogDescription>
              Update the project name. This will be visible across your
              workspace.
            </DialogDescription>
          </DialogHeader>

          <DialogPanel className="grid gap-4">
            <Field>
              <FieldLabel>Project name</FieldLabel>
              <Input
                type="text"
                placeholder="Enter project name"
                value={draft}
                onChange={(event) => setDraft(event.target.value)}
                autoFocus
              />
            </Field>
          </DialogPanel>

          <DialogFooter>
            <DialogClose render={<Button variant="ghost" />}>Cancel</DialogClose>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </Form>
      </DialogPopup>
    </Dialog>
  );
}
