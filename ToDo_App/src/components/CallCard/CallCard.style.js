import {Colors} from 'react-native/Libraries/NewAppScreen';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#7da453',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  pressed_container: {
    backgroundColor: '#37474f',
    marginBottom: 10,
    borderRadius: 5,
    padding: 10,
  },
  pressed_Text: {
    textDecorationLine: 'line-through',
    fontSize: 15,
  },
  callText: {color: 'white', fontSize: 15},
});
