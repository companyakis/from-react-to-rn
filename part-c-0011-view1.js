import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function MainScreen({navigation}) {
  return (
    <View style={styles.view}>

      <View style={styles.v1}>
        <Text>Lorem Ipsum</Text>
      </View>

      <View style={styles.v2}>
        <Text>Ceteris Paribus</Text>
      </View>
     
    </View>
  )
}

const styles = StyleSheet.create({
    view: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#ff70a6"
    },

    v1: {
      width: 200,
      height: 180,
      backgroundColor: "#06d6a0",
      borderRadius: 15,
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 15
    },

    v2: {
      width: 150,
      height: 150,
      backgroundColor: "#4895ef",
      borderRadius: 15,
      alignItems: "center",
      justifyContent: "center"
    }
    
})
