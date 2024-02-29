import { useState } from "react";
import { motion } from "framer-motion";
import BackButton from "../BackButton/BackButton";
import "./PlayingField.css";

const PlayingField = () => {
  const [clickedSpaces, setClickedSpaces] = useState(Array(9).fill(false));

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

  const handleClick = (i) => {
    const updatedSpaces = [...clickedSpaces];
    updatedSpaces[i] = true;
    setClickedSpaces(updatedSpaces);
  };

  const calculateCenter = (i) => {
    const row = Math.floor(i / 3);
    const col = i % 3;
    const x = col * 200 + 100;
    const y = row * 200 + 100;
    return { x, y };
  };

  const pageVariants = {
    initial: { opacity: 0 },
    in: { opacity: 1 },
    out: { opacity: 0 },
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5,
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
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
        {clickedSpaces.map((_, index) => (
          <rect
            key={index}
            x={(index % 3) * 200}
            y={Math.floor(index / 3) * 200}
            width="200"
            height="200"
            fill="transparent"
            onClick={() => handleClick(index)}
          />
        ))}

        {clickedSpaces.map((clicked, index) =>
          clicked ? (
            <motion.circle
              key={index}
              cx={calculateCenter(index).x}
              cy={calculateCenter(index).y}
              r="80"
              stroke="#ff0055"
              variants={draw}
              initial="hidden"
              animate="visible"
              custom={1}
            />
          ) : null
        )}
      </motion.svg>
      <BackButton />
    </motion.div>
  );
};

export default PlayingField;
