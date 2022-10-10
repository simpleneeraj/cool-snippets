import React from "react";

interface ListViewProps extends React.ComponentPropsWithRef<"div"> {
  height?: number;
  offset?: number;
  duration?: number;
  root?: HTMLElement | undefined;
  children: React.ReactNode | React.ReactNode;
}

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

const useList = (props: ListViewProps) => {
  const { height = 200, offset = 1000, root = null, duration = 200 } = props;

  const isMount = React.useRef<boolean>(false);
  // * Check is server-side or not
  // const ssr = typeof window !== 'undefined';

  // * Some Transition when component render
  let initialStyle = {
    opacity: "0",
    transition: `opacity ${duration}ms ease-in`,
  };
  // * Some Transition when component render
  let exitStyle = {
    opacity: "1",
    transition: `opacity ${duration}ms ease-in`,
  };
  const [isObserve, setIsObserve] = React.useState<boolean>(false);
  const currentHeight = React.useRef<number>(height);
  // * Intersection ref
  const viewRef = React.useRef<any>();

  // * Set visibility with intersection observer
  React.useEffect(() => {
    let timeOut = {
      timeout: 600,
    };
    // * Inter section Observer Callback
    const observerCallback: IntersectionObserverCallback = (entries) => {
      let check = typeof window !== "undefined" && window.requestIdleCallback;
      // * where _i is a boolen value for isIntersecting or not
      let _i = entries[0].isIntersecting;
      // * Checking requestIdleCallback
      check
        ? window.requestIdleCallback(() => setIsObserve(_i), timeOut)
        : setIsObserve(_i);
    };

    if (viewRef.current) {
      let options: IntersectionObserverInit = {
        root,
        rootMargin: `${offset}px 0px ${offset}px 0px`,
      };
      const observer = new IntersectionObserver(observerCallback, options);
      observer.observe(viewRef.current);
      return () =>
        // eslint-disable-next-line react-hooks/exhaustive-deps
        viewRef.current ? observer.unobserve(viewRef.current) : undefined;
    }
    return () => {};
  }, [offset, root, viewRef]);

  // * Set true height for placeholder element after render.
  React.useEffect(() => {
    isMount.current = true;
    if (isMount.current) {
      let style = viewRef.current.style;
      if (typeof viewRef.current !== "undefined") {
        style.opacity = initialStyle.opacity;
        style.transition = initialStyle.transition;
      }
      if (viewRef.current && isObserve) {
        style.opacity = exitStyle.opacity;
        style.transition = exitStyle.transition;
        currentHeight.current = viewRef.current.offsetHeight;
      }
    }
    return () => {
      isMount.current = false;
    };
  }, [
    exitStyle.opacity,
    exitStyle.transition,
    initialStyle.opacity,
    initialStyle.transition,
    isObserve,
    viewRef,
  ]);

  // * Basic Style For non visible HTMLDivElement
  const style: React.CSSProperties = {
    height: currentHeight.current,
  };

  return { viewRef, isObserve, style } as const;
};
