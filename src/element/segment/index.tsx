import React from "react";
import css from "styles/segment.module.scss";

interface SegmentProps {
  children: string[];
  defaultValue: string | number | any;
  onChange?: (value: string) => void;
}

const Segment = (props: SegmentProps) => {
  const { defaultValue } = props;
  const onChangeHandler = React.useCallback(
    (value: string) => {
      if (props.onChange) props.onChange(value);
    },
    [props]
  );

  return (
    <div className={css.content}>
      {props.children.map((data, index) => (
        <button
          key={index}
          onClick={() => onChangeHandler(data)}
          style={{
            background: data === defaultValue ? "#0000005c" : "transparent",
          }}
        >
          {data}
        </button>
      ))}
    </div>
  );
};
export default Segment;
