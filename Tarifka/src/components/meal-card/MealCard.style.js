import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    alignItems: 'center',
    borderRadius: 10,
    justifyContent: 'center',
    height: Dimensions.get('window').height / 3.5,
  },
  img: {
    borderRadius: 10,
    flex: 1,
    resizeMode: 'cover',
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  textContainer: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: 'rgba(0,0,0,0.6)',
    flex: 1,
    height: 50,
    width: '100%',
    position: 'absolute',
    bottom: 0,
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 27,
    textAlign: 'right',
    marginLeft: 10,
    marginRight: 10,
  },
});
