import React from "react";
// import css from "../css/skeleton.module.scss";

interface SkeletonProps extends React.ComponentPropsWithoutRef<"div"> {
  animation?: boolean;
}
const Skeleton = ({ className, animation = true, ...rest }: SkeletonProps) => {
  return (
    <React.Fragment>
      <div className={`container`}>
        <span className={` ${`skeleton`} ${className}`} {...rest}></span>
      </div>
      <style jsx>
        {`
          .container {
            display: flex;
            height: 100%;
          }

          .skeleton {
            width: 100%;
            min-height: 2em;
            overflow: hidden;
            position: relative;
            display: inline-block;
            background: var(--ui-app-secondry-background);
          }
          .skeleton::after {
            content: "";
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            position: absolute;
            transform: translateX(-100%);
            background-image: linear-gradient(
              90deg,
              rgba(#fff, 0),
              rgba(#fff, 0.06),
              rgba(#fff, 0.08),
              rgba(#fff, 0.06),
              rgba(#fff, 0)
            );
            animation: ${animation ? "shimmer 1.2s infinite" : "unset"};
          }

          @keyframes shimmer {
            100% {
              transform: translateX(100%);
            }
          }
        `}
      </style>
    </React.Fragment>
  );
};
export default Skeleton;
