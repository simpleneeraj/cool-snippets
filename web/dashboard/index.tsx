"use client";

import React from "react";
import moment from "moment";
import Link from "next/link";
import { randomBytes } from "crypto";
import useInterval from "hooks/useinterval";
import Add from "lib/icons/Add";
import CogOutline from "lib/icons/CogOutline";
import LogoInstagram from "lib/icons/LogoInstagram";
import LogoTwitter from "lib/icons/LogoTwitter";
import css from "styles/dash.module.scss";

const DashBoard = () => {
  const momentTime = moment().format("HH:mm");
  const momentDate = moment().format("dddd, MMMM M");
  const [time, setTime] = React.useState(momentTime);
  const [date, setDate] = React.useState(momentDate);

  useInterval(() => {
    setTime(moment().format("HH:mm"));
    setDate(moment().format("dddd, MMMM M"));
  }, 1000);

  const ID = randomBytes(10).toString("hex");
  return (
    <div className={css.container}>
      <div className={css.grid}>
        <div className={css.content}>
          <Link
            href={`/simpleneeraj?view=${ID}&premium=true`}
            className={css.items}
          >
            <Add size={70} />
          </Link>
          <Link href={""} className={css.items}>
            <CogOutline size={70} />
          </Link>
          <a
            target="_blank"
            rel="noreferrer"
            className={css.items}
            href={"https://www.instagram.com/simpleneeraj"}
          >
            <LogoInstagram size={70} />
          </a>

          <a
            target="_blank"
            rel="noreferrer"
            className={css.items}
            href={"https://www.twitter.com/simplneeraj"}
          >
            <LogoTwitter size={70} />
          </a>
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
