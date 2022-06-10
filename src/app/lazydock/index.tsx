import useDock from "store/hooks/usedock";

// Lazy Load

import DownloadOptions from "./download";
import PhotosOptions from "./photos";
import PreferencesOptions from "./preference";
import SettingsOptions from "./settings";
import TextOptions from "./text";

const LazyDockOptions = () => {
  const { dockComponetKey } = useDock();
  switch (dockComponetKey) {
    case "Finder":
      return <PreferencesOptions />;
    case "Colors":
      return <p>{dockComponetKey}</p>;
    case "Photos":
      return <PhotosOptions />;
    case "Podcasts":
      return <TextOptions />;
    case "Favorite":
      return <p>{dockComponetKey}</p>;
    case "Download":
      return <DownloadOptions />;
    case "Settings":
      return <SettingsOptions />;
    default:
      return null;
  }
};

export default LazyDockOptions;
