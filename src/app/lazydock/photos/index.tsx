import React from "react";
import css from "styles/photos.module.scss";
import PlusSquareDashed from "lib/icons/PlusSquareDashed";
import ChevronForwardOutline from "lib/icons/ChevronForwardOutline";
import useCallMemo from "hooks/usecallmemo";
import useFilePicker from "hooks/useFilePicker";
import useScroll from "hooks/useScroll";

const PhotosOptions = () => {
  const { containerRef, onScroll } = useScroll();

  // const [onFilePicker, data] = useFilePicker();

  return (
    <div className={css.container}>
      <div ref={containerRef} className={css.content}>
        <div className={css.local}>
          <button
          // onClick={() => onFilePicker()}
          >
            <PlusSquareDashed size={40} />
          </button>
        </div>
        {Array.from(Array(20).keys()).map((_, i) => (
          <Picture key={i} />
        ))}
        <div
          onMouseMove={() => onScroll((i) => i + 1)}
          className={css.absolute}
        >
          <button>
            <ChevronForwardOutline size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};
export default PhotosOptions;

const Picture = () => {
  return (
    <div className={css.picture}>
      <img src={require("assets/images/macos-big-sur.webp")} alt="images" />
    </div>
  );
};
