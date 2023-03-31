import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'row',
    margin: 10,
    alignItems: 'center',
    padding: 10,
    borderTopStartRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
  },
  img: {
    resizeMode: 'contain',
    height: 80,
    width: 80,
  },
  title: {
    marginLeft: 20,
    fontSize: 22,
  },
});
