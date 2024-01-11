'use client';

import React from 'react';
import css from '@/styles/app.module.scss';
import RedoIcon from '@/lib/icons/RedoIcon';
import UndoIcon from '@/lib/icons/UndoIcon';
import ChevronBack from '@/lib/icons/ChevronBack';
import DownloadModel from '@/editor/model/download';
import { UIIconButton } from '@/ui-kit/source/UIButton';
import CheckmarkICloud from '@/lib/icons/CheckmarkICloud';
import UIButtonGroup from '@/ui-kit/source/UIButtonGroup';
import UIDivider from '@/ui-kit/source/UIDivider';

const AppTop = () => {
  return (
    <React.Fragment>
      <div className={css.top}>
        {false && <DownloadModel />}
        <div className={css.title}>
          <div className={css.button} title="Back">
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
          <UIButtonGroup>
            <UIIconButton title="Undo" aria-label="Undo">
              <UndoIcon size={20} />
            </UIIconButton>
            <UIDivider orientation="vertical" />
            <UIIconButton title="Redo" aria-label="redo">
              <RedoIcon size={20} />
            </UIIconButton>
          </UIButtonGroup>
          <UIIconButton title="Download" aria-label="download">
            <i className="ki-duotone ki-emoji-happy text-inherit text-xl">
              <span className="path1"></span>
              <span className="path2"></span>
              <span className="path3"></span>
              <span className="path4"></span>
            </i>
          </UIIconButton>
          <UIIconButton aria-label="emoji">
            <i className="ki-duotone ki-notification-2 text-inherit text-xl">
              <span className="path1"></span>
              <span className="path2"></span>
            </i>
          </UIIconButton>
          <UIIconButton title="Sync" aria-label="sync">
            <i className="ki-duotone ki-crown text-inherit text-xl">
              <span className="path1"></span>
              <span className="path2"></span>
            </i>
          </UIIconButton>
          <UIIconButton radius="sm" aria-label="More">
            <i className="ki-duotone ki-burger-menu-3 text-inherit text-xl">
              <span className="path1"></span>
              <span className="path2"></span>
              <span className="path3"></span>
              <span className="path4"></span>
              <span className="path5"></span>
              <span className="path6"></span>
              <span className="path7"></span>
              <span className="path8"></span>
              <span className="path9"></span>
            </i>
          </UIIconButton>
        </div>
      </div>
    </React.Fragment>
  );
};
export default AppTop;
