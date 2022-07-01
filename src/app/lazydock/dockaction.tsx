import React from "react";
import PageFit from "lib/icons/PageFit";
import useDock from "store/hooks/usedock";
import Options from "lib/icons/Options";
import TextField from "lib/icons/TextField";
import ColorBackground from "lib/icons/ColorBackground";
import BroadActivityFeed from "lib/icons/BroadActivityFeed";
import ArrowDownCircleOutline from "lib/icons/ArrowDownCircleOutline";
import PaintBrush from "lib/icons/PaintBrush";
import ImageOutline from "lib/icons/ImageOutline";

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
      {dockIconsList.map(({ icon, title }, i) => {
        return (
          <li key={i} title={title} onClick={() => dockApps(title)}>
            <i>{icon}</i>
          </li>
        );
      })}
    </React.Fragment>
  );
};
export default LazyDockAction;

const dockIconsList = [
  {
    title: "Preference",
    icon: <PaintBrush size={24} />,
  },
  {
    title: "Layout",
    icon: <PageFit size={25} />,
  },
  {
    title: "Post",
    icon: <BroadActivityFeed size={23} />,
  },
  {
    title: "Text",
    icon: <TextField size={25} />,
  },
  {
    title: "Colors",
    icon: <ColorBackground size={24} />,
  },
  {
    title: "Photos",
    icon: <ImageOutline size={24} />,
  },
  {
    title: "Download",
    icon: <ArrowDownCircleOutline size={25} />,
  },
  {
    title: "Settings",
    icon: <Options size={25} />,
  },
];
