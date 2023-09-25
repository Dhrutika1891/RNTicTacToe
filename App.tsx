import React from 'react';
import {View} from 'react-native';
import TicTacToeGame from './TicTacToeGame';
import styles from './styles';

export default function App() {
  return (
    <View style={styles.container}>
      <TicTacToeGame />
    </View>
  );
}
