import React from 'react';

const useDynamicHeight = () => {
  const [height, setHeight] = React.useState(0);
  const ref = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const calculateHeight = () => {
      if (ref.current) {
        let topOffset = 0;
        let currentElement: HTMLDivElement | null = ref.current;

        // Calculate the total offset from the top of the document
        while (currentElement) {
          topOffset += currentElement.offsetTop || 0;
          currentElement = currentElement.offsetParent as HTMLDivElement | null;
        }

        const totalHeight = window.innerHeight;
        const calculatedHeight = totalHeight - topOffset;

        setHeight(calculatedHeight);
      }
    };
    window.addEventListener('resize', calculateHeight);
    calculateHeight();
    return () => {
      window.removeEventListener('resize', calculateHeight);
    };
  }, []);
  return [ref, height] as const;
};
export default useDynamicHeight;
