import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

export default function MainScreen({navigation}) {
  return (
    <View style={styles.view}>
      <View style={styles.vw1}></View>
      <View style={styles.vw2}></View>
      <View style={styles.vw3}></View>
      <View style={styles.vw4}></View>
    </View>
  )
}

const styles = StyleSheet.create({
    view: {
      margin: 20,
      backgroundColor: "gray",
      borderWidth: 2,
      borderRadius: 10,
      height: 600,
    },

    vw1: {
      width: 100,
      height: 100,
      backgroundColor: "blue",
      margin: 10,
      borderRadius: 10,
    },

    vw2: {
      width: 100,
      height: 100,
      backgroundColor: "green",
      margin: 10,
      borderRadius: 10,
      position: "absolute",
      right: 0
    },

    vw3: {
      width: 100,
      height: 100,
      backgroundColor: "yellow",
      margin: 10,
      borderRadius: 10,
      position: "absolute",
      bottom: 0,

    },

    vw4: {
      width: 100,
      height: 100,
      backgroundColor: "purple",
      margin: 10,
      borderRadius: 10,
      position: "absolute",
      right: 0,
      bottom: 0,
    },

})
