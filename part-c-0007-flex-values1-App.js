import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

export default function MainScreen({navigation}) {
  return (
    <View style={styles.view}>

      <Text style={styles.txt1}>Text 1</Text>
      <Text style={styles.txt2}>Text 2</Text>
      <Text style={styles.txt3}>Text 3</Text>

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

    },

    txt1: {

        flex: 3,

        borderColor: "green",
        borderWidth: 2,
        borderRadius: 10,
        padding: 10,
        margin: 10,
        fontSize: 20,
        color: "white",
        backgroundColor: "green"
    },

    txt2: {

      flex: 5,

      borderColor: "green",
      borderWidth: 2,
      borderRadius: 10,
      padding: 10,
      margin: 10,
      fontSize: 20,
      color: "white",
      backgroundColor: "green"
  },

  txt3: {

    flex: 2,

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
