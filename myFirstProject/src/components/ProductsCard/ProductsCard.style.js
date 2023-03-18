import {StyleSheet, Dimensions} from 'react-native';
export default StyleSheet.create({
  image: {
    resizeMode: 'contain',
    borderRadius: 10,
    height: Dimensions.get('window').height / 4,
  },
  container: {
    flex: 1,
    padding: 10,
    margin: 10,
    borderRadius: 10,
    backgroundColor: 'lightgray',
    width: '50%',
  },
  title: {
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 3,
    marginTop: 3,
  },
  stock: {
    fontWeight: 'bold',
    fontSize: 14,
    color: 'red',
    marginTop: 2,
  },
});
