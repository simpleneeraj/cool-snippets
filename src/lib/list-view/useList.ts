import React from 'react';
import { ListViewProps } from './types';
/**************************
Basic Hook for UIListView
@returns
```js
return { viewRef, isObserve, style } as const;
```
***************************/

const useList = (props: ListViewProps) => {
    const { height = 200, offset = 1000, root = null, duration = 200 } = props;
    // * Check is server-side or not
    // const ssr = typeof window !== 'undefined';
    let timeOut = {
        timeout: 600,
    };
    // * Some Transition when component render
    let initialStyle = {
        opacity: '0',
        transition: `opacity ${duration}ms ease-in`,
    };
    // * Some Transition when component render
    let exitStyle = {
        opacity: '1',
        transition: `opacity ${duration}ms ease-in`,
    };
    const [isObserve, setIsObserve] = React.useState<boolean>(false);
    const currentHeight = React.useRef<number>(height);
    // * Intersection ref
    const viewRef = React.useRef<any>();


    // * Set visibility with intersection observer
    React.useEffect(() => {
        // * Inter section Observer Callback
        const observerCallback: IntersectionObserverCallback = (entries) => {
            let check = typeof window !== undefined && window.requestIdleCallback;
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
                viewRef.current ? observer.unobserve(viewRef.current) : undefined;
        }
        return () => { };
    }, [viewRef]);

    // * Set true height for placeholder element after render.
    React.useEffect(() => {
        let isMount = true;
        if (isMount) {
            let style = viewRef.current.style
            if (typeof viewRef.current !== 'undefined') {
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
            isMount = false;
        };
    }, [isObserve, viewRef]);

    // * Basic Style For non visible HTMLDivElement
    const style: React.CSSProperties = {
        height: currentHeight.current,
    };

    return { viewRef, isObserve, style } as const;
};



export default useList;