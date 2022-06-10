import { Capture } from "capture-dom";
import React, { lazy } from "react";
import css from "styles/center.module.scss";
import ShadowLayer from "./shadow";

const CodeEditor = lazy(() => import("./editor"));

const Center = () => {
  return (
    <div className={css.container}>
      <div className={css.smooth}>
        <Capture className={css.frame}>
          <div className={css.editor}>
            <React.Suspense fallback={<ShadowLayer />}>
              <CodeEditor />
              <ShadowLayer />
            </React.Suspense>
          </div>
        </Capture>
      </div>
    </div>
  );
};
export default Center;

/**
 * style="background: linear-gradient(140deg, rgb(207, 47, 152), rgb(106, 61, 236));"
 * --syntax-text:#FFFFFF; --syntax-background:rgba 0,0,0,0.75; --syntax-string:#E9AEFE; --syntax-comment:#8A757D; --syntax-variable:#F8518D; --syntax-variable-2:#FFFFFF; --syntax-variable-3:#9AEC7D; --syntax-number:#55E7B2; --syntax-atom:#55E7B2; --syntax-keyword:#6599FF; --syntax-property:#49E8F2; --syntax-definition:#F8518D; --syntax-meta:#ECFEEF; --syntax-operator:#6599FF; --syntax-attribute:#F8518D; --syntax-tag:#6599FF
 */
