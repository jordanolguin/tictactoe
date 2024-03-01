import { createContext, useContext, useState } from "react";

const GameContext = createContext();

const initialBoard = Array(9).fill(null);
const winCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export function useGame() {
  return useContext(GameContext);
}

export const GameProvider = ({ children }) => {
  const [board, setBoard] = useState(initialBoard);
  const [isXTurn, setIsXTurn] = useState(true);
  const [winner, setWinner] = useState(null);
  const [isDraw, setIsDraw] = useState(false);
  const [winningCombo, setWinningCombo] = useState(null);

  const handleClick = (i) => {
    if (board[i] || winner || isDraw) return;

    const newBoard = [...board];
    const currentPlayer = isXTurn ? "X" : "O";
    newBoard[i] = currentPlayer;
    setBoard(newBoard);

    if (checkWin(newBoard)) {
      setWinner(currentPlayer);
    } else if (newBoard.every((space) => space !== null)) {
      setIsDraw(true);
    } else {
      setIsXTurn(!isXTurn);
    }
  };

  const checkWin = (board) => {
    for (let i = 0; i < winCombos.length; i++) {
      const [a, b, c] = winCombos[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        setWinningCombo(winCombos[i]);
        return true;
      }
    }
    return false;
  };

  const resetGame = () => {
    setBoard(initialBoard);
    setIsXTurn(true);
    setWinner(null);
    setIsDraw(false);
    setWinningCombo(null);
  };

  const value = {
    board,
    isXTurn,
    winner,
    isDraw,
    handleClick,
    resetGame,
    winningCombo,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};
