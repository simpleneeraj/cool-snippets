/* eslint-disable @next/next/no-img-element */

import React from "react";
import css from "styles/templates.module.scss";

interface InputWithIconProps {
  editable?: boolean | "with-icon";
  source: string;
}

const InputWithIcon = ({ editable, source }: InputWithIconProps) => {
  return (
    <React.Fragment>
      {editable ? (
        <div className={css["input-field"]}>
          {editable === "with-icon" ? (
            <span className={css["file-icon"]}>
              <img src={source} alt="file-icon" />
            </span>
          ) : (
            <div></div>
          )}
          <input type="text" maxLength={20} placeholder="index.tsx" />
        </div>
      ) : (
        <div />
      )}
    </React.Fragment>
  );
};
export default InputWithIcon;
