import { motion, useMotionValue, useTransform } from "framer-motion";
import styles from "./PlayAgain.module.css";

const PlayAgain = ({ onRefresh, onGoHome }) => {
  const x = useMotionValue(0);
  const xInput = [-100, 0, 100];

  const background = useTransform(x, xInput, [
    "linear-gradient(180deg, #ff008c 0%, rgb(211, 9, 255) 100%)",
    "linear-gradient(180deg, #7700ff 0%, rgb(68, 0, 255) 100%)",
    "linear-gradient(180deg, rgb(230, 255, 0) 0%, rgb(3, 209, 0) 100%)",
  ]);

  const color = useTransform(x, xInput, [
    "rgb(211, 9, 255)",
    "rgb(68, 0, 255)",
    "rgb(3, 209, 0)",
  ]);

  const tickPath = useTransform(x, [10, 100], [0, 1]);
  const crossPathA = useTransform(x, [-10, -55], [0, 1]);
  const crossPathB = useTransform(x, [-50, -100], [0, 1]);

  return (
    <div className={styles.wrapper}>
      <motion.div className={styles.playAgainContainer} style={{ background }}>
        <motion.h1>play again?</motion.h1>
        <motion.div
          className={styles.box}
          style={{ x }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={(e, info) => {
            if (info.offset.x > 100) {
              onRefresh && onRefresh();
            } else if (info.offset.x < -100) {
              onGoHome && onGoHome();
            }
          }}
        >
          <svg className={styles.progressIcon} viewBox="0 0 50 50">
            <motion.path
              fill="none"
              strokeWidth="2"
              stroke={color}
              d="M 0, 20 a 20, 20 0 1, 0 40, 0 a 20, 20 0 1, 0 -40, 0"
              style={{ translateX: 5, translateY: 5 }}
            />
            <motion.path
              fill="none"
              strokeWidth="2"
              stroke={color}
              d="M14,26 L 22,33 L 35,16"
              strokeDasharray="0 1"
              style={{ pathLength: tickPath }}
            />
            <motion.path
              fill="none"
              strokeWidth="2"
              stroke={color}
              d="M17,17 L33,33"
              strokeDasharray="0 1"
              style={{ pathLength: crossPathA }}
            />
            <motion.path
              fill="none"
              strokeWidth="2"
              stroke={color}
              d="M33,17 L17,33"
              strokeDasharray="0 1"
              style={{ pathLength: crossPathB }}
            />
          </svg>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default PlayAgain;
