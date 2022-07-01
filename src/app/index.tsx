import MainLayer from "layout/main";
import Center from "app/center";
import StickyButton from "layout/sticky";
import LazyDock from "./lazydock";

const App = () => {
  return (
    <MainLayer>
      <StickyButton top="20px" left="20px">
        Keyboard
      </StickyButton>
      <Center />
      <LazyDock />
      <StickyButton top="20px" right="20px">
        Pricing
      </StickyButton>
    </MainLayer>
  );
};
export default App;
