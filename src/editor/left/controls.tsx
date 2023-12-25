import React from 'react';
import Segment from '@/ui/segment';
import SegmentButton from '@/ui/segment/button';
import css from '@/styles/left.module.scss';
const Controls = () => {
  return (
    <div className={css.controls}>
      <Segment>
        <SegmentButton active text={'Code'} value={'Hello'} />
        <SegmentButton text={'Basic'} value={'Hello'} />
      </Segment>
    </div>
  );
};
export default Controls;
