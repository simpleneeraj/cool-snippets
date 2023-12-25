import React from 'react';
import ImageBox from './item';
import solidColor from '@/lib/solidColor';
import gradient from '@/lib/nouse/gradient';
import css from '@/styles/images.module.scss';
import useCode from '@/store/hooks/use-code';

const sortedGradients = gradient.sort((a, b) => a.name.localeCompare(b.name));

const sortedArray = [...solidColor, ...sortedGradients];

const GradientComponent = () => {
  const {
    updateCanvas,
    codeState: { canvas },
  } = useCode();
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
                  isactive={gradient === canvas.source}
                  onClick={() => updateCanvas('source', gradient)}
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
