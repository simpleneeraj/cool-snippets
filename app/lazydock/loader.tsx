import Skeleton from "element/skeleton";
import React from "react";

const SkeletonLoader = () => {
  const height = 58;
  const [width, setwidth] = React.useState(558);
  React.useEffect(() => {
    console.log();
    if (window.matchMedia(`(max-width:500px)`).matches) {
      setwidth(window.innerWidth);
    }
  }, []);
  return (
    <Skeleton
      width={width}
      height={height}
      reactheight={height}
      reactwidth="100%"
      primarycolor="#ffffff10"
      secondrycolor="#ffffff50"
      dur="1.5s"
    />
  );
};

export default SkeletonLoader;
