import React from "react";

const MainLayer = (props: React.PropsWithChildren<{}>) => {
  return (
    <React.Fragment>
      <MainStyle />
      <main className="main">
        <section className="content">{props.children}</section>
      </main>
    </React.Fragment>
  );
};
export default MainLayer;

const MainStyle = () => {
  return (
    // @ts-expect-error
    <style jsx>{`
      .main {
        position: relative;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        background-color: #000000;
        background-image: linear-gradient(
          23deg,
          #574189 0%,
          #fd0456 40%,
          #fe2051 62%,
          #ff354d 79%,
          #ee567c 86%,
          #917cac 92%,
          #638fc4 95%
        );
        background-color: #000000;
        background-image: linear-gradient(147deg, #000000 0%, #2c3e50 74%);
      }
      .content {
        display: flex;
        flex-direction: column;
        height: auto;
        position: relative;
        min-height: 100vh;
      }
    `}</style>
  );
};

// let x = require("assets/images/macos-big-sur.webp");
// console.log(x);
// let background = `url(https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)`;
// let background = `url(https://cdn.ytechb.com/wp-content/uploads/2022/05/WWDC-22-Wallpapers.webp)`;
