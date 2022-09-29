import React from "react";
import Emoji from "./emoji";
import Element from "./element";
import Upload from "./upload";
import Segment from "ui/segment";
import css from "styles/insert.module.scss";
import SegmentButton from "ui/segment/button";

/**
 * Insert Component
 * @returns
 */
const InsertComponent = () => {
  const [act, setact] = React.useState("upload");

  const tabs = React.useMemo(() => {
    switch (act) {
      case "upload":
        return <Upload />;
      case "element":
        return <Element />;
      case "emoji":
        return <Emoji />;
      default:
        break;
    }
  }, [act]);
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
      {tabs}
    </div>
  );
};
export default InsertComponent;

const segmentArray = [
  {
    text: "Upload",
    get value() {
      return this.text.toLocaleLowerCase();
    },
  },
  {
    text: "Element",
    get value() {
      return this.text.toLocaleLowerCase();
    },
  },
  {
    text: "Emoji",
    get value() {
      return this.text.toLocaleLowerCase();
    },
  },
];
