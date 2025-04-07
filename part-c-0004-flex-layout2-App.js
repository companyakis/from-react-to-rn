
import { StyleSheet ,View, Text } from 'react-native';


export default function App() {


  return (
    <View style={styles.container}>

      <Text style={styles.txt}>Text 1</Text>

      <Text style={styles.txt}>Text 2</Text>

      <Text style={styles.txt}>Text 3</Text>
      
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    borderWidth: 3,
    borderColor: "gray",
    margin: 25,
    borderRadius: 5,
    // alignItems: "flex-start"
    alignItems: "stretch"
  },

  txt: {
    fontSize: 25,
    borderWidth: 2,
    borderColor: "gray",
    borderRadius: 5,
    margin: 15,
    padding: 10,
    textAlign: "center"
  }

});
