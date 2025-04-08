import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function App() {
  const areas = [
    {id: 1, name: "FinTech"},
    {id: 2, name: "Deep Learning"},
    {id: 3, name: "Reinforcement Learning"},
    {id: 4, name: "AI Agents"},
    {id: 5, name: "Blockchain"},
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={areas}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => {
          return <Text style={styles.txt}>{item.name}</Text>
        }}
        // horizontal
        // showsHorizontalScrollIndicator={false}
      />
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

  txt: {
    borderWidth: 3,
    borderColor: "purple",
    borderRadius: 10,
    textAlign: "center",
    fontSize: 20,
    color: "white",
    backgroundColor: "purple",
    margin: 50,
    padding: 10
  }

});
