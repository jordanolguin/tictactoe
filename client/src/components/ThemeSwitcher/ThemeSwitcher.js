import { useState } from "react";
import { motion } from "framer-motion";
import styles from "./ThemeSwitcher.module.css";

const ThemeSwitcher = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };

  return (
    <div className={styles.switch} data-isDark={isDark} onClick={toggleTheme}>
      <motion.div className={styles.handle} layout transition={spring} />
    </div>
  );
};

export default ThemeSwitcher;
