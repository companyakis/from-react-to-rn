
import { StyleSheet ,View, Text } from 'react-native';


export default function App() {


  return (
    <View style={styles.container}>

      <Text style={styles.txt}>Hi there!</Text>
      
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    borderWidth: 3,
    borderColor: "purple",
    margin: 15,
    borderRadius: 5
  },

  txt: {
    fontSize: 30,
    color: "white",
    padding: 10,
    textAlign: 'center',
    backgroundColor: "gray"
  }

});
