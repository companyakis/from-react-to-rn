
import { StyleSheet ,View, Text } from 'react-native';


export default function App() {


  return (
    <View style={styles.container}>

      <View style={styles.view1}></View>

      <View style={styles.view2}></View>

      <View style={styles.view3}></View>
      
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    borderWidth: 3,
    borderColor: "gray",
    margin: 15,
    borderRadius: 5,
    alignItems: "flex-end",

  },

  view1: {
    width: 150,
    height: 150,
    backgroundColor: "purple",
    margin: 10
  },

  view2: {
    width: 100,
    height: 100,
    backgroundColor: "green",
    margin: 10
  },

  view3: {
    width: 90,
    height: 90,
    backgroundColor: "blue",
    margin: 10
  }

});
