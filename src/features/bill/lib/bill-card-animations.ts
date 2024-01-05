import { type MotionProps } from "framer-motion";

export const billCardAnimation = (index: number): MotionProps => ({
  initial: {
    opacity: 0.5,
    scale: 0,
  },
  animate: {
    opacity: 1,
    scale: 1,
  },
  transition: {
    duration: 0.2,
    delay: index * 0.05,
  },
});
