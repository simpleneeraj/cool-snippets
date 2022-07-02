import React from "react";
import useDock from "store/hooks/usedock";
import { arrayForAction } from "./dockArray";

const LazyDockAction = () => {
  const { updateDockComponent, updateToggleDock } = useDock();
  const dockApps = React.useCallback(
    (keyName: string) => {
      updateToggleDock(true);
      updateDockComponent(keyName);
    },
    [updateDockComponent, updateToggleDock]
  );

  return (
    <React.Fragment>
      {arrayForAction.map(({ icon: SVG, title }, i) => {
        return (
          <span key={i} title={title} onClick={() => dockApps(title)}>
            <i>{<SVG key={i} />}</i>
          </span>
        );
      })}
    </React.Fragment>
  );
};
export default LazyDockAction;
