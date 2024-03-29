import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useGame } from "../../contexts/GameContext";
import { useTheme } from "../../contexts/ThemeContext";
import PlayingField from "../../components/PlayingField/PlayingField";
import BackButton from "../../components/BackButton/BackButton";
import TurnIndicator from "../../components/TurnIndicator/TurnIndicator";
import Results from "../../components/Results/Results";

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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

function GamePlay() {
  const { isDark } = useTheme();
  const { winner, isDraw } = useGame();
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [moveCount, setMoveCount] = useState(0);

  useEffect(() => {
    setCurrentPlayer(moveCount % 2 === 0 ? "X" : "O");
  }, [moveCount]);

  const handleMove = () => {
    setMoveCount((prevCount) => prevCount + 1);
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      style={{
        background: isDark ? "#1b1c1e" : "#f0f0f0",
        transition: "background 0.5s",
      }}
    >
      <motion.div
        className="GamePlay"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h1
          variants={itemVariants}
          style={{
            color: isDark ? "#ffffff" : "#1b1c1e",
            textShadow: isDark
              ? "0px 1px 3px rgba(0, 0, 0, 0.4), 0px 0px 5px rgba(255, 255, 255, 0.15)"
              : "0px 1px 3px rgba(255, 255, 255, 0.4), 0px 0px 5px rgba(0, 0, 0, 0.15)",
          }}
        >
          tap a square to play!
        </motion.h1>
        <motion.div variants={itemVariants}>
          <PlayingField onMove={handleMove} />
        </motion.div>
        {winner || isDraw ? (
          <motion.div variants={itemVariants}>
            <Results />
          </motion.div>
        ) : (
          <motion.div variants={itemVariants}>
            <TurnIndicator currentPlayer={currentPlayer} />
          </motion.div>
        )}
        <motion.div variants={itemVariants}>
          <BackButton />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default GamePlay;
