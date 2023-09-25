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
    alignItems: 'center',
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
  boardContainer: {
    width: '100%',
    alignItems: 'center',
  },
  board: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    justifyContent: 'center',
  },
  cell: {
    width: '25%',
    aspectRatio: 1,
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
    textAlign: 'center',
  },
  winningCell: {
    backgroundColor: 'green',
  },
});
