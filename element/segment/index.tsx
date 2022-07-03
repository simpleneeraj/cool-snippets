import React from "react";
import css from "styles/segment.module.scss";

interface SegmentProps {
  array: string[] | number[];
  defaultValue: string | number | any;
  onChange?: (value: string | number) => void;
}

const Segment = (props: SegmentProps) => {
  const { defaultValue } = props;
  const onChangeHandler = React.useCallback(
    (value: string | number) => {
      if (props.onChange) props.onChange(value);
    },
    [props]
  );

  return (
    <div className={css.content}>
      {props.array.map((data, index) => (
        <button
          key={index}
          onClick={() => onChangeHandler(data)}
          id={data === defaultValue ? css.active : ""}
        >
          {data}
        </button>
      ))}
    </div>
  );
};
export default Segment;
