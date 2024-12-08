import React from 'react';
import UIView from '@/ui-kit/source/UIView';
import ContainerWidget from '@/components/app/widget/code/container';
import PrimaryAsideWidget from '@/components/app/widget/aside/primary';
import SecondaryAsideWidget from '@/components/app/widget/aside/secondary';

const EditorPage = () => {
  /**
   * Need to handle many things here
   * 1. User auth management
   * 2. Handle The Template data correctly
   * 3. Will giving a save button to user
   * 4.
   */
  return (
    <UIView className={'flex flex-1 relative'}>
      {/* LEFT SECTION */}
      <PrimaryAsideWidget />
      {/* CENTER SECTION */}
      <ContainerWidget />
      {/* RIGHT SECTION */}
      <SecondaryAsideWidget />
    </UIView>
  );
};
export default EditorPage;
