import React from "react";
import iProgress from "plugins/iprogress";
import { useRouter } from "next/router";

/**************************
NextProgress
***************************/
const NextProgress = () => {
  const router = useRouter();
  const whenStart = () => iProgress.start();
  const whenDone = () => iProgress.done();
  const whenError = () => iProgress.remove();

  React.useEffect(() => {
    router.events.on("routeChangeStart", whenStart);
    router.events.on("routeChangeComplete", whenDone);
    router.events.on("routeChangeError", whenError);
    return () => {
      router.events.off("routeChangeStart", whenStart);
      router.events.off("routeChangeComplete", whenDone);
      router.events.off("routeChangeError", whenError);
    };
  }, [router.events]);

  return <Style />;
};
export default NextProgress;

interface ProgressStyleProps {
  height?: string;
  color?: string;
}

const Style = (props: ProgressStyleProps) => {
  const { height = "2px", color = "#aaa" } = props;
  return (
    <style>
      {`
      #iprogress {
        pointer-events: none;
      }
      #iprogress .bar {
        position: fixed;
        z-index: 1031;
        top: 0;
        left: 0;
        width: 100%;
        border-radius: 10px;
      }
      #iprogress .bar{
        height: ${height};
        background: ${color};
        box-shadow:0px 0px 15px ${color};
      }
    `}
    </style>
  );
};

type ProgressTypes = "start" | "done" | "remove";
