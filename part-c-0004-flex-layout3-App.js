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
      flexDirection: "column-reverse", // default column
      alignItems: "flex-end"
    },

    txt: {
        borderColor: "green",
        borderWidth: 2,
        borderRadius: 10,
        padding: 20,
        margin: 20,
        fontSize: 25,
        color: "white",
        textAlign: "center",
        backgroundColor: "green"
    },

})
