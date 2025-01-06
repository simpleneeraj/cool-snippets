import React from 'react';
import {
  Button,
  Card,
  CardFooter,
  CardHeader,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
  Image,
  NavbarItem,
  useDisclosure,
} from '@nextui-org/react';
import { Icon } from '@iconify/react/dist/iconify.js';

export const NotificationsDropdown = () => {
  const disclose = useDisclosure();

  return (
    <Dropdown placement="bottom-end" {...disclose}>
      <DropdownTrigger>
        <NavbarItem>
          <Button
            isIconOnly
            radius="full"
            variant="light"
            onPress={disclose.onOpenChange}
          >
            <Icon className="h-6 w-6" icon="solar:bell-bing-bold-duotone" />
          </Button>
        </NavbarItem>
      </DropdownTrigger>
      <DropdownMenu className="w-80" aria-label="Notifications">
        <DropdownItem
          key="overview"
          variant="light"
          className="p-0"
          isReadOnly
          onPress={(e) => e.continuePropagation()}
        >
          <Card
            fullWidth
            isFooterBlurred
            className="w-full h-[200px] col-span-12 sm:col-span-7"
          >
            <CardHeader className="absolute z-10 top-1 flex-col items-start">
              <h4 className="text-white/90 font-medium text-xl">
                Notifications
              </h4>
            </CardHeader>
            <Image
              removeWrapper
              alt="Code snippets notification background"
              className="z-0 w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1657215373962-d84815b7ddbb?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <CardFooter className="absolute bg-black/40 bottom-0 z-10">
              <div className="flex flex-grow gap-2 items-center">
                <div className="flex flex-col">
                  <p className="text-tiny text-white/60">5 new updates</p>
                  <p className="text-tiny text-white/60">
                    Stay on top of your code notifications.
                  </p>
                </div>
              </div>
            </CardFooter>
          </Card>
        </DropdownItem>
        <DropdownSection>
          <DropdownItem
            classNames={{
              base: 'py-2',
              title: 'text-base font-semibold',
            }}
            key="new-snippet"
            description="Check out the latest snippet created by your collaborators."
          >
            📝 New Snippet Added
          </DropdownItem>
          <DropdownItem
            key="feedback"
            classNames={{
              base: 'py-2',
              title: 'text-base font-semibold',
            }}
            description="Your snippet has received new feedback or comments."
          >
            💬 Feedback Received
          </DropdownItem>
          <DropdownItem
            key="likes"
            classNames={{
              base: 'py-2',
              title: 'text-base font-semibold',
            }}
            description="One of your snippets is trending with new likes!"
          >
            👍 Snippet Trending
          </DropdownItem>
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  );
};
