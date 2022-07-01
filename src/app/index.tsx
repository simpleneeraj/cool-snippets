import MainLayer from "layout/main";
import Center from "app/center";
import StickyButton from "layout/sticky";
import MacOSLikeDock from "./dock";

const App = () => {
  return (
    <MainLayer>
      <StickyButton top="20px" left="20px">
        Keyboard
      </StickyButton>
      <Center />
      <MacOSLikeDock />
      <StickyButton top="20px" right="20px">
        Pricing
      </StickyButton>

      {/* <Segment children={["25%", "50%", "75%", "100%"]} defaultValue={""} /> */}
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

/**
 *      <StickyButton top="30%" left="20px" transform="translate(0%,-50%)">
        25%
      </StickyButton>
      <StickyButton top="40%" left="20px" transform="translate(0%,-50%)">
        50%
      </StickyButton>
      <StickyButton top="50%" left="20px" transform="translate(0%,-50%)">
        75%
      </StickyButton>
      <StickyButton top="60%" left="20px" transform="translate(0%,-50%)">
        100%
      </StickyButton>
 */
