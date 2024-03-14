import { motion } from "framer-motion";
import { useTheme } from "../../contexts/ThemeContext";
import styles from "./ThemeSwitcher.module.css";

const ThemeSwitcher = () => {
  const { isDark, toggleTheme } = useTheme();

  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };

  return (
    <div
      className={`${styles.switch} ${isDark ? styles.dark : ""}`}
      onClick={toggleTheme}
    >
      <motion.div className={styles.handle} layout transition={spring} />
    </div>
  );
};

export default ThemeSwitcher;
