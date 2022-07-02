import React from "react";
import delay from "lib/delay";
import { SVGTYPE } from "typings/app";

// Icons
import PageFit from "lib/icons/PageFit";
import TextField from "lib/icons/TextField";
import ColorBackground from "lib/icons/ColorBackground";
import BroadActivityFeed from "lib/icons/BroadActivityFeed";
import ArrowDownCircleOutline from "lib/icons/ArrowDownCircleOutline";
import PaintBrush from "lib/icons/PaintBrush";
import ImageOutline from "lib/icons/ImageOutline";
import Options from "lib/icons/Options";

const ms = 1000;
// Lazy Load Components
const TextOptions = React.lazy(() => delay(ms).then(() => import("./text")));
const PostOptions = React.lazy(() => delay(ms).then(() => import("./post")));
const ColorsOptions = React.lazy(() =>
  delay(ms).then(() => import("./colors"))
);
const CanvasOptions = React.lazy(() =>
  delay(ms).then(() => import("./canvas"))
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

const DockComponentArray = [
  {
    title: "Canvas",
    component: () => <CanvasOptions />,
    icon: (props: SVGTYPE) => <PageFit size={25} {...props} />,
  },
  {
    title: "Photos",
    component: () => <PhotosOptions />,
    icon: (props: SVGTYPE) => <ImageOutline size={24} {...props} />,
  },
  {
    title: "Colors",
    component: () => <ColorsOptions />,
    icon: (props: SVGTYPE) => <ColorBackground size={24} {...props} />,
  },
  {
    title: "Preference",
    component: () => <PreferencesOptions />,
    icon: (props: SVGTYPE) => <PaintBrush size={24} {...props} />,
  },
  {
    title: "Text",
    component: () => <TextOptions />,
    icon: (props: SVGTYPE) => <TextField size={25} {...props} />,
  },
  {
    title: "Post",
    component: () => <PostOptions />,
    icon: (props: SVGTYPE) => <BroadActivityFeed size={23} {...props} />,
  },
  {
    title: "Download",
    component: () => <DownloadOptions />,
    icon: (props: SVGTYPE) => <ArrowDownCircleOutline size={25} {...props} />,
  },
  //   {
  //     title: "Settings",
  //     component: () => <SettingsOptions />,
  //     icon: (props: SVGTYPE) => <Options size={25} {...props} />,
  //   },
];

/**************************
For Action
***************************/
const arrayForAction = DockComponentArray.map((d) => {
  return {
    title: d.title,
    icon: d.icon,
  };
});
/**************************
For Component Render
***************************/
const arrayForRender = DockComponentArray.map((d) => {
  return {
    title: d.title,
    Component: d.component,
  };
});
export { arrayForAction, arrayForRender };
