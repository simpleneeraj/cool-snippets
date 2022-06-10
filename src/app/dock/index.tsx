import React, { useTransition } from "react";
import css from "styles/dock.module.scss";
import useDock from "store/hooks/usedock";
import useOnClickOutside from "hooks/useClick";

/**************************
 Lazy Loading Components
 ***************************/
// ONE
const LazyDockOptions = React.lazy(() => import("app/lazydock"));
// TWO
const LazyDockAction = React.lazy(() => import("./dockaction"));
// const LazyDockAction = reactLazy(() => import("./dockaction"));

const MacOSLikeDock = () => {
  const { toggleDock, updateToggleDock } = useDock();

  const [isPending, transitionCallback] = useTransition();
  /**************************
  Dock Close Handler
  ***************************/
  const dockClose = React.useCallback(() => {
    transitionCallback(() => updateToggleDock(false));
    // eslint-disable-next-line
  }, [toggleDock]);
  /**************************
  Dock Ref
  ***************************/
  const dockRef = useOnClickOutside(() => dockClose());
  /**************************
  Dock Style Condition
  ***************************/
  const dockStyle = {
    frontStyle: { transform: `rotateX(${toggleDock ? "180deg" : "0deg"})` },
    backStyle: {
      transform: `translateX(-50%) rotateX(${toggleDock ? "0deg" : "-180deg"})`,
    },
  };
  return (
    <div ref={dockRef} className={css.layer}>
      <div className={css.main}>
        {/* Front */}
        <div className={css.front} style={dockStyle.frontStyle}>
          <div className={css.items}>
            <React.Suspense fallback={<p>Loading...</p>}>
              {isPending ? <p>Loading...</p> : <LazyDockAction />}
            </React.Suspense>
          </div>
        </div>
        {/* Back */}
        <div className={css.back} style={dockStyle.backStyle}>
          <div className={css.items}>
            <React.Suspense fallback={<p>Loading...</p>}>
              {isPending ? <p>Loading...</p> : <LazyDockOptions />}
            </React.Suspense>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MacOSLikeDock;
