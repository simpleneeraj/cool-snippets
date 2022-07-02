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
    <style>{`
      .main {
        position: relative;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        background-color: #000000;
        background-image: linear-gradient(147deg, #000000 0%, #2c3e50 74%);
      }
      .content {
        display: flex;
        flex-direction: column;
        height: auto;
        position: relative;
        min-height: 100vh;
        height: 100%;
        overflow:auto;
      }
    `}</style>
  );
};

// background-image: linear-gradient(
//   23deg,
//   #574189 0%,
//   #fd0456 40%,
//   #fe2051 62%,
//   #ff354d 79%,
//   #ee567c 86%,
//   #917cac 92%,
//   #638fc4 95%
// );
