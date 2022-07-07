import gradient from "lib/gradient";
import ListView from "lib/list-view";
import solidColor, { gradientFromUI } from "lib/solidColor";
import css from "styles/photos.module.scss";
import useBackground from "store/hooks/usebackground";
import React from "react";
import Item from "./item";

const sortedGradients = gradient.sort((a, b) => a.name.localeCompare(b.name));

const sortedArray = [...solidColor, ...sortedGradients, ...gradientFromUI];

const ColorsOption = () => {
  const { setBackground, source: gradientValue } = useBackground();
  return (
    <div className={css.container}>
      <div className={css.content}>
        {sortedArray.map((data, index) => {
          const isActive = data.gradient === gradientValue;
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
                isactive={isActive}
                onClick={() => setBackground(data.gradient)}
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
