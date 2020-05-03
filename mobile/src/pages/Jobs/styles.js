import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#031427',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
  },
  headerTextBold: {
    // fontWeight: 'bold',
  },
  image: {
    width: 150,
    height: 90,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 40,
    marginBottom: 40,
  },
  description: {
    fontSize: 16,
  },
});
