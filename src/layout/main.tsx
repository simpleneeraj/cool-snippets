import React from "react";
let macosGradient = `linear-gradient(
  23deg,
  #574189 0%,
  #fd0456 40%,
  #fe2051 62%,
  #ff354d 79%,
  #ee567c 86%,
  #917cac 92%,
  #638fc4 95%
)`;

const MainLayer = (props: React.PropsWithChildren<{}>) => {
  const mainRef = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    const main = mainRef?.current as HTMLElement;
    // let macos = require("assets/images/macos-big-sur.webp");
    main.style.backgroundImage = `url(${macosGradient})`;
    // if (macos) {
    //   main.style.backgroundImage = `url(${macos})`;
    // } else {
    // }
  }, []);

  return (
    <React.Fragment>
      <MainStyle />
      <main ref={mainRef} className="main">
        <section className="content">{props.children}</section>
      </main>
    </React.Fragment>
  );
};
export default MainLayer;

const MainStyle = () => {
  return (
    <style>{`
      .main {
        position: relative;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
      }
      .content {
        display: flex;
        flex-direction: column;
        height: 100vh;
        position: relative;
        min-height: calc(100vh - 3rem);
      }
    `}</style>
  );
};

// let background = `linear-gradient(
//   23deg,
//   #574189 0%,
//   #fd0456 40%,
//   #fe2051 62%,
//   #ff354d 79%,
//   #ee567c 86%,
//   #917cac 92%,
//   #638fc4 95%
// )`;

// let x = require("assets/images/macos-big-sur.webp");
// console.log(x);
// let background = `url(https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)`;
// let background = `url(https://cdn.ytechb.com/wp-content/uploads/2022/05/WWDC-22-Wallpapers.webp)`;
