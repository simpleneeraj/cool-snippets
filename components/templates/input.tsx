/* eslint-disable @next/next/no-img-element */

import React from "react";
import css from "styles/templates.module.scss";
import { InputProps } from "typings/templates";

const InputWithIcon = ({ inputStyle, icon: source }: InputProps) => {
  return (
    <React.Fragment>
      {inputStyle ? (
        <div className={css["input-field"]}>
          {inputStyle.includes("icon") ? (
            <span className={css["file-icon"]}>
              <img src={source} alt={source} />
            </span>
          ) : (
            <span />
          )}
          {inputStyle.includes("input") ? (
            <input
              type="text"
              maxLength={50}
              placeholder="index.tsx"
              className="file-name-input"
              onChange={({ target }) => console.log(target.value.split(/[.]/g))}
            />
          ) : (
            <span />
          )}
        </div>
      ) : (
        <div />
      )}
    </React.Fragment>
  );
};
export default InputWithIcon;
