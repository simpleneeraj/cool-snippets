import React from "react";
import css from "styles/app.module.scss";
import HRLine from "ui/line";
import IconButton from "ui/button/icon";
import GroupButton from "ui/button/group";
import CogOutline from "lib/icons/CogOutline";
import ChevronBack from "lib/icons/ChevronBack";
import ArrowForward from "lib/icons/ArrowForward";
import ArrowBackward from "lib/icons/ArrowBackward";
import CheckmarkICloud from "lib/icons/CheckmarkICloud";
import EllipsisHorizontal from "lib/icons/EllipsisHorizontal";
import router from "next/router";

const AppTop = () => {
  return (
    <div className={css.top}>
      <div className={css.title}>
        <div className={css.button} onClick={() => router.back()} title="Back">
          <ChevronBack size={20} />
        </div>
        <div className={css.text}>
          <h4>Typescript Interface Detailed Guide</h4>
          <p>
            Last Edited &middot; June 2022
            <i>
              <CheckmarkICloud size={16} />
            </i>
          </p>
        </div>
      </div>
      <div className={css.controls}>
        <GroupButton>
          <IconButton title="Undo" disabled="no-action">
            <ArrowBackward size={24} />
          </IconButton>
          <HRLine />
          <IconButton title="Redo">
            <ArrowForward size={24} />
          </IconButton>
        </GroupButton>
        <IconButton active="clicked">
          <CogOutline size={20} />
        </IconButton>
        <IconButton title="Sync">
          <CheckmarkICloud size={24} />
        </IconButton>
        <IconButton active="translate">
          <EllipsisHorizontal size={20} />
        </IconButton>
      </div>
    </div>
  );
};
export default AppTop;
