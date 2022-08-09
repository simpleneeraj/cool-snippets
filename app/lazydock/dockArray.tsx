import React from "react";
import delay from "lib/delay";
import { SVGTYPE } from "typings/app";
// Icons
import PageFit from "lib/icons/PageFit";
import TextField from "lib/icons/TextField";
import PaintBrush from "lib/icons/PaintBrush";
import ImageOutline from "lib/icons/ImageOutline";
import ColorBackground from "lib/icons/ColorBackground";
import ArrowDownCircleOutline from "lib/icons/ArrowDownCircleOutline";

const size = 25;
const ms = 1000;
// Lazy Load Components
const TextOptions = React.lazy(async () => {
  await delay(ms);
  return await import("./text");
});

const ColorsOptions = React.lazy(async () => {
  await delay(ms);
  return await import("./backgrounds/colors");
});

const PhotosOptions = React.lazy(async () => {
  await delay(ms);
  return await import("./backgrounds");
});

const CanvasOptions = React.lazy(async () => {
  await delay(ms);
  return await import("./canvas");
});
const DownloadOptions = React.lazy(async () => {
  await delay(ms);
  return await import("./download");
});
const SettingsOptions = React.lazy(async () => {
  await delay(ms);
  return await import("./settings");
});
const PreferencesOptions = React.lazy(async () => {
  await delay(ms);
  return await import("./preference");
});

const DockComponentArray = [
  // {
  //   title: "Templates",
  //   component: () => <CanvasOptions />,
  //   icon: (props: SVGTYPE) => <AppRecent size={size} {...props} />,
  // },
  {
    title: "Canvas",
    component: () => <CanvasOptions />,
    icon: (props: SVGTYPE) => <PageFit size={size} {...props} />,
  },
  // {
  //   title: "Editor",
  //   component: () => <EditorOptions />,
  //   icon: (props: SVGTYPE) => <BroadActivityFeed size={size} {...props} />,
  // },
  {
    title: "Text",
    component: () => <TextOptions />,
    icon: (props: SVGTYPE) => <TextField size={size} {...props} />,
  },

  {
    title: "Preference",
    component: () => <PreferencesOptions />,
    icon: (props: SVGTYPE) => <PaintBrush size={size} {...props} />,
  },

  {
    title: "Photos",
    component: () => <PhotosOptions />,
    icon: (props: SVGTYPE) => <ImageOutline size={size} {...props} />,
  },
  {
    title: "Colors",
    component: () => <ColorsOptions />,
    icon: (props: SVGTYPE) => <ColorBackground size={size} {...props} />,
  },
  {
    title: "Download",
    component: () => <DownloadOptions />,
    icon: (props: SVGTYPE) => <ArrowDownCircleOutline size={size} {...props} />,
  },
  // {
  //   title: "Settings",
  //   component: () => <SettingsOptions />,
  //   icon: (props: SVGTYPE) => <Options size={size} {...props} />,
  // },
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
