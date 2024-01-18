import React from 'react';
import UIView from '@/ui-kit/source/UIView';
import ContainerWidget from '@/components/app/widget/code/container';
import PrimaryAsideWidget from '@/components/app/widget/aside/primary';
import SecondryAsideWidget from '@/components/app/widget/aside/secondry';

const EditorPage = () => {
  return (
    <UIView className={'flex flex-1'}>
      <PrimaryAsideWidget />
      <ContainerWidget />
      <SecondryAsideWidget />
    </UIView>
  );
};
export default EditorPage;
