import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

export default function MainScreen({navigation}) {
  return (
    <View style={styles.view}>

      <Text style={styles.txt1}>Text 1</Text>
      {/* <Text style={styles.txt2}>Text 2</Text>
      <Text style={styles.txt3}>Text 3</Text> */}

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
      justifyContent: "space-between"
    },

    txt1: {

        position: "absolute",
        top: 0,
        right: 0,
        // left: 10,
        // bottom: 40,
        borderColor: "green",
        borderWidth: 2,
        borderRadius: 10,
        padding: 10,
        margin: 10,
        fontSize: 20,
        color: "white",
        backgroundColor: "green",
        textAlign: "center"
    },

//     txt2: {

//       alignSelf: "center",

//       borderColor: "green",
//       borderWidth: 2,
//       borderRadius: 10,
//       padding: 10,
//       margin: 10,
//       fontSize: 20,
//       color: "white",
//       backgroundColor: "green",
//       textAlign: "center"
//   },

//   txt3: {

//     alignSelf: "flex-end",

//     borderColor: "green",
//     borderWidth: 2,
//     borderRadius: 10,
//     padding: 10,
//     margin: 10,
//     fontSize: 20,
//     color: "white",
//     backgroundColor: "green",
//     textAlign: "center"
// },


})
