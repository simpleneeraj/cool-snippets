import seedrandom from 'seedrandom';
import { easeInOutCubic } from './easings';
import initialOptions from './initial-options';
import type { GradientOptions, Point, PointGenerationOptions } from './types';

function defaultPointsGenerator(options?: PointGenerationOptions) {
  const opt = Object.assign(options || {}, initialOptions);

  const {
    seed,
    pointCount,
    hueRange,
    saturationRange,
    lightnessRange,
    scaleRange,
  } = opt;

  const rng = seed ? seedrandom(seed) : Math.random;

  const points: Point[] = [];

  for (var i = 0; i < pointCount; ++i) {
    points.push({
      x: rng(),
      y: rng(),
      h:
        (hueRange[1] > hueRange[0]
          ? rng() * (hueRange[1] - hueRange[0]) + hueRange[0]
          : rng() * (hueRange[1] + 360 - hueRange[0]) + hueRange[1]) % 360,
      s: rng() * (saturationRange[1] - saturationRange[0]) + saturationRange[0],
      l: rng() * (lightnessRange[1] - lightnessRange[0]) + lightnessRange[0],
      scale: rng() * (scaleRange[1] - scaleRange[0]) + scaleRange[0],
    });
  }

  return points;
}

const MeshGradientGenerator = (options?: GradientOptions) => {
  const { easing = easeInOutCubic, easingStops = 10 } = options || {};

  let points: Point[] = [];
  if (options && 'points' in options) {
    points = [...points];
  } else {
    const { pointsGenerator = defaultPointsGenerator } = options || {};
    points = pointsGenerator(options);
  }
  const bg = points[0];

  const image = `${points.map(
    (pt) =>
      `radial-gradient(at ${pt.x * 100}% ${pt.y * 100}%, ${[
        ...Array(easingStops),
      ]
        .map((_, x) => x / (easingStops - 1))
        .map(
          (x) =>
            `hsla(${pt.h % 360}, ${pt.s * 100}%, ${pt.l * 100}%, ${easing(
              1 - x
            )}) ${x * pt.scale * 100}%`
        )
        .join(', ')})`
  )}, linear-gradient(hsla(${bg.h % 360}, ${bg.s * 100}%, ${
    bg.l * 100
  }%, 1), hsla(${bg.h % 360}, ${bg.s * 100}%, ${bg.l * 100}%, 1))`;

  return image;
};

export default MeshGradientGenerator;
