import { useState } from "react";

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

export default function useGameLogic() {
  const [board, setBoard] = useState(initialBoard);
  const [isXTurn, setIsXTurn] = useState(true);
  const [winner, setWinner] = useState(null);
  const [isDraw, setIsDraw] = useState(false);

  const handleClick = (i) => {
    if (board[i] || winner) return;

    const newBoard = [...board];
    newBoard[i] = isXTurn ? "X" : "O";
    setBoard(newBoard);

    const hasWinner = checkWin(newBoard);
    if (hasWinner) {
      setWinner(isXTurn ? "X" : "O");
    } else if (newBoard.every((space) => space !== null)) {
      setIsDraw(true);
    }

    setIsXTurn(!isXTurn);
  };

  const checkWin = (board) => {
    for (let i = 0; i < winCombos.length; i++) {
      const [a, b, c] = winCombos[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
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
  };

  return { board, isXTurn, winner, isDraw, handleClick, resetGame };
}
