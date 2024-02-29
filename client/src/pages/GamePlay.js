import { motion } from "framer-motion";
import PlayingField from "../components/PlayingField/PlayingField";
import BackButton from "../components/BackButton/BackButton";

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
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <motion.div
        className="GamePlay"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div variants={itemVariants}>
          <BackButton />
        </motion.div>

        <motion.h1 variants={itemVariants}>Tic Tac Toe</motion.h1>

        <motion.div variants={itemVariants}>
          <PlayingField />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default GamePlay;
