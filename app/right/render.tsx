import delay from "lib/delay";
import dynamic from "next/dynamic";
import React from "react";
import useBottomTab from "store/hooks/usebottom";
import UIIndicatorView from "ui/spinner";

const time = 2000;
const LoadingSpinner = () => {
  return (
    <div
      style={{
        flex: "1",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <UIIndicatorView loadingText="Loading..." />
    </div>
  );
};
// DYNAMIC COMPONENTS

const EditComponent = dynamic(
  async () => {
    await delay(time);
    return await import("./tabs/edit");
  },
  {
    loading: LoadingSpinner,
  }
);
const FilterComponent = dynamic(
  async () => {
    await delay(time);
    return await import("./tabs/filter");
  },
  {
    loading: LoadingSpinner,
  }
);
const ImagesComponent = dynamic(
  async () => {
    await delay(time);
    return await import("./tabs/images");
  },
  {
    loading: LoadingSpinner,
  }
);
const InsertComponent = dynamic(
  async () => {
    await delay(time);
    return await import("./tabs/insert");
  },
  {
    loading: LoadingSpinner,
  }
);

const RenderComponents = () => {
  const { tabName } = useBottomTab();
  switch (tabName) {
    case "Edit":
      return <EditComponent />;
    case "Insert":
      return <InsertComponent />;
    case "Filter":
      return <FilterComponent />;
    case "Images":
      return <ImagesComponent />;
    default:
      return <LoadingSpinner />;
  }
};
export default React.memo(RenderComponents);
