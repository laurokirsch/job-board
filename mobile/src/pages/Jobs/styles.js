import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: Constants.statusBarHeight,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {},
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
  jobsList: {
    marginTop: 32,
  },
  job: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#fff',
    marginBottom: 16,
  },
  jobProperty: {
    fontWeight: 'bold',
  },
  jobValue: {
    marginTop: 8,
    fontSize: 15,
    marginBottom: 24,
  },
  detailsButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  detailsButtonText: {
    fontWeight: 'bold',
    fontSize: 15,
    color: 'darkblue',
  },
});
