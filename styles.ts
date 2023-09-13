// styles.ts
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  gameContainer: {
    margin: 20,
    padding: 20,
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: '#fff',
    borderColor: '#333',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  status: {
    fontSize: 18,
    marginBottom: 10,
    color: '#555',
  },
  board: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 300,
  },
  cell: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    backgroundColor: '#ddd',
    borderColor: '#333',
  },
  cellText: {
    fontSize: 36,
    color: '#333',
  },
  clearButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#ff5733',
    borderRadius: 5,
  },
  clearButtonText: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center', // Center the text horizontally
  },
});
