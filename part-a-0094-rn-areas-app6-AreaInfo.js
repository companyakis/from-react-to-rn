import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function AreaInfo({title, areaPic, info}) {
  return (
    <View style={styles.container} >
      <Text style={styles.txttitle}>{title}</Text>
      <Image source={areaPic} style={styles.img} />
      <Text style={styles.txtinfo}>{info}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    img: {
        height: 200,
        width: "90%",
        borderRadius: 5
    },

    txttitle: {
        fontSize:35,
        color: "blue",
        margin: 10
    },

    txtinfo: {
        fontSize: 20,
        margin: 10
    }
})
