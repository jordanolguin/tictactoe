import { motion } from "framer-motion";
import LoadingScreen from "../components/LoadingScreen/LoadingScreen";
import PlayButton from "../components/PlayButton/PlayButton";
import { useTheme } from "../contexts/ThemeContext";

const visible = { opacity: 1, transition: { duration: 0.5 } };

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible,
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

function Home() {
  const { isDark } = useTheme();

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <motion.div
        className={`App ${isDark ? "dark" : "light"}`}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h1
          variants={itemVariants}
          style={{
            color: "#ffffff",
            textShadow:
              "0px 1px 3px rgba(0, 0, 0, 0.4), 0px 0px 5px rgba(255, 255, 255, 0.15)",
          }}
        >
          tic tac toe
        </motion.h1>
        <motion.div variants={itemVariants}>
          <LoadingScreen />
        </motion.div>
        <motion.div variants={itemVariants}>
          <PlayButton />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Home;
