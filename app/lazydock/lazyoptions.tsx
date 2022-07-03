import React from "react";
import useDock from "store/hooks/usedock";
import { arrayForRender } from "./dockArray";

const LazyDockOptions = () => {
  const { dockComponetKey } = useDock();
  const filterArray = arrayForRender.filter(
    (data) => data.title === dockComponetKey
  );

  return (
    <React.Fragment>
      {filterArray.map(({ Component }, index) => (
        <Component key={index} />
      ))}
    </React.Fragment>
  );
};

export default LazyDockOptions;
