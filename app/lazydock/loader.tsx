import Skeleton from "element/skeleton";

const SkeletonLoader = () => {
  return (
    <Skeleton
      height={48}
      width={360}
      reactheight={48}
      reactwidth="100%"
      primarycolor="#ffffff10"
      secondrycolor="#ffffff50"
      dur="2s"
    />
  );
};

export default SkeletonLoader;
