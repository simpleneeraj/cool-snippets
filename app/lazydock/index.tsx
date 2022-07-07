import React from "react";
import delay from "lib/delay";
import SkeletonLoader from "./loader";
import css from "styles/dock.module.scss";
import useDock from "store/hooks/usedock";
import CloseOutline from "lib/icons/CloseOutline";
import useKey from "hooks/useKey";
import dynamic from "next/dynamic";

interface DockProps {
  style: React.CSSProperties;
}
interface CloseIconProps {
  onClick: () => void;
  visible: boolean;
}

//Lazy Loading Components

const LazyDockOptions = dynamic(
  async () => {
    await delay(1500);
    return await import("./lazyoptions");
  },
  {
    loading: () => <SkeletonLoader />,
  }
);

const LazyDockAction = dynamic(
  async () => {
    await delay(2000);
    return await import("./dockaction");
  },
  {
    loading: () => <SkeletonLoader />,
  }
);

/**
 * Lazy Dock
 *
 */
const LazyDock = () => {
  const { toggleDock, updateToggleDock } = useDock();

  const dockBarCloseHandler = React.useCallback(() => {
    updateToggleDock(false);
  }, [updateToggleDock]);

  useKey("Escape", () => dockBarCloseHandler());
  const { s$b, s$f } = dockStyle(toggleDock);
  return (
    <div className={css.container}>
      <CloseIcon visible={toggleDock} onClick={dockBarCloseHandler} />
      <div className={css.inner}>
        {/* Front */}
        <DockFront style={s$f} />
        <DockBack style={s$b} />
        {/* Back */}
      </div>
    </div>
  );
};
export default LazyDock;

const DockFront = ({ style }: DockProps) => {
  return (
    <div className={css.front} style={style}>
      <div className={css.options}>
        <React.Suspense fallback={<SkeletonLoader />}>
          <LazyDockAction />
        </React.Suspense>
      </div>
    </div>
  );
};
const DockBack = ({ style }: DockProps) => {
  return (
    <div className={css.back} style={style}>
      <div className={css.options}>
        <React.Suspense fallback={<SkeletonLoader />}>
          <LazyDockOptions />
        </React.Suspense>
      </div>
    </div>
  );
};

const dockStyle = (v: boolean) => {
  const rf = `rotateX(${v ? "180deg" : "0deg"})`;
  const rb = `rotateX(${v ? "0deg" : "-180deg"}`;
  let s$f = { transform: rf };
  let s$b = { transform: `translateX(-50%) ${rb})` };
  return { s$f, s$b };
};

const CloseIcon = ({ onClick, visible }: CloseIconProps) => {
  return (
    <React.Fragment>
      {visible && (
        <button
          title="close dock bar"
          onClick={onClick}
          className={css.close}
          aria-label="close dock bar"
        >
          <CloseOutline size={20} />
        </button>
      )}
    </React.Fragment>
  );
};
