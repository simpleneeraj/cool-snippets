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
import useDoable from "store/hooks/use-undo-redo";
import { UndoxTypes } from "plugins/undo-redo/undox.action";
import { createSelectors } from "plugins/undo-redo/undox.reducer";
import codeSlice from "store/slices/code";
import useKeyPress from "hooks/useKeyPress";
import useCode from "store/hooks/use-code";

const AppTop = () => {
  const router = useRouter();
  const [isModel, setModel] = React.useState(false);
  const ref = useOnClickOutside(() => setModel(false));

  // For undo redo
  const doable = useDoable();
  const { state } = useCode();
  const selectors = createSelectors(codeSlice.reducer);
  const actions = {
    canUndo: selectors.getPastActions(state).length > 0,
    canRedo: selectors.getFutureActions(state).length > 0,
  };
  const Undo = () => {
    doable(UndoxTypes.UNDO);
  };
  const Redo = () => {
    doable(UndoxTypes.REDO);
  };
  // UNDO
  useKeyPress(["ctrl", "z"], Undo);
  // REDO
  useKeyPress(["ctrl", "y"], Redo);
  return (
    <React.Fragment>
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
            <IconButton
              onClick={() => doable(UndoxTypes.UNDO)}
              title="Undo"
              disabled={actions.canUndo ? "" : "no-action"}
              aria-label="Undo"
            >
              <UndoIcon size={24} />
            </IconButton>
            <HRLine />
            <IconButton
              onClick={() => doable(UndoxTypes.REDO)}
              title="Redo"
              disabled={actions.canRedo ? "" : "no-action"}
              aria-label="redo"
            >
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
