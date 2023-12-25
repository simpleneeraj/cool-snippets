import React from 'react';
import View from '@/ui/view';
import css from '@/styles/app.module.scss';

const AppTop = React.lazy(() => import('@/editor/top'));
const AppLeft = React.lazy(() => import('@/editor/left'));
const Center = React.lazy(() => import('@/editor/center'));
const AppRight = React.lazy(() => import('@/editor/right'));

const AppLayout = () => {
  return (
    <View className={css['app-box']}>
      <View className={css['container']}>
        <AppTop />
        <View className={css['grid']}>
          {/* <AppLeft /> */}
          <div></div>
          <View className={css['center']}>
            <View className={css['editor']}>
              <Center />
            </View>
          </View>
          <AppRight />
        </View>
      </View>
    </View>
  );
};
export default AppLayout;
