import React from "react";
import delay from "lib/delay";
import SkeletonLoader from "./loader";
import css from "styles/dock.module.scss";
import useDock from "store/hooks/usedock";
import CloseOutline from "lib/icons/CloseOutline";

/**************************
 Lazy Loading Components
 ***************************/

const LazyDockOptions = React.lazy(async () => {
  await delay(2000);
  return await import("app/lazydock/lazyoptions");
});

const LazyDockAction = React.lazy(async () => {
  await delay(3000);
  return await import("./dockaction");
});

/**
 * Lazy Dock
 *
 */
const LazyDock = () => {
  const { toggleDock, updateToggleDock } = useDock();

  const dockClose = React.useCallback(() => {
    updateToggleDock(false);
  }, [updateToggleDock]);

  const { backStyle, frontStyle } = dockStyle(toggleDock);

  return (
    <div className={css.layer}>
      {toggleDock && (
        <button
          title="close dock bar"
          onClick={dockClose}
          className={css.close}
          aria-label="close dock bar"
        >
          <CloseOutline size={20} />
        </button>
      )}
      <div className={css.main}>
        {/* Front */}
        <div className={css.front} style={frontStyle}>
          <div className={css.items}>
            <React.Suspense fallback={<SkeletonLoader />}>
              <LazyDockAction />
            </React.Suspense>
          </div>
        </div>
        {/* Back */}
        <div className={css.back} style={backStyle}>
          <div className={css.items}>
            <React.Suspense fallback={<SkeletonLoader />}>
              <LazyDockOptions />
            </React.Suspense>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LazyDock;

const dockStyle = (v: boolean) => {
  let frontStyle = { transform: `rotateX(${v ? "180deg" : "0deg"})` };
  let backStyle = {
    transform: `translateX(-50%) rotateX(${v ? "0deg" : "-180deg"})`,
  };
  return { frontStyle, backStyle };
};
