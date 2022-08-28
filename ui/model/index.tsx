import React from "react";
import AnimationView from "ui/anim";
import { ModelProps } from "ui/types/model";
import css from "../css/model.module.scss";

const ModelWraper = React.forwardRef(
  (props: ModelProps, ref: React.Ref<HTMLDivElement>) => {
    const { children, model, ...rest } = props;

    return (
      <React.Fragment>
        {model ? (
          <div ref={ref} className={css.wraper} {...rest}>
            {children}
          </div>
        ) : null}
      </React.Fragment>
    );
  }
);

ModelWraper.displayName = "ModelWraper";

export default ModelWraper;
