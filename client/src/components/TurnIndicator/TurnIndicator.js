import { motion } from "framer-motion";

const TurnIndicator = ({ currentPlayer }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.5 }}
    >
      <h2>Tap a square to play!</h2>
      <p>{currentPlayer}'s turn</p>
    </motion.div>
  );
};

export default TurnIndicator;
