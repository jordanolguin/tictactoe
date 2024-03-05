import { motion } from "framer-motion";
import { useGame } from "../../contexts/GameContext";
import "./PlayingField.css";

const PlayingField = () => {
  const { board, handleClick, winningCombo } = useGame();

  const handlePlayerMove = (i) => {
    if (!board[i]) {
      handleClick(i);
    }
  };

  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => {
      const delay = 0.1 + i * 0.25;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
          opacity: { delay, duration: 0.01 },
        },
      };
    },
  };

  const calculateCenter = (i) => {
    const row = Math.floor(i / 3);
    const col = i % 3;
    const x = col * 200 + 100;
    const y = row * 200 + 100;
    return { x, y };
  };

  const renderX = (i) => {
    const { x, y } = calculateCenter(i);

    const lineLength = 70;
    return (
      <>
        <motion.line
          x1={x - lineLength}
          y1={y - lineLength}
          x2={x + lineLength}
          y2={y + lineLength}
          stroke="#00cc88"
          variants={draw}
          custom={2}
        />
        <motion.line
          x1={x + lineLength}
          y1={y - lineLength}
          x2={x - lineLength}
          y2={y + lineLength}
          stroke="#00cc88"
          variants={draw}
          custom={2.5}
        />
      </>
    );
  };

  const renderWinningLine = () => {
    if (!winningCombo) return null;

    const [startPos, , endPos] = winningCombo.map((i) => calculateCenter(i));

    const dx = endPos.x - startPos.x;
    const dy = endPos.y - startPos.y;

    const length = Math.sqrt(dx * dx + dy * dy);
    const unitX = dx / length;
    const unitY = dy / length;

    const extension = 85;
    const extendedStartX = startPos.x - unitX * extension;
    const extendedStartY = startPos.y - unitY * extension;
    const extendedEndX = endPos.x + unitX * extension;
    const extendedEndY = endPos.y + unitY * extension;

    return (
      <motion.line
        x1={extendedStartX}
        y1={extendedStartY}
        x2={extendedEndX}
        y2={extendedEndY}
        stroke="gold"
        strokeWidth="15"
        variants={{
          hidden: { pathLength: 0, opacity: 0 },
          visible: {
            pathLength: 1,
            opacity: 1,
            transition: { delay: 0.5, duration: 1.5, bounce: 0 },
          },
        }}
        initial="hidden"
        animate="visible"
      />
    );
  };

  return (
    <motion.svg
      width="600"
      height="600"
      viewBox="0 0 600 600"
      initial="hidden"
      animate="visible"
      variants={draw}
    >
      <motion.line
        x1="200"
        y1="50"
        x2="200"
        y2="550"
        stroke="#000"
        strokeWidth="5"
        variants={draw}
        custom={1}
      />
      <motion.line
        x1="400"
        y1="50"
        x2="400"
        y2="550"
        stroke="#000"
        strokeWidth="5"
        variants={draw}
        custom={1.5}
      />
      <motion.line
        x1="50"
        y1="200"
        x2="550"
        y2="200"
        stroke="#000"
        strokeWidth="5"
        variants={draw}
        custom={2}
      />
      <motion.line
        x1="50"
        y1="400"
        x2="550"
        y2="400"
        stroke="#000"
        strokeWidth="5"
        variants={draw}
        custom={2.5}
      />

      {board.map((space, index) => (
        <rect
          key={index}
          x={(index % 3) * 200}
          y={Math.floor(index / 3) * 200}
          width="200"
          height="200"
          fill="transparent"
          onClick={() => handlePlayerMove(index)}
          style={{ cursor: space ? "not-allowed" : "pointer" }}
        />
      ))}

      {board.map((space, index) => {
        if (space === "X") {
          return renderX(index);
        } else if (space === "O") {
          const { x, y } = calculateCenter(index);
          return (
            <motion.circle
              key={index}
              cx={x}
              cy={y}
              r="80"
              stroke="#ff0055"
              variants={draw}
              initial="hidden"
              animate="visible"
              custom={1}
            />
          );
        }
        return null;
      })}
      {renderWinningLine()}
    </motion.svg>
  );
};

export default PlayingField;
