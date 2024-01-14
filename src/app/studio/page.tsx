import React from 'react';
import UIView from '@/ui-kit/source/UIView';
import AppLayout from '@/components/app/layout';
import ContainerWidget from '@/components/app/widget/code/container';
import PrimaryAsideWidget from '@/components/app/widget/aside/primary';
import SecondryAsideWidget from '@/components/app/widget/aside/secondry';

const EditorPage = () => {
  return (
    <AppLayout>
      <UIView className={'flex flex-1'}>
        <PrimaryAsideWidget />
        <ContainerWidget />
        <SecondryAsideWidget />
      </UIView>
    </AppLayout>
  );
};
export default EditorPage;
