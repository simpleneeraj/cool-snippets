import React from "react";
import css from "styles/photos.module.scss";
import PlusSquareDashed from "lib/icons/PlusSquareDashed";
import ChevronForwardOutline from "lib/icons/ChevronForwardOutline";
import useCallMemo from "hooks/usecallmemo";
import useFilePicker from "hooks/useFilePicker";

const PhotosOptions = () => {
  const contentRef = React.useRef<HTMLDivElement>(null);
  const [count, dispatch] = React.useState(0);

  const onScroll = React.useCallback(() => {
    const content = contentRef.current as HTMLDivElement;
    dispatch((i) => i + 50);

    if (count > content?.scrollWidth / 2) {
      dispatch(0);
    } else {
      content?.scroll({
        behavior: "smooth",
        left: count,
        top: 0,
      });
    }
  }, [count]);

  const [onFilePicker, data] = useFilePicker();

  return (
    <div className={css.container}>
      <div ref={contentRef} className={css.content}>
        <div className={css.local}>
          <button onClick={() => onFilePicker()}>
            <PlusSquareDashed size={40} />
          </button>
        </div>
        {Array.from(Array(20).keys()).map((_, i) => (
          <Picture key={i} />
        ))}
        <div onClick={onScroll} className={css.absolute}>
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
