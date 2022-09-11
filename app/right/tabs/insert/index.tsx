import React from "react";
import css from "styles/insert.module.scss";
import Segment from "ui/segment";
import SegmentButton from "ui/segment/button";
const InsertComponent = () => {
  const [act, setact] = React.useState("Lap");
  return (
    <div>
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
      <div className={css.container}>
        <div className={css.item}></div>
        <div className={css.item}></div>
        <div className={css.item}></div>
        <div className={css.item}></div>
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
