'use client';
import React from 'react';
import View from '@/ui/view';
import BottomTabs from './bottom';
import dynamic from 'next/dynamic';
import css from '@/styles/app.module.scss';

const RenderComponents = dynamic(() => import('./render'));

const AppRight = () => {
  return (
    <View className={css.right}>
      <View className={css.tabContainer}>
        <RenderComponents />
      </View>
      <BottomTabs />
    </View>
  );
};
export default AppRight;
