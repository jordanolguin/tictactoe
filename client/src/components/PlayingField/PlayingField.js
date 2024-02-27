import { motion } from "framer-motion";
import "./PlayingField.css";

const PlayingField = () => {
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => {
      const delay = 1 + i * 0.5;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
          opacity: { delay, duration: 0.01 },
        },
      };
    },
  };

  return (
    <motion.svg
      width="600"
      height="600"
      viewBox="0 0 600 600"
      initial="hidden"
      animate="visible"
    >
      <motion.line
        x1="200"
        y1="50"
        x2="200"
        y2="550"
        stroke="#000"
        strokeWidth="5"
        variants={draw}
        custom={1}
      />
      <motion.line
        x1="400"
        y1="50"
        x2="400"
        y2="550"
        stroke="#000"
        strokeWidth="5"
        variants={draw}
        custom={1.5}
      />
      <motion.line
        x1="50"
        y1="200"
        x2="550"
        y2="200"
        stroke="#000"
        strokeWidth="5"
        variants={draw}
        custom={2}
      />
      <motion.line
        x1="50"
        y1="400"
        x2="550"
        y2="400"
        stroke="#000"
        strokeWidth="5"
        variants={draw}
        custom={2.5}
      />
    </motion.svg>
  );
};

export default PlayingField;
