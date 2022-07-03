import MainLayer from "layout/main";
import Center from "app/center";
import React from "react";
import delay from "lib/delay";
import dynamic from "next/dynamic";
import AppHead from "layout/apphead";

const LazyDock = dynamic(() => import("./lazydock"));

const StickyButton = dynamic(async () => {
  await delay(2000);
  return await import("layout/sticky");
});

const App = () => {
  return (
    <MainLayer>
      <StickyButton top="20px" left="20px">
        Keyboard
      </StickyButton>
      <StickyButton top="20px" right="20px">
        Pricing
      </StickyButton>
      <Center />
      <LazyDock />
    </MainLayer>
  );
};
export default App;
