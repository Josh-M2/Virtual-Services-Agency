import { type ReactNode, useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

type RevealDirection = "left" | "right";

type RevealContentProps = {
  children: ReactNode;
  direction: RevealDirection;
  delay?: number;
  className?: string;
  as?: "div" | "article";
};

const getOffset = (direction: RevealDirection) =>
  direction === "right" ? 72 : -72;

const RevealContent = ({
  children,
  direction,
  delay = 0,
  className = "",
  as = "div",
}: RevealContentProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2, margin: "-8% 0px -8% 0px" });
  const shouldReduceMotion = useReducedMotion();
  const [hasEntered, setHasEntered] = useState(false);
  const enterX = shouldReduceMotion ? 0 : getOffset(direction);
  const exitX = -enterX;
  const MotionElement = as === "article" ? motion.article : motion.div;

  useEffect(() => {
    if (isInView) {
      setHasEntered(true);
    }
  }, [isInView]);

  const animateState = !hasEntered ? "hidden" : isInView ? "visible" : "exit";

  return (
    <MotionElement
      ref={ref}
      className={className}
      initial="hidden"
      animate={animateState}
      variants={{
        hidden: { opacity: 0, x: enterX },
        visible: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: exitX },
      }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </MotionElement>
  );
};

export default RevealContent;
