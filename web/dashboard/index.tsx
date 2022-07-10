import Add from "lib/icons/Add";
import CogOutline from "lib/icons/CogOutline";
import LogoInstagram from "lib/icons/LogoInstagram";
import LogoTwitter from "lib/icons/LogoTwitter";
import ShareOutline from "lib/icons/ShareOutline";
import { useRouter } from "next/router";
import React from "react";
import css from "styles/dash.module.scss";

const DashBoard = () => {
  const router = useRouter();

  return (
    <div className={css.container}>
      <div className={css.grid}>
        <div className={css.content}>
          <div onClick={() => router.push("/app")} className={css.items}>
            <Add size={70} />
          </div>
          <div className={css.items}>
            <CogOutline size={70} />
          </div>
          <div className={css.items}>
            <LogoInstagram size={70} />
          </div>
          <div className={css.items}>
            <LogoTwitter size={70} />
          </div>
        </div>
        <div className={css.time}>
          <h1>20:20</h1>
        </div>
      </div>
    </div>
  );
};
export default DashBoard;
