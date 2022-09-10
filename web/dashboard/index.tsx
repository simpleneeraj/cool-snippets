import useInterval from "hooks/useinterval";
import Add from "lib/icons/Add";
import CogOutline from "lib/icons/CogOutline";
import LogoInstagram from "lib/icons/LogoInstagram";
import LogoTwitter from "lib/icons/LogoTwitter";
import moment from "moment";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import css from "styles/dash.module.scss";

const DashBoard = () => {
  const router = useRouter();
  const momentTime = moment().format("HH:mm");
  const momentDate = moment().format("dddd, MMMM M");
  const [time, setTime] = React.useState(momentTime);
  const [date, setDate] = React.useState(momentDate);

  useInterval(() => {
    setTime(moment().format("HH:mm"));
    setDate(moment().format("dddd, MMMM M"));
  }, 1000);

  return (
    <div className={css.container}>
      <div className={css.grid}>
        <div className={css.content}>
          <Link href={"/app"}>
            <a className={css.items}>
              <Add size={70} />
            </a>
          </Link>
          <Link href={""}>
            <a className={css.items}>
              <CogOutline size={70} />
            </a>
          </Link>
          <Link href={""}>
            <a className={css.items}>
              <LogoInstagram size={70} />
            </a>
          </Link>
          <Link href={""}>
            <a className={css.items}>
              <LogoTwitter size={70} />
            </a>
          </Link>
        </div>
        <div className={css.time}>
          <div className={css.backdrop}>
            <h1>{time}</h1>
            <p>{date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DashBoard;
