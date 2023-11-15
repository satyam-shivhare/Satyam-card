import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source = {require('./assets/profile.jpeg')} style={styles.profile} />
      <Text style={styles.text}>Hello</Text>
      <Text style={styles.tagline}>I am Satyam</Text>
      <Text style={styles.description} >iOS Developer</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profile: {
    width : 200,
    height: 200,
    borderRadius : 100,
    margin: 30,
  },
  tagline : {
    fontSize : 35,
    textAlign : 'center',
    fontWeight : 'bold',
    margin : 10,
  },
  text : {
    fontSize : 25,
    fontWeight : 'light',
    margin : 10,
    textAlign : 'center',
    fontFamily : 'Times New Roman'
  },
  description : {
    fontSize  : 25,
    textAlign: 'center',
    fontWeight : '400',
    fontFamily : 'Helvetica',
    margin : 10
  }
});
