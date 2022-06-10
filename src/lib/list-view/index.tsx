import * as React from "react";
import useList from "./useList";
import { ListViewProps } from "./types";

/**
 * Basic Component for rendering large list based on IntersectionObserver technology
 *
 * @param props
 * @returns
 */

const ListView = (props: ListViewProps) => {
  const { viewRef, isObserve, style } = useList(props);
  return (
    <div ref={viewRef} {...props}>
      {isObserve ? (
        <React.Fragment>{props.children}</React.Fragment>
      ) : (
        <div style={style} />
      )}
    </div>
  );
};

export default ListView;

// npm install list-view
