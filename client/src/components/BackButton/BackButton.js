import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, MotionConfig } from "framer-motion";
import styles from "./BackButton.module.css";

const BackButton = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isHover, setIsHover] = useState(false);

  const transition = { type: "spring", stiffness: 400, damping: 17 };
  const buttonVariants = {
    rest: { scale: 1, backgroundColor: "#acc7ed" },
    hover: { scale: 1.5, backgroundColor: "#61dafb" },
    press: { scale: 1.4, backgroundColor: "#db07d1" },
  };

  const buttonText = location.pathname.includes("/play")
    ? "back to home"
    : "to home";

  return (
    <div className={styles.backButtonContainer}>
      <MotionConfig transition={transition}>
        <motion.button
          className={styles.button}
          initial="rest"
          animate={isHover ? "hover" : "rest"}
          whileHover="hover"
          whileTap="press"
          variants={buttonVariants}
          onHoverStart={() => setIsHover(true)}
          onHoverEnd={() => setIsHover(false)}
          onTap={() => navigate("/home")}
        >
          {buttonText}
        </motion.button>
      </MotionConfig>
    </div>
  );
};

export default BackButton;
