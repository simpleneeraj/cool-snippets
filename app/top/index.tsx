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
import ModelWraper from "ui/model";
import DownloadModel from "app/element/download";

const AppTop = () => {
  const [isModel, setModel] = React.useState(false);

  return (
    <React.Fragment>
      <ModelWraper
        model={isModel}
        style={{
          top: "55px",
          zIndex: "20",
          right: "10px",
          padding: "6px",
          width: "300px",
          borderRadius: "10px",
          backdropFilter: "blur(15px)",
          outline: "2px solid #303030",
          background: "rgba(0, 0, 0, 0.67)",
        }}
      >
        <DownloadModel />
      </ModelWraper>
      <div className={css.top}>
        <div className={css.title}>
          <div
            className={css.button}
            onClick={() => router.back()}
            title="Back"
          >
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
          <IconButton onClick={() => setModel(!isModel)} active="translate">
            <EllipsisHorizontal size={20} />
          </IconButton>
        </div>
      </div>
    </React.Fragment>
  );
};
export default AppTop;
