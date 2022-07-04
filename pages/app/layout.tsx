import React from "react";
import css from "styles/main.module.scss";

const AppLayout = (props: React.PropsWithChildren<{}>) => {
  return (
    <main className={css["layout"]}>
      <section className={css["main"]}>{props.children}</section>
    </main>
  );
};
export default AppLayout;
