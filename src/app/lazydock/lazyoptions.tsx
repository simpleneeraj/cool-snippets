import React from "react";
import delay from "lib/delay";
import SkeletonLoader from "./loader";
import useDock from "store/hooks/usedock";

const ms = 1000;
// Lazy Load
const TextOptions = React.lazy(() => delay(ms).then(() => import("./text")));
const PostOptions = React.lazy(() => delay(ms).then(() => import("./post")));
const ColorsOption = React.lazy(() => delay(ms).then(() => import("./colors")));
const LayoutOptions = React.lazy(() =>
  delay(ms).then(() => import("./layout"))
);
const PhotosOptions = React.lazy(() =>
  delay(ms).then(() => import("./photos"))
);
const DownloadOptions = React.lazy(() =>
  delay(ms).then(() => import("./download"))
);
const SettingsOptions = React.lazy(() =>
  delay(ms).then(() => import("./settings"))
);
const PreferencesOptions = React.lazy(() =>
  delay(ms).then(() => import("./preference"))
);

const LazyDockOptions = () => {
  const { dockComponetKey } = useDock();
  switch (dockComponetKey) {
    case "Post":
      return <PostOptions />;
    case "Layout":
      return <LayoutOptions />;
    case "Preference":
      return <PreferencesOptions />;
    case "Colors":
      return <ColorsOption />;
    case "Photos":
      return <PhotosOptions />;
    case "Text":
      return <TextOptions />;
    case "Download":
      return <DownloadOptions />;
    case "Setting":
      return <SettingsOptions />;
    default:
      return <SkeletonLoader />;
  }
};

export default LazyDockOptions;
