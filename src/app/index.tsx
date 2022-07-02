import MainLayer from "layout/main";
import Center from "app/center";
import React from "react";
import delay from "lib/delay";

const LazyDock = React.lazy(() => import("./lazydock"));
const StickyButton = React.lazy(async () => {
  await delay(2000);
  return await import("layout/sticky");
});

const App = () => {
  return (
    <MainLayer>
      <React.Suspense fallback={null}>
        <StickyButton top="20px" left="20px">
          Keyboard
        </StickyButton>
        <StickyButton top="20px" right="20px">
          Pricing
        </StickyButton>
      </React.Suspense>
      <Center />
      <React.Suspense fallback={null}>
        <LazyDock />
      </React.Suspense>
    </MainLayer>
  );
};
export default App;
