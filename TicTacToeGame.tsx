// TicTacToeGame.tsx
import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Button} from 'react-native';
import styles from './styles';

type Player = 'X' | 'O' | null;

const initialBoard: Player[] = Array(9).fill(null);

const calculateWinner = (squares: Player[]): Player | null => {
  const winningLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const [a, b, c] of winningLines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
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

  return (
    <View style={styles.gameContainer}>
      <Text style={styles.status}>{getStatus()}</Text>
      <View style={styles.board}>
        {board.map((player, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleClick(index)}
            style={styles.cell}>
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
