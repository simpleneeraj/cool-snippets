import React from "react";
import css from "styles/app.module.scss";
import HRLine from "ui/line";
import IconButton from "ui/button/icon";
import GroupButton from "ui/button/group";
import ChevronBack from "lib/icons/ChevronBack";
import ArrowForward from "lib/icons/ArrowForward";
import ArrowBackward from "lib/icons/ArrowBackward";
import CheckmarkICloud from "lib/icons/CheckmarkICloud";
import EllipsisHorizontal from "lib/icons/EllipsisHorizontal";
import router from "next/router";
import ModelWraper from "ui/model";
import DownloadModel from "app/element/download";
import HappyOutline from "lib/icons/HappyOutline";

const AppTop = () => {
  const [isModel, setModel] = React.useState(false);

  return (
    <React.Fragment>
      <ModelWraper model={isModel} onClose={() => setModel(false)}>
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
                <CheckmarkICloud size={16} color="lime" />
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
          <IconButton>
            <HappyOutline size={20} />
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
