import React from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';

interface CounterProps {
  to: number;
  duration?: number;
  inView: boolean;
  suffix?: string;
}

const Counter: React.FC<CounterProps> = ({ to, duration = 1.5, inView, suffix = '' }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.floor(latest));
  const [display, setDisplay] = React.useState(0);

  React.useEffect(() => {
    const unsubscribe = rounded.on('change', (v) => setDisplay(v));
    return unsubscribe;
  }, [rounded]);

  React.useEffect(() => {
    if (inView) {
      const controls = animate(count, to, { duration, ease: 'easeOut' });
      return controls.stop;
    } else {
      count.set(0);
    }
  }, [inView, to, duration, count]);

  return (
    <motion.span>
      {display}
      {suffix}
    </motion.span>
  );
};

export default Counter; 