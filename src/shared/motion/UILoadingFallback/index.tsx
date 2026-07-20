import UIView from '@shared/uikit/UIView';

const UILoadingFallback = () => (
  <UIView className="flex-1 flex flex-col items-center justify-center min-h-96">
    <span className="pointer-events-none whitespace-pre-wrap bg-linear-to-b from-black to-gray-300/80 bg-clip-text text-center text-2xl leading-none text-transparent dark:from-white dark:to-slate-900/10">
      Loading...
    </span>
  </UIView>
);

export default UILoadingFallback;
