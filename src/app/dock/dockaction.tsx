import React from "react";
import dockIconsList from "lib/dockicons";
import useDock from "store/hooks/usedock";

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
      {dockIconsList.map((d, i) => (
        <li title={d.name} onClick={() => dockApps(d.name)} key={i}>
          <img src={d.src} alt={d.name} />
        </li>
      ))}
    </React.Fragment>
  );
};
export default LazyDockAction;
