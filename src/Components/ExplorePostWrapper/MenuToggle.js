import { motion } from "framer-motion";

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

export const MenuToggle = ({ toggle }) => (
  <button
    onClick={toggle}
    style={{
      outline: "none",
      border: "none",
      userSelect: "none",
      cursor: "pointer",
      position: "absolute",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      top: "0",
      left: "0",
      width: "50px",
      height: "50px",
      borderRadius: "50%",
      background: "transparent",
    }}
  >
    <svg width="16" height="16" viewBox="0 0 22 22">
      <Path
        variants={{
          closed: { d: "M 2 4 L 20 4" },
          open: { d: "M 3 16.5 L 17 2.5" },
        }}
      />
      <Path
        d="M 2 9 L 12 9"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        d="M 2 14.6 L 16 14.6"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 20 L 20 20" },
          open: { d: "M 3 2.5 L 17 16.346" },
        }}
      />
    </svg>
  </button>
);
