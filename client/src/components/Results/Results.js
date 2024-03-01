import { motion } from "framer-motion";
import { useGame } from "../../contexts/GameContext";
import styles from "./Results.module.css";

const Results = () => {
  const { winner, isDraw } = useGame();

  const svgVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const renderContent = () => {
    if (winner) {
      const strokeColor = winner === "X" ? "#00cc88" : "#ff0055";
      return winner === "X" ? (
        <svg
          width="120"
          height="120"
          viewBox="0 0 200 200"
          style={{ overflow: "visible" }}
        >
          <motion.line
            x1="50"
            y1="50"
            x2="150"
            y2="150"
            stroke={strokeColor}
            variants={svgVariants}
            initial="hidden"
            animate="visible"
          />
          <motion.line
            x1="150"
            y1="50"
            x2="50"
            y2="150"
            stroke={strokeColor}
            variants={svgVariants}
            initial="hidden"
            animate="visible"
          />
        </svg>
      ) : (
        <svg
          width="120"
          height="120"
          viewBox="0 0 200 200"
          style={{ overflow: "visible" }}
        >
          <motion.circle
            cx="100"
            cy="100"
            r="50"
            stroke={strokeColor}
            strokeWidth="5"
            fill="none"
            variants={svgVariants}
            initial="hidden"
            animate="visible"
          />
        </svg>
      );
    } else if (isDraw) {
      return (
        <svg width="200" height="200" viewBox="0 0 560 170">
          <motion.rect
            width="140"
            height="140"
            x="30"
            y="15"
            rx="20"
            stroke="#0099ff"
            strokeWidth="10"
            variants={svgVariants}
            initial="hidden"
            animate="visible"
          />
        </svg>
      );
    }
    return null;
  };

  return (
    <motion.div
      className={styles.results}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
        scale: {
          type: "spring",
          damping: 5,
          stiffness: 100,
          restDelta: 0.001,
        },
      }}
    >
      {renderContent()}
    </motion.div>
  );
};

export default Results;
