import React from 'react';
import View from '@/ui/view';
import css from '@/styles/app.module.scss';

const AppTop = React.lazy(() => import('@/editor/top'));
const AppLeft = React.lazy(() => import('@/editor/left'));
const Center = React.lazy(() => import('@/editor/center'));
const AppRight = React.lazy(() => import('@/editor/right'));

const AppLayout = () => {
  return (
    <View className={`flex flex-col h-screen`}>
      <View className={css['container']}>
        <AppTop />
        <View className={''}>
          {/* <AppLeft /> */}
          {/* <div className="bg-neutral-50"></div> */}
          <View className={''}>
            <View className={''}>
              <Center />
            </View>
          </View>
          {/* <div></div> */}
          {/* <AppRight /> */}
        </View>
      </View>
    </View>
  );
};
export default AppLayout;
