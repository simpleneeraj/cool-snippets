import React from 'react';
import Option from '@/lib/icons/Option';
import Options from '@/lib/icons/Options';
import PageFit from '@/lib/icons/PageFit';
import PaintBrush from '@/lib/icons/PaintBrush';
import ChevronUp from '@/lib/icons/ChevronUp';
import css from '@/styles/insert.module.scss';
import GitNetworkOutline from '@/lib/icons/GitNetworkOutline';

const Element = () => {
  return (
    <div className={css.grid}>
      <div className={css.item}>
        <PageFit fill="#eee" />
      </div>
      <div className={css.item}>
        <Option fill="#eee" />
      </div>
      <div className={css.item}>
        <Options fill="#eee" />
      </div>
      <div className={css.item}>
        <PaintBrush fill="#eee" />
      </div>
      <div className={css.item}>
        <GitNetworkOutline />
      </div>
      <div className={css.item}>
        <ChevronUp />
      </div>
    </div>
  );
};
export default Element;
