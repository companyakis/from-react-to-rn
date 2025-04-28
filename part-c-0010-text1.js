import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function MainScreen({navigation}) {
  return (
    <View style={styles.view}>
      <Text style={styles.txt1}>Text 1</Text>
      <Text style={styles.txt2}>Text 2</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    view: {
      display: "flex",
      // flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height:"100%",
      backgroundColor: "yellow"
    },
    
    txt1: {
      fontSize: 30,
      fontWeight: "700",
      color: "blue"
    },

    txt2: {
      fontSize: 45,
      paddingTop: 15,
      color: "green"
    }
    
})
