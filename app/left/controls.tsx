import React from "react";
import Segment from "ui/segment";
import SegmentButton from "ui/segment/button";
import css from "styles/left.module.scss";
const Controls = () => {
  return (
    <div className={css.controls}>
      <Segment>
        <SegmentButton
          active
          text={"Hello"}
          value={"Hello"}
          style={{
            padding: "6px",
          }}
        />
        <SegmentButton
          text={"Hello"}
          value={"Hello"}
          style={{
            padding: "6px",
          }}
        />
      </Segment>
    </div>
  );
};
export default Controls;
