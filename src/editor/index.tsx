import React from 'react';
import View from '@/ui/view';
import dynamic from 'next/dynamic';
import css from '@/styles/app.module.scss';
import InlineStyle from './center/inline';
import delay from '@/lib/delay';
import Skeleton from '@/ui/skeleton';

const AppTop = dynamic(() => import('./top'), { suspense: true });
const AppLeft = dynamic(
  async () => {
    await delay(1000);
    return await import('./left');
  },
  {
    suspense: true,
  }
);
const Center = dynamic(
  async () => {
    await delay(2000);
    return await import('./center');
  },
  {
    suspense: true,
  }
);
const AppRight = dynamic(
  async () => {
    await delay(1000);
    return await import('./right');
  },
  {
    suspense: true,
  }
);

const CodeAppMain = () => {
  return (
    <View className={css['app-box']}>
      <View className={css['container']}>
        <React.Suspense
          fallback={<Skeleton animation={false} className={css.top} />}
        >
          <AppTop />
        </React.Suspense>
        <View className={css['grid']}>
          <React.Suspense
            fallback={<Skeleton animation={false} className={css.left} />}
          >
            <AppLeft />
          </React.Suspense>
          <View className={css['center']}>
            <React.Suspense
              fallback={
                <View className={css['editor']}>
                  <Skeleton
                    animation={false}
                    style={{
                      alignItems: 'center',
                      margin: '0 6px 6px',
                      borderRadius: '10px',
                      padding: '1rem',
                      width: '450px',
                      aspectRatio: '1/1',
                    }}
                  />
                </View>
              }
            >
              <View className={css['editor']}>
                <Center />
              </View>
            </React.Suspense>
            <InlineStyle />
          </View>
          <React.Suspense
            fallback={
              <View className={css.right}>
                <Skeleton animation={false} className={css.tabContainer} />
              </View>
            }
          >
            <AppRight />
          </React.Suspense>
        </View>
      </View>
    </View>
  );
};
export default CodeAppMain;
