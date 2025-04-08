import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

export default function MainScreen({navigation}) {
  return (
    <View style={styles.view}>
      <Text style={styles.txt}>Are you interested in your Future?</Text>
      <Text style={styles.txt}>You can visit our page!</Text>
      <Button 
        title="Future Areas"
        onPress={() => navigation.navigate("Areas Page")}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-around"
    },

    txt: {
        fontSize: 25,
        textAlign: "center"
    },

})
