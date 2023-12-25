import CloseOutline from '@/lib/icons/CloseOutline';
import React from 'react';
import { ModelProps } from '@/ui/types/model';
import css from '../css/model.module.scss';

const ModelWraper = React.forwardRef(
  (props: ModelProps, ref: React.Ref<HTMLDivElement>) => {
    const { children, model, onClose, ...rest } = props;

    return (
      <React.Fragment>
        {model ? (
          <div ref={ref} className={css.wraper} {...rest}>
            <button onClick={onClose} className={css['close-button']}>
              <CloseOutline size={20} />
            </button>
            {children}
          </div>
        ) : null}
      </React.Fragment>
    );
  }
);

ModelWraper.displayName = 'ModelWraper';

export default ModelWraper;
