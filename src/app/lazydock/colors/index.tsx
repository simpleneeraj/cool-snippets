import gradient from "lib/gradient";
import ListView from "lib/list-view";
import solidColor from "lib/solidColor";
import css from "styles/photos.module.scss";
import useBackground from "store/hooks/usebackground";
import CheckmarkCircleOutline from "lib/icons/CheckmarkCircleOutline";
import React from "react";

const sortedGradients = gradient.sort((a, b) => a.name.localeCompare(b.name));

const sortedArray = [...solidColor, ...sortedGradients];

const ColorsOption = () => {
  const { setBackground, source: gradientValue } = useBackground();
  const containerRef = React.useRef<HTMLDivElement>(null);
  const onClickToCenter = React.useCallback(
    (gradient: string, id: any) => {
      const container = containerRef.current;

      // container?.scrollBy(100, 0);
      container?.scrollTo({
        top: 100,
        left: 100,
        behavior: "smooth",
      });

      setBackground(gradient);
      // c?.scrollIntoView({
      //   behavior: "smooth",
      //   block: "center",
      //   inline: "center",
      // });
      // c?.scrollTo(30, 0);
      // if (c !== null) {
      //   const con = c.getBoundingClientRect();
      //   const absoluteElementTop = con?.top + window.pageYOffset;
      //   const middle = absoluteElementTop - window.innerHeight / 2;
      //   window.scrollTo(0, middle);
      // }
    },
    [setBackground]
  );

  return (
    <div ref={containerRef} className={css.container}>
      <div className={css.content}>
        {sortedArray.map((data, index) => {
          const isActive = data.gradient === gradientValue;
          return (
            <ListView
              key={index}
              title={data.name}
              id={`item-${index}`}
              className={css.picture}
            >
              <span
                onClick={() => onClickToCenter(data.gradient, `item-${index}`)}
                style={{
                  background: data.gradient,
                  height: `100%`,
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {isActive ? <CheckmarkCircleOutline /> : null}
              </span>
            </ListView>
          );
        })}
      </div>
    </div>
  );
};
export default ColorsOption;

/**
 *
 */

/**
 * const app = ["b", "c", "d", "a", "f", "w"];
  const sortThese = () => {
    let w = app.sort((a, b) =>
      a.localeCompare(b, "en", { sensitivity: "base", numeric: true })
    );
    console.log(w);
  };
  sortThese();
 */
