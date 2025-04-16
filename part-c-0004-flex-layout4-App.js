import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

export default function MainScreen({navigation}) {
  return (
    <View style={styles.view}>

      <Text style={styles.txt}>Text 1</Text>
      <Text style={styles.txt}>Text 2</Text>
      <Text style={styles.txt}>Text 3</Text>

    </View>
  )
}

const styles = StyleSheet.create({
    view: {
      margin: 20,
      backgroundColor: "blue",
      borderWidth: 2,
      borderRadius: 10,
      height: 500,
    
      flexDirection: "row", // default column
      justifyContent: "center",
      alignItems: "center"
    },

    txt: {
        borderColor: "green",
        borderWidth: 2,
        borderRadius: 10,
        padding: 10,
        margin: 10,
        fontSize: 20,
        color: "white",
        backgroundColor: "green"
    },

})
