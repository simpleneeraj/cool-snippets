import React from "react";
import selectSlice from "./slice";
import useKey from "hooks/useKey";
import Button from "element/button";
import css from "styles/select.module.scss";
import useOnClickOutside from "hooks/useclick";
import { SelectOptionProps } from "element/types";
import ChevronUp from "lib/icons/ChevronUp";
import combineRefs from "lib/combineRefs";

/**
 * Custom Select Component
 * @param _props
 * @returns
 */
const Select = (_props: SelectOptionProps) => {
  // memo props
  const props = React.useMemo(() => _props, [_props]);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const optionsRef = React.useRef<HTMLDivElement>(null);
  const { defaultValue, array: dataArray } = props;
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
  const onSelectList = React.useCallback(
    (value: any) => {
      dispatch(action.selectedValueHandler(value));
      // dispatch(action.openModelhandler(false));
      if (_props.onChange) _props.onChange(value);
    },
    [action, _props]
  );
  /**************************
  Click Outside Close Model
  ***************************/
  const wrapperRef = useOnClickOutside(() =>
    dispatch(action.openModelhandler(false))
  );
  const initIndex = React.useMemo(
    () => dataArray.findIndex((data) => data.value === defaultValue),
    [dataArray, defaultValue]
  );
  const [step, updateStep] = React.useState(initIndex);

  const stepUp = React.useCallback(() => {
    if (step < dataArray.length - 1) {
      updateStep((i) => i + 1);
    }
  }, [dataArray, step]);

  const stepDown = React.useCallback(() => {
    if (step > 0) {
      updateStep((i) => i - 1);
    }
  }, [step]);

  const onKeyDown = React.useCallback(
    (event: KeyboardEvent | React.KeyboardEvent) => {
      // const container = containerRef.current as HTMLDivElement;
      switch (event.key) {
        case "ArrowRight":
          stepUp();
          return null;
        case "ArrowLeft":
          stepDown();
          return null;
        default:
          return null;
      }
    },
    [stepDown, stepUp]
  );

  React.useEffect(() => {
    const value = dataArray.at(step)?.value;
    onSelectList(value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataArray, step]);
  /**************************
  Close Model when Escape key down
  ***************************/
  useKey("Escape", () => dispatch(action.openModelhandler(false)));

  return (
    <div className={css.select}>
      <div
        className={css.dropdown}
        ref={combineRefs([wrapperRef, containerRef])}
      >
        <Button
          onClick={openModelhandler}
          label={selectedValue}
          onKeyDown={onKeyDown}
          icon={<ChevronUp size={14} />}
        />
        {isOpenModel ? (
          <div ref={optionsRef} className={css.option}>
            <div className={css.listbox}>
              {dataArray.map(({ text, value, icon }, index) => (
                <span
                  title={text}
                  key={index}
                  onClick={() => onSelectList(value)}
                  style={{
                    background:
                      value === selectedValue ? "var(--ui-accent-color)" : "",
                  }}
                  className={css.list}
                >
                  {icon && <i>{icon}</i>}
                  <span>{text}</span>
                </span>
              ))}
            </div>
            <div></div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Select;
