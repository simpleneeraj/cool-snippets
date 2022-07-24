import React from "react";
import css from "styles/segment.module.scss";

interface SegmentProps {
  array: {
    title: string | number;
    value: string | number;
  }[];
  defaultValue: string | number | any;
  onChange?: (value: string | number) => void;
}

const Segment = (props: SegmentProps) => {
  const { defaultValue } = props;
  const onChangeHandler = React.useCallback(
    (data: string | number) => {
      if (props.onChange) props.onChange(data);
    },
    [props]
  );

  return (
    <div className={css.content}>
      {props.array.map((data, index) => (
        <button
          key={index}
          onClick={() => onChangeHandler(data.value)}
          id={data.value === defaultValue ? css.active : ""}
        >
          {data.title}
        </button>
      ))}
    </div>
  );
};
export default React.memo(Segment);
