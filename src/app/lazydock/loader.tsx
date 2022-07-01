import Skeleton from "element/skeleton";

const SkeletonLoader = () => {
  return (
    <Skeleton
      height={48}
      width={360}
      reactHeight={48}
      reactWidth="100%"
      primaryColor="#ffffff10"
      secondryColor="#ffffff50"
      dur="2s"
    />
  );
};

export default SkeletonLoader;
