import Skeleton from "element/skeleton";
import React from "react";

const SkeletonLoader = () => {
  const height = 58;
  const width = 370;

  return (
    <Skeleton
      width={width}
      height={height}
      reactheight={height}
      reactwidth="100%"
      primarycolor="#ffffff10"
      secondrycolor="#ffffff50"
      dur="1.4s"
    />
  );
};

export default SkeletonLoader;
