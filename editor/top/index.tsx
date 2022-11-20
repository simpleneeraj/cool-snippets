import React from "react";
import HRLine from "ui/line";
import { useRouter } from "next/navigation";
import css from "styles/app.module.scss";
import IconButton from "ui/button/icon";
import GroupButton from "ui/button/group";
import ChevronBack from "lib/icons/ChevronBack";
import RedoIcon from "lib/icons/RedoIcon";
import UndoIcon from "lib/icons/UndoIcon";
import CheckmarkICloud from "lib/icons/CheckmarkICloud";
import EllipsisHorizontal from "lib/icons/EllipsisHorizontal";
import DownloadModel from "editor/element/download";
import HappyOutline from "lib/icons/HappyOutline";
import useOnClickOutside from "hooks/useclick";
import DownloadOutline from "lib/icons/DownloadOutline";

const AppTop = () => {
  const router = useRouter();

  const [isModel, setModel] = React.useState(false);

  const ref = useOnClickOutside(() => setModel(false));
  return (
    <React.Fragment>
      {/* <ModelWraper model={isModel} onClose={() => setModel(false)}> */}
      {/* </ModelWraper> */}
      <div ref={ref} className={css.top}>
        {isModel && <DownloadModel />}
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
            <IconButton title="Undo" disabled="no-action" aria-label="Undo">
              <UndoIcon size={24} />
            </IconButton>
            <HRLine />
            <IconButton title="Redo" aria-label="redo">
              <RedoIcon size={24} />
            </IconButton>
          </GroupButton>
          <IconButton aria-label="emoji">
            <HappyOutline size={20} />
          </IconButton>
          <IconButton
            title="Download"
            onClick={() => setModel(!isModel)}
            active="translate"
            aria-label="download"
          >
            <DownloadOutline size={20} />
          </IconButton>
          <IconButton title="Sync" aria-label="sync">
            <CheckmarkICloud size={24} />
          </IconButton>
          <IconButton active="translate" aria-label="More">
            <EllipsisHorizontal size={20} />
          </IconButton>
        </div>
      </div>
    </React.Fragment>
  );
};
export default AppTop;
