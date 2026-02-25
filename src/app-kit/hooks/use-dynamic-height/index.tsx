import React from 'react';

const useDynamicHeight = () => {
  const [height, setHeight] = React.useState(0);
  const ref = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const top = entry.boundingClientRect.top;
        const availableHeight = window.innerHeight - top;
        setHeight(availableHeight > 0 ? availableHeight : 0);
      },
      {
        root: null, // viewport
        threshold: 0,
      },
    );

    observer.observe(element);

    // Also recalc on resize
    const handleResize = () => {
      const rect = element.getBoundingClientRect();
      const availableHeight = window.innerHeight - rect.top;
      setHeight(availableHeight > 0 ? availableHeight : 0);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return [ref, height] as const;
};

export default useDynamicHeight;
