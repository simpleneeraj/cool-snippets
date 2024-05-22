import React from 'react';
import UIView from '@/ui-kit/source/UIView';
import ContainerWidget from '@/components/app/widget/code/container';
import PrimaryAsideWidget from '@/components/app/widget/aside/primary';
import SecondaryAsideWidget from '@/components/app/widget/aside/secondary';

const EditorPage = () => {
  return (
    <UIView className={'flex flex-1'}>
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
