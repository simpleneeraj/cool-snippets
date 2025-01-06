import { useClerk } from '@clerk/nextjs';
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
} from '@nextui-org/react';
import React from 'react';

enum DropdownActions {
  PROFILE = 'profile',
  SETTINGS = 'settings',
  TEAM_SETTINGS = 'team_settings',
  ANALYTICS = 'analytics',
  SYSTEM = 'system',
  CONFIGURATIONS = 'configurations',
  HELP_FEEDBACK = 'help_and_feedback',
  LOGOUT = 'logout',
}

export default function UserInfo() {
  const { openUserProfile, user, signOut } = useClerk();

  const onAction = React.useCallback(
    (key: DropdownActions) => {
      switch (key) {
        case DropdownActions.PROFILE:
          // Open the Current User Profile
          openUserProfile();
          break;
        case DropdownActions.SETTINGS:
          // Handle settings action
          console.log('Navigate to Settings');
          break;
        case DropdownActions.TEAM_SETTINGS:
          // Handle team settings action
          console.log('Navigate to Team Settings');
          break;
        case DropdownActions.ANALYTICS:
          // Handle analytics action
          console.log('Navigate to Analytics');
          break;
        case DropdownActions.SYSTEM:
          // Handle system action
          console.log('Navigate to System');
          break;
        case DropdownActions.CONFIGURATIONS:
          // Handle configurations action
          console.log('Navigate to Configurations');
          break;
        case DropdownActions.HELP_FEEDBACK:
          // Handle help and feedback action
          console.log('Navigate to Help & Feedback');
          break;
        case DropdownActions.LOGOUT:
          signOut();
          break;
        default:
          break;
      }
    },
    [openUserProfile, signOut]
  );

  return (
    <div className="flex items-center gap-4">
      <Dropdown placement="bottom-end">
        <DropdownTrigger>
          <Avatar
            size="sm"
            as="button"
            src={user?.imageUrl}
            className="transition-transform"
          />
        </DropdownTrigger>
        <DropdownMenu
          aria-label="User Actions"
          variant="flat"
          onAction={(key) => onAction(key as DropdownActions)}
        >
          <DropdownItem key={DropdownActions.PROFILE} className="h-14 gap-2">
            <p className="font-bold">Signed in as</p>
            <p className="font-bold">@{user?.username}</p>
          </DropdownItem>
          <DropdownItem key={DropdownActions.SETTINGS}>
            My Settings
          </DropdownItem>
          <DropdownItem key={DropdownActions.TEAM_SETTINGS}>
            Team Settings
          </DropdownItem>
          <DropdownItem key={DropdownActions.ANALYTICS}>Analytics</DropdownItem>
          <DropdownItem key={DropdownActions.SYSTEM}>System</DropdownItem>
          <DropdownItem key={DropdownActions.CONFIGURATIONS}>
            Configurations
          </DropdownItem>
          <DropdownItem key={DropdownActions.HELP_FEEDBACK}>
            Help & Feedback
          </DropdownItem>
          <DropdownItem key={DropdownActions.LOGOUT} color="danger">
            Log Out
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
