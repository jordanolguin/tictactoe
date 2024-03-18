import { motion } from "framer-motion";
import { useGame } from "../../contexts/GameContext";
import { useTheme } from "../../contexts/ThemeContext";

const TurnIndicator = () => {
  const { isDark } = useTheme();
  const { isXTurn, winner, isDraw } = useGame();

  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: { duration: 1.5, bounce: 0 },
    },
  };

  const strokeColor = winner
    ? winner === "X"
      ? "#00cc88"
      : "#ff0055"
    : isXTurn
    ? "#00cc88"
    : "#ff0055";

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h3
        style={{
          margin: "0 auto",
          color: isDark ? "#ffffff" : "#1b1c1e",
          textShadow: isDark
            ? "0px 1px 3px rgba(0, 0, 0, 0.4), 0px 0px 5px rgba(255, 255, 255, 0.15)"
            : "0px 1px 3px rgba(255, 255, 255, 0.4), 0px 0px 5px rgba(0, 0, 0, 0.15)",
        }}
      >
        {winner
          ? `Winner: ${winner}`
          : isDraw
          ? "It's a draw!"
          : "current move:"}
      </h3>
      <svg
        width="120"
        height="120"
        viewBox="0 0 200 200"
        style={{ overflow: "visible" }}
      >
        {isXTurn && !winner && !isDraw ? (
          <>
            <motion.line
              x1="50"
              y1="50"
              x2="150"
              y2="150"
              stroke={strokeColor}
              variants={draw}
              initial="hidden"
              animate="visible"
            />
            <motion.line
              x1="150"
              y1="50"
              x2="50"
              y2="150"
              stroke={strokeColor}
              variants={draw}
              initial="hidden"
              animate="visible"
            />
          </>
        ) : (
          !isXTurn &&
          !winner &&
          !isDraw && (
            <motion.circle
              cx="100"
              cy="100"
              r="50"
              stroke={strokeColor}
              variants={draw}
              initial="hidden"
              animate="visible"
            />
          )
        )}
      </svg>
    </div>
  );
};

export default TurnIndicator;
