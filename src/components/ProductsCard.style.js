import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#eceff1',
    margin: 10,
    borderRadius: 10,
    flex: 1,
    justifyContent: 'center',
    maxWidth: 200,
  },
  image: {
    resizeMode: 'stretch',
    margin: 10,
    height: Dimensions.get('window').height / 4,
    width: Dimensions.get('window').width / 2.5,
    borderRadius: 10,
  },
  title: {
    margin: 10,
    fontWeight: 'bold',
    minHeight: 40,
  },
  text: {
    margin: 10,
    alignItems: 'left',
    color: 'black',
  },
  stock: {
    position: 'absolute',
    margin: 10,
    fontSize: 12,
    color: 'red',
    right: 1,
    bottom: 1,
  },
});
