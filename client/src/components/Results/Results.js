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
    let content;
    let message;

    if (winner) {
      const strokeColor = winner === "X" ? "#00cc88" : "#ff0055";
      message = `${winner} Wins!`;

      content =
        winner === "X" ? (
          <svg
            width="200"
            height="200"
            viewBox="0 0 200 200"
            style={{ overflow: "visible" }}
          >
            <motion.line
              x1="50"
              y1="50"
              x2="150"
              y2="150"
              stroke={strokeColor}
              strokeWidth="10"
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
              strokeWidth="10"
              variants={svgVariants}
              initial="hidden"
              animate="visible"
            />
          </svg>
        ) : (
          <svg
            width="200"
            height="200"
            viewBox="0 0 200 200"
            style={{ overflow: "visible" }}
          >
            <motion.circle
              cx="100"
              cy="100"
              r="75"
              stroke={strokeColor}
              strokeWidth="10"
              fill="none"
              variants={svgVariants}
              initial="hidden"
              animate="visible"
            />
          </svg>
        );
    } else if (isDraw) {
      message = "It's a draw!";
      content = (
        <svg width="200" height="200" viewBox="0 0 200 200">
          <motion.rect
            width="150"
            height="150"
            x="25"
            y="25"
            rx="20"
            stroke="#0099ff"
            strokeWidth="10"
            fill="none"
            variants={svgVariants}
            initial="hidden"
            animate="visible"
          />
        </svg>
      );
    }

    return (
      <>
        <h2 className={styles.message}>{message}</h2>
        {content}
      </>
    );
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
