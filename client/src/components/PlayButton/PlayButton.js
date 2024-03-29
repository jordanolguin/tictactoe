import { Suspense, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, MotionConfig, useMotionValue } from "framer-motion";
import { Shapes } from "./Shapes";
import { transition } from "./settings";
import useMeasure from "react-use-measure";
import styles from "./PlayButton.module.css";

const PlayButton = () => {
  const [ref, bounds] = useMeasure({ scroll: false });
  const [isHover, setIsHover] = useState(false);
  const [isPress, setIsPress] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const navigate = useNavigate();

  const resetMousePosition = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div className={styles.playButtonContainer}>
      <MotionConfig transition={transition}>
        <motion.button
          ref={ref}
          initial={false}
          animate={isHover ? "hover" : "rest"}
          whileTap="press"
          variants={{
            rest: { scale: 1 },
            hover: { scale: 1.5 },
            press: { scale: 1.4 },
          }}
          onHoverStart={() => {
            resetMousePosition();
            setIsHover(true);
          }}
          onHoverEnd={() => {
            resetMousePosition();
            setIsHover(false);
          }}
          onTapStart={() => setIsPress(true)}
          onTap={() => {
            setIsPress(false);
            navigate("/play");
          }}
          onTapCancel={() => setIsPress(false)}
          onPointerMove={(e) => {
            mouseX.set(e.clientX - bounds.x - bounds.width / 2);
            mouseY.set(e.clientY - bounds.y - bounds.height / 2);
          }}
          className={styles.button}
        >
          <motion.div
            className={styles.shapes}
            variants={{
              rest: { opacity: 0 },
              hover: { opacity: 1 },
            }}
          >
            <div className={`${styles.blush} ${styles.pink}`} />
            <div className={`${styles.blush} ${styles.blue}`} />
            <div className={styles.container}>
              <Suspense fallback={null}>
                <Shapes
                  isHover={isHover}
                  isPress={isPress}
                  mouseX={mouseX}
                  mouseY={mouseY}
                />
              </Suspense>
            </div>
          </motion.div>
          <motion.div
            variants={{ hover: { scale: 0.85 }, press: { scale: 1.1 } }}
            className={styles.label}
          >
            play
          </motion.div>
        </motion.button>
      </MotionConfig>
    </div>
  );
};

export default PlayButton;
