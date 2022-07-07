import React from "react";
import delay from "lib/delay";
import { SVGTYPE } from "typings/app";

// Icons
import Options from "lib/icons/Options";
import PageFit from "lib/icons/PageFit";
import TextField from "lib/icons/TextField";
import AppRecent from "lib/icons/AppRecent";
import PaintBrush from "lib/icons/PaintBrush";
import ImageOutline from "lib/icons/ImageOutline";
import ColorBackground from "lib/icons/ColorBackground";
import BroadActivityFeed from "lib/icons/BroadActivityFeed";
import ArrowDownCircleOutline from "lib/icons/ArrowDownCircleOutline";

const ms = 1000;
// Lazy Load Components
const TextOptions = React.lazy(async () => {
  await delay(ms);
  return await import("./text");
});
const EditorOptions = React.lazy(async () => {
  await delay(ms);
  return await import("./post");
});
const ColorsOptions = React.lazy(async () => {
  await delay(ms);
  return await import("./backgrounds/colors");
});

const PhotosOptions = React.lazy(async () => {
  await delay(ms);
  return await import("./backgrounds/photos");
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
  {
    title: "Templates",
    component: () => <CanvasOptions />,
    icon: (props: SVGTYPE) => <AppRecent size={28} {...props} />,
  },
  {
    title: "Canvas",
    component: () => <CanvasOptions />,
    icon: (props: SVGTYPE) => <PageFit size={28} {...props} />,
  },
  {
    title: "Editor",
    component: () => <EditorOptions />,
    icon: (props: SVGTYPE) => <BroadActivityFeed size={28} {...props} />,
  },
  {
    title: "Text",
    component: () => <TextOptions />,
    icon: (props: SVGTYPE) => <TextField size={28} {...props} />,
  },

  {
    title: "Preference",
    component: () => <PreferencesOptions />,
    icon: (props: SVGTYPE) => <PaintBrush size={28} {...props} />,
  },

  {
    title: "Photos",
    component: () => <PhotosOptions />,
    icon: (props: SVGTYPE) => <ImageOutline size={28} {...props} />,
  },
  {
    title: "Colors",
    component: () => <ColorsOptions />,
    icon: (props: SVGTYPE) => <ColorBackground size={28} {...props} />,
  },
  {
    title: "Download",
    component: () => <DownloadOptions />,
    icon: (props: SVGTYPE) => <ArrowDownCircleOutline size={28} {...props} />,
  },
  {
    title: "Settings",
    component: () => <SettingsOptions />,
    icon: (props: SVGTYPE) => <Options size={28} {...props} />,
  },
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
