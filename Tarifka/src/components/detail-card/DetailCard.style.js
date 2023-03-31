import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    minHeight: Dimensions.get('window').height / 2.2,
  },
  innerContainer: {
    margin: 5,
  },
  titleContainer: {
    paddingBottom: 5,
    marginBottom: 5,
    borderBottomWidth: 1,
    borderColor: 'gray',
    width: '100%',
  },
  title: {fontSize: 24, color: 'darkred', fontWeight: 'bold'},
  area: {fontSize: 18, color: 'darkred', fontWeight: 'bold'},
  instruciton: {color: 'black', marginBottom: 10},
  button: {
    backgroundColor: '#E70000',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    margin: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
  },
});
