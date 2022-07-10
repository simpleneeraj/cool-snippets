import gradient from "lib/gradients";
import ListView from "lib/list-view";
import solidColor from "lib/solidColor";
import css from "styles/photos.module.scss";
import useBackground from "store/hooks/usebackground";
import React from "react";
import Item from "./item";
import useScrollLeft from "./usescroll";

const sortedGradients = gradient.sort((a, b) => a.name.localeCompare(b.name));

const sortedArray = [...solidColor, ...sortedGradients];

const ColorsOption = () => {
  const { setBackground, source: gradientValue } = useBackground();
  const [containerRef, onScrollLeft] = useScrollLeft({
    behavior: "smooth",
    left: 0,
  });

  const onClickItem = (value: string) => {
    onScrollLeft();
    setBackground(value);
  };
  return (
    <div className={css.container}>
      <div ref={containerRef} className={css.content}>
        {sortedArray.map((data, index) => {
          const act = data.gradient === gradientValue;
          return (
            <ListView
              key={index}
              title={data.name}
              className={css.picture}
              height={50}
              offset={200}
            >
              <Item
                style={{
                  background: data.gradient,
                }}
                viewtype="span"
                source={data.gradient}
                isactive={act}
                onClick={() => onClickItem(data.gradient)}
              />
            </ListView>
          );
        })}
      </div>
    </div>
  );
};
export default ColorsOption;

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
