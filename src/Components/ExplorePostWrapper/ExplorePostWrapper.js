import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useDimensions } from "./use-dimensions";
import { MenuToggle } from "./MenuToggle";

const sidebar = {
  open: (height = 600) => ({
    clipPath: `circle(${height * 2 + 200}px at 25px 25px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(20px at 25px 25px)",
    transition: {
      delay: 0,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export const ExplorePostWrapper = () => {
  const [isOpen, toggleOpen] = useState(false);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
      style={{
        position: "absolute",
        top: "0",
        left: "0",
        bottom: "0",
        width: "100%",
      }}
    >
      <motion.div
        variants={sidebar}
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          bottom: "0",
          width: "100%",
          height: "100%",
          background: "rgba(255,255,255,0.9)",
        }}
      />
      <AnimatePresence>
        {isOpen === true && (
          <motion.div
            style={{
              padding: "50px",
              position: "absolute",
              width: "100%",
              height: "100%",
              background: "inherit",
            }}
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.2,
            }}
          >
            <h1>heeloo</h1>
          </motion.div>
        )}
      </AnimatePresence>
      <MenuToggle toggle={() => toggleOpen(!isOpen)} />
    </motion.nav>
  );
};
