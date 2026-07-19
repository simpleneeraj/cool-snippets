import { Input } from '@/app-kit/ui/input';
import { Button } from '@/app-kit/ui/button';
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
} from '@/app-kit/ui/dialog';
import { Field, FieldLabel } from '@/app-kit/ui/field';
import { Form } from '@/app-kit/ui/form';

export default function EditTitleDialog() {
  //  <UIView className="flex items-center gap-2">
  //             <Badge variant={'outline'}>
  //               {appConfig.environment} {appConfig.version}
  //             </Badge>
  //           </UIView>
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="ghost" />}>
        <h4 className="flex items-center gap-1 text-lg text-foreground">
          Untitle code snippet
        </h4>
      </DialogTrigger>

      <DialogPopup className="sm:max-w-sm">
        <Form className="contents">
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
              <Input type="text" placeholder="Enter project name" autoFocus />
            </Field>
          </DialogPanel>

          <DialogFooter>
            <DialogClose render={<Button variant="ghost" />}>
              Cancel
            </DialogClose>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </Form>
      </DialogPopup>
    </Dialog>
  );
}
