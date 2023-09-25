import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

type Player = 'X' | 'O' | null;

const initialBoard: Player[] = Array(16).fill(null);

const calculateWinner = (squares: Player[]): Player | null => {
  const winningLines = [
    [0, 1, 2, 3],
    [4, 5, 6, 7],
    [8, 9, 10, 11],
    [12, 13, 14, 15],
    [0, 4, 8, 12],
    [1, 5, 9, 13],
    [2, 6, 10, 14],
    [3, 7, 11, 15],
    [0, 5, 10, 15],
    [3, 6, 9, 12],
  ];

  for (const line of winningLines) {
    const [a, b, c, d] = line;
    if (
      squares[a] &&
      squares[a] === squares[b] &&
      squares[a] === squares[c] &&
      squares[a] === squares[d]
    ) {
      return squares[a];
    }
  }

  return null;
};

const TicTacToeGame: React.FC = () => {
  const [board, setBoard] = useState<Player[]>(initialBoard);
  const [currentPlayer, setCurrentPlayer] = useState<Player>('X');
  const winner = calculateWinner(board);

  const handleClick = (index: number) => {
    if (board[index] === null && !winner) {
      const newBoard = [...board];
      newBoard[index] = currentPlayer;
      setBoard(newBoard);
      setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
    }
  };

  const handleClear = () => {
    setBoard(initialBoard);
    setCurrentPlayer('X');
  };

  const getStatus = () => {
    if (winner) {
      return `Winner: ${winner}`;
    } else if (board.every(cell => cell !== null)) {
      return 'Draw';
    } else {
      return `Next player: ${currentPlayer}`;
    }
  };

  const isWinningCell = (index: number): boolean => {
    if (winner) {
      const winningCombination = calculateWinner(board);
      return winningCombination !== null && winningCombination === board[index];
    }
    return false;
  };

  return (
    <View style={styles.gameContainer}>
      <Text style={styles.status}>{getStatus()}</Text>
      <View style={styles.board}>
        {board.map((player, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleClick(index)}
            style={[styles.cell, isWinningCell(index) && styles.winningCell]}>
            <Text style={styles.cellText}>{player}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity onPress={handleClear} style={styles.clearButton}>
        <Text style={styles.clearButtonText}>Clear</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TicTacToeGame;
