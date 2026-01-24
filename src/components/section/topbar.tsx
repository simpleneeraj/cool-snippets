import React from 'react';
import UIView from '@/app-kit/source/UIView';
import UISpotlight from '@/app-kit/components/UISpotlight';
import UIGridPattern from '@/app-kit/components/UIBackgroundPattern/grid-pattern';

interface TopbarProps {
  title?: string;
  description?: string;
  startContent?: React.ReactNode | React.ReactNode[];
  children?: React.ReactNode | React.ReactNode[];
}

const Topbar: React.FC<TopbarProps> = ({
  title,
  description,
  startContent,
  children,
}) => {
  return (
    <UIView className="flex items-center justify-center w-full flex-col">
      <UIView className="relative flex h-[40vh] sm:h-[60vh] w-full flex-col overflow-hidden bg-background">
        <UIView className="container mx-auto flex flex-1 flex-col items-center justify-center overflow-hidden px-8">
          <UIView className="z-20 flex flex-col items-center justify-center gap-4 sm:gap-6">
            <UIGridPattern
              squares={[
                [4, 4],
                [5, 1],
                [8, 2],
                [5, 3],
                [5, 5],
                [10, 10],
                [12, 15],
                [15, 10],
                [10, 15],
                [15, 10],
                [10, 15],
                [15, 10],
              ]}
              className={
                'mask-[radial-gradient(500px_circle_at_center,rgba(255,255,255,0.75),transparent)] inset-x-0 inset-y-[-30%] h-[200%] skew-y-12'
              }
            />
            <UISpotlight
              className="-top-40 left-0 md:left-60 md:-top-20"
              fill="#9089fc"
            />
            {startContent}
            <UIView className="text-center">
              {title && (
                <h2 className="bg-clip-text text-transparent text-center bg-linear-to-b from-default-900 to-default-700 dark:from-default-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
                  {title}
                </h2>
              )}
              {description && (
                <p className="max-w-xl mx-auto text-sm md:text-lg text-default-700 dark:text-default-400 text-center">
                  {description}
                </p>
              )}
            </UIView>
          </UIView>
        </UIView>
        {children}
      </UIView>
    </UIView>
  );
};

export default Topbar;
