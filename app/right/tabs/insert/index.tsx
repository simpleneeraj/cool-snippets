import ChevronUp from "lib/icons/ChevronUp";
import GitNetworkOutline from "lib/icons/GitNetworkOutline";
import Option from "lib/icons/Option";
import Options from "lib/icons/Options";
import PageFit from "lib/icons/PageFit";
import PaintBrush from "lib/icons/PaintBrush";
import React from "react";
import css from "styles/insert.module.scss";
import Segment from "ui/segment";
import SegmentButton from "ui/segment/button";

const InsertComponent = () => {
  const [act, setact] = React.useState("Lap");
  return (
    <div className={css.container}>
      <Segment>
        {segmentArray.map((data, index) => (
          <SegmentButton
            onClick={() => setact(data.value)}
            active={data.value === act}
            key={index}
            {...data}
          />
        ))}
      </Segment>
      <br />
      <div className={css.grid}>
        <div className={css.item}>
          <PageFit fill="#eee" />
        </div>
        <div className={css.item}>
          <Option fill="#eee" />
        </div>
        <div className={css.item}>
          <Options fill="#eee" />
        </div>
        <div className={css.item}>
          <PaintBrush fill="#eee" />
        </div>
        <div className={css.item}>
          <GitNetworkOutline />
        </div>
        <div className={css.item}>
          <ChevronUp />
        </div>
      </div>
    </div>
  );
};
export default InsertComponent;

const segmentArray = [
  {
    text: "Lap",
    value: "Lap",
  },
  {
    text: "Top",
    value: "Top",
  },
  {
    text: "Hp",
    value: "Hp",
  },
];
