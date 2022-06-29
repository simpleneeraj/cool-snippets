import gradient from "lib/gradient";
import ListView from "lib/list-view";
import css from "styles/photos.module.scss";
import useBackground from "store/hooks/usebackground";
import ChevronBackOutline from "lib/icons/ChevronBackOutline";
import ChevronForwardOutline from "lib/icons/ChevronForwardOutline";
import useScroll from "hooks/useScroll";

const ColorsOption = () => {
  const { setBackground } = useBackground();
  const { containerRef, onScroll } = useScroll();

  return (
    <div className={css.container}>
      <div className={css.local}>
        <button onClick={() => onScroll((i) => i - 50)}>
          <ChevronBackOutline size={16} />
        </button>
      </div>
      <div ref={containerRef} className={css.content}>
        {gradient.map((data, index) => {
          return (
            <ListView title={data.name} key={index} className={css.picture}>
              <span
                onClick={() => setBackground(data.gradient)}
                style={{
                  background: data.gradient,
                  height: `100%`,
                  width: "100%",
                }}
              ></span>
            </ListView>
          );
        })}
      </div>
      <div className={css.absolute}>
        <button onClick={() => onScroll((i) => i + 50)}>
          <ChevronForwardOutline size={16} />
        </button>
      </div>
    </div>
  );
};
export default ColorsOption;
