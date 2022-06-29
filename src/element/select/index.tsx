import React from "react";
import selectSlice from "./slice";
import useKey from "hooks/useKey";
import Button from "element/button";
import css from "styles/elements.module.scss";
import useOnClickOutside from "hooks/useClick";
import { SelectOptionProps } from "element/types";
import ChevronUp from "lib/icons/ChevronUp";

/**
 * Custom Select Component
 * @param props
 * @returns
 */
const Select = (props: SelectOptionProps) => {
  // memo props
  const _props = React.useMemo(
    () => props,
    // eslint-disable-next-line
    [props]
  );
  const { defaultValue, children: dataArray } = _props;
  // slice
  const { action, initialState, reducer } = selectSlice;
  // useReducer hook
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const { isOpenModel, selectedValue } = state;
  /**************************
  Initialzed Values
  ***************************/
  React.useEffect(() => {
    dispatch(action.selectedValueHandler(defaultValue));
  }, [action, defaultValue]);
  /**************************
   Open Select Model
   ***************************/
  const openModelhandler = React.useCallback(() => {
    dispatch(action.openModelhandler(true));
  }, [action]);

  /**************************
      On Click List
  ***************************/
  const onClickList = React.useCallback(
    (value: any) => {
      dispatch(action.selectedValueHandler(value));
      dispatch(action.openModelhandler(false));
      if (props.onChange) props.onChange(value);
    },
    [action, props]
  );
  /**************************
  Click Outside Close Model
  ***************************/
  const wrapperRef = useOnClickOutside(() =>
    dispatch(action.openModelhandler(false))
  );
  /**************************
  Close Model when Escape key down
  ***************************/
  useKey("Escape", () => dispatch(action.openModelhandler(false)));
  return (
    <div className={css.select}>
      <div className={css.dropdown} ref={wrapperRef}>
        <Button
          onClick={openModelhandler}
          label={selectedValue}
          icon={<ChevronUp size={14} />}
        />
        {isOpenModel ? (
          <div className={css.option}>
            <ul>
              {dataArray.map(({ text, value }, index) => (
                <li
                  key={index}
                  value={value}
                  onClick={() => onClickList(value)}
                  style={{
                    background: text === selectedValue ? "#673AB7" : "",
                  }}
                >
                  {text}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Select;
