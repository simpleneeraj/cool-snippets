

import React from 'react';
const useScroll = () => {

      const containerRef = React.useRef<HTMLDivElement>(null);
      const [count, dispatch] = React.useState(0);

      const onScroll = React.useCallback((equ: (i: number) => number) => {
            const content = containerRef.current as HTMLDivElement;
            dispatch(equ);
            if (count > content?.scrollWidth / 2) {
                  dispatch(0);
            } else {
                  content?.scroll({
                        behavior: "smooth",
                        left: count,
                        top: 0,
                  });
            }
      }, [count]);
      // Return Values
      return { onScroll, containerRef }

}
export default useScroll;