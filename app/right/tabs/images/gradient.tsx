import React from "react";
import ImageBox from "./item";
import solidColor from "lib/solidColor";
import gradient from "lib/nouse/gradient";
import css from "styles/images.module.scss";
import useBackground from "store/hooks/usebackground";

const sortedGradients = gradient.sort((a, b) => a.name.localeCompare(b.name));

const sortedArray = [...solidColor, ...sortedGradients];

const GradientComponent = () => {
  const { setBackground, source } = useBackground();
  return (
    <div className={css.container}>
      <div className={css.imageContainer}>
        <div className={css.gridBox}>
          {sortedArray.map(({ gradient, name }, i) => {
            return (
              <div title={name} key={i} className={css.image}>
                <ImageBox
                  viewtype="span"
                  source={gradient}
                  isactive={gradient === source}
                  onClick={() => setBackground(gradient)}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default GradientComponent;
