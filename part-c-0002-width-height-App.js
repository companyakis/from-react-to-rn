import { StatusBar } from 'expo-status-bar';
import { StyleSheet ,View } from 'react-native';


export default function App() {


  return (
    <View>

      <View style={styles.view1} />
      <View style={styles.view2}  />
      <View style={styles.view3}  />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({

  view1: {
    width: 200,
    height: 250,
    backgroundColor: "purple"
  },

  view2: {
    width: 180,
    height: 160,
    backgroundColor: "blue"
  },

  view3: {
    width: 150,
    height: 150,
    backgroundColor: "green"
  },

});
