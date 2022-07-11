import React from "react";

const useScrollLeft = (options?: ScrollToOptions) => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const onScrollLeft = React.useCallback(() => {
        const container = containerRef.current
        container?.scrollBy(options);
    }, [options]);

    return { containerRef, onScrollLeft } as const;
};


export default useScrollLeft;