import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'orange',
  },
  innerContainer: {
    backgroundColor: 'white',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
    marginHorizontal: 60,
    padding: 10,
    marginBottom: 100,
  },
  errorText: {
    marginBottom: 15,
    color: 'black',
    fontWeight: 'bold',
  },
  img: {
    resizeMode: 'contain',
    height: 100,
  },
});
