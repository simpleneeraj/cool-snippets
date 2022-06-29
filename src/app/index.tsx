import MainLayer from "layout/main";
import Center from "app/center";
import StickyButton from "layout/sticky";
import MacOSLikeDock from "./dock";

const App = () => {
  return (
    <MainLayer>
      <StickyButton
        direction-value="15px"
        direction="top left"
        children="Keyboard"
      />
      <Center />

      <MacOSLikeDock />
      <StickyButton
        direction-value="15px"
        direction="top right"
        children="Github"
      />
    </MainLayer>
  );
};
export default App;

// const target = {
//   first: "simple",
//   last: "neeraj",
// };

// const handler3 = {
//   get(target: any, prop: string, receiver: any) {
//     if (prop === "first") {
//       return "simple";
//     }
//     // @ts-expect-error
//     return Reflect.get(...arguments);
//   },
//   apply: function (
//     target: (arg0: any, arg1: any) => number,
//     thisArg: any,
//     argumentsList: any[]
//   ) {
//     console.log(`Calculate sum: ${argumentsList}`);
//     // expected output: "Calculate sum: 1,2"
//     return target(argumentsList[0], argumentsList[1]) * 10;
//   },
// };

// const proxy = new Proxy(target, handler3);

// console.log(proxy.first); // hello
// console.log(proxy.last); // world
// console.log(proxy);
