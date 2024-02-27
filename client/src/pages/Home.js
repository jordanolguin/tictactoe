import { motion } from "framer-motion";
import LoadingScreen from "../components/LoadingScreen/LoadingScreen";
import PlayButton from "../components/PlayButton/PlayButton";

const visible = { opacity: 1, transition: { duration: 0.5 } };

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible,
};

function Home() {
  return (
    <motion.div
      className="App"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h1 variants={itemVariants}>tic tac toe</motion.h1>
      <motion.div variants={itemVariants}>
        <LoadingScreen />
      </motion.div>
      <motion.div variants={itemVariants}>
        <PlayButton />
      </motion.div>
    </motion.div>
  );
}

export default Home;
