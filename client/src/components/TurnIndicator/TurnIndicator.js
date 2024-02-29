import { motion } from "framer-motion";
import { useGame } from "../../contexts/GameContext";

const TurnIndicator = () => {
  const { isXTurn, winner, isDraw } = useGame();

  let message;
  if (winner) {
    message = `${winner} wins!`;
  } else if (isDraw) {
    message = "It's a draw!";
  } else {
    message = `${isXTurn ? "X" : "O"}'s turn`;
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.5 }}
    >
      <p>{message}</p>
    </motion.div>
  );
};

export default TurnIndicator;
