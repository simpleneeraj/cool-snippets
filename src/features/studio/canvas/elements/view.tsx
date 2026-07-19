import React from 'react';
import { motion } from 'motion/react';

type Props = React.ComponentProps<typeof motion.div>;

const ElementView = React.forwardRef((props: Props, ref: Props['ref']) => {
  const style = {
    ...props.style,
  } as React.CSSProperties;
  return (
    <motion.div {...props} ref={ref} style={style}>
      {props.children}
    </motion.div>
  );
});

ElementView.displayName = 'ElementView';
export default ElementView;
