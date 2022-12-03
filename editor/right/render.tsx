import delay from "lib/delay";
import dynamic from "next/dynamic";
import React from "react";
import UIIndicatorView from "ui/spinner";

import useTab from "store/hooks/use-tab";

const time = 1000;
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
const TemplateEditing = dynamic(
  async () => {
    await delay(time);
    return await import("./tabs/templates");
  },
  {
    loading: LoadingSpinner,
  }
);

const RenderComponents = () => {
  const { tabState } = useTab();
  switch (tabState.bottom.name) {
    case "CODE::EDIT":
      return <EditComponent />;
    case "CODE::INSERT":
      return <InsertComponent />;
    case "CODE::FILTER":
      return <FilterComponent />;
    case "CODE::IMAGES":
      return <ImagesComponent />;
    case "TEMPLATE::EDITING":
      return <TemplateEditing />;
    default:
      return <LoadingSpinner />;
  }
};
export default React.memo(RenderComponents);
