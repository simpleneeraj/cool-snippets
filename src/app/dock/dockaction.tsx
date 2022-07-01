import React from "react";
import useDock from "store/hooks/usedock";
import Options from "lib/icons/Options";
import PageFit from "lib/icons/PageFit";
import TextField from "lib/icons/TextField";
import ImageOutline from "lib/icons/ImageOutline";
import ColorFillOutline from "lib/icons/ColorFillOutline";
import CodeWorkingOutline from "lib/icons/CodeWorkingOutline";
import ArrowDownCircleOutline from "lib/icons/ArrowDownCircleOutline";

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
/**
 * 
Colors
Photos
Text
Download
Settings
 */
const dockIconsList = [
  {
    title: "Layout",
    icon: <PageFit size={25} />,
  },
  {
    title: "Colors",
    icon: <ColorFillOutline size={24} />,
  },
  {
    title: "Photos",
    icon: <ImageOutline size={24} />,
  },

  {
    title: "Preference",
    icon: <CodeWorkingOutline size={25} />,
  },
  {
    title: "Text",
    icon: <TextField size={25} />,
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
