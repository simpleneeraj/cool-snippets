'use client';

import UIView from '@/app-kit/source/UIView';
import { Button } from '@/app-kit/ui/button';
import { Frame, FrameFooter, FramePanel } from '@/app-kit/ui/frame';
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
import { Input } from '@/app-kit/ui/input';
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from '@/app-kit/ui/empty';
import { BookIcon, RouteIcon } from 'lucide-react';
import ContainerWidget from '@/components/app/widget/code/container';
import SecondaryAsideWidget from '@/components/app/widget/aside/secondary';
import HeaderScreen from '@/components/app/screens/edit/header';
import Canvas from '@/components/app/canvas';

export default function EditorPageClient() {
  return (
    <UIView className="relative flex flex-1 h-screen w-screen overflow-hidden">
      {/* 
        Ideally, the header and sidebars should be overlaid *on top* of the canvas, 
        or the canvas should be the background. Use z-indexes to stack them.
      */}
      
      {/* Canvas Layer - Background */}
      <div className="absolute inset-0 z-0">
          <Canvas />
      </div>

       {/* UI Layer - Foreground */}
      <div className="pointer-events-none absolute inset-0 z-10 flex flex-col justify-between">
           {/* Header Area */}
          <div className="pointer-events-auto flex justify-center pt-2">
             <HeaderScreen />
          </div>

          <div className="flex flex-1 relative">
               {/* Left Sidebar */}
              <div className="pointer-events-auto absolute left-2 top-0 h-full pb-2">
                 <Frame className="w-80 h-full border bg-background/80 backdrop-blur-sm">
                  <FramePanel className="h-full">{/* Left Saman */}</FramePanel>
                  <FrameFooter>
                    <p className="text-muted-foreground text-sm">Footer</p>
                  </FrameFooter>
                </Frame>
              </div>

               {/* Right Sidebar */}
              <div className="pointer-events-auto absolute right-2 top-0 h-full pb-2">
                 <Frame className="w-80 h-full border bg-background/80 backdrop-blur-sm">
                  <FramePanel className="layout-fill">
                    <SecondaryAsideWidget />
                  </FramePanel>
                  <FrameFooter>
                    <p className="text-muted-foreground text-sm">Footer</p>
                  </FrameFooter>
                </Frame>
              </div>
          </div>
      </div>
    </UIView>
  );
}

function Particle() {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" />}>
        Open parent
      </DialogTrigger>
      <DialogPopup showCloseButton={false}>
        <DialogHeader>
          <DialogTitle>Manage team member</DialogTitle>
          <DialogDescription>
            View and manage a user in your team.
          </DialogDescription>
        </DialogHeader>
        <DialogPanel className="grid gap-4">
          <div className="grid gap-1">
            <p className="text-muted-foreground text-sm">Name</p>
            <p className="font-medium text-sm">Bora Baloglu</p>
          </div>
          <div className="grid gap-1">
            <p className="text-muted-foreground text-sm">Email</p>
            <p className="font-medium text-sm">bora@example.com</p>
          </div>
        </DialogPanel>
        <DialogFooter>
          <Dialog>
            <DialogTrigger render={<Button variant="outline" />}>
              Edit details
            </DialogTrigger>
            <DialogPopup showCloseButton={false}>
              <DialogHeader>
                <DialogTitle>Edit details</DialogTitle>
                <DialogDescription>
                  Make changes to the member&apos;s information.
                </DialogDescription>
              </DialogHeader>
              <DialogPanel className="grid gap-4">
                <Field>
                  <FieldLabel>Name</FieldLabel>
                  <Input defaultValue="Bora Baloglu" type="text" />
                </Field>
                <Field>
                  <FieldLabel>Email</FieldLabel>
                  <Input defaultValue="bora@example.com" type="text" />
                </Field>
              </DialogPanel>
              <DialogFooter>
                <DialogClose render={<Button variant="ghost" />}>
                  Cancel
                </DialogClose>
                <Button type="submit">Save changes</Button>
              </DialogFooter>
            </DialogPopup>
          </Dialog>
        </DialogFooter>
      </DialogPopup>
    </Dialog>
  );
}

const Mepty = () => {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <RouteIcon />
        </EmptyMedia>
        <EmptyTitle>No upcoming meetings</EmptyTitle>
        <EmptyDescription>Create a meeting to get started.</EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <div className="flex gap-2">
          <Particle />
          <Button size="sm">Create meeting</Button>
          <Button size="sm" variant="outline">
            <BookIcon />
            View docs
          </Button>
        </div>
      </EmptyContent>
    </Empty>
  );
};

{
  /* <div
          className={cn(
            'absolute inset-0 z-auto',
            'bg-size-[10px_10px]',
            'bg-[radial-gradient(#d4d4d4_1px,transparent_1px)]',
            'dark:bg-[radial-gradient(#404040_1px,transparent_1px)]',
          )}
        />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white mask-[radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div> */
}
