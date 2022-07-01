import useDock from "store/hooks/usedock";
import ColorsOption from "./colors";

// Lazy Load

import DownloadOptions from "./download";
import LayoutOptions from "./layout";
import PhotosOptions from "./photos";
import PreferencesOptions from "./preference";
import SettingsOptions from "./settings";
import TextOptions from "./text";

const LazyDockOptions = () => {
  const { dockComponetKey } = useDock();
  switch (dockComponetKey) {
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
    case "Settings":
      return <SettingsOptions />;
    default:
      return null;
  }
};

export default LazyDockOptions;
