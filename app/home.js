import { View, Text, StyleSheet, Image, } from 'react-native'
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import TabBar from "./tabBar";

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.tinyContainer}>
      <Image 
        style={styles.tinyLogo}
        source={require('../assets/triangle.png')}
        />
      </View>
      {/* <ScrollView style={styles.scroll}>
            
      </ScrollView> */}
      <TabBar style={styles.tabBar} /> 
    </View>
  )
}

const styles = StyleSheet.create({
    tinyLogo: {
        width:30,
        height:30,
      },
    tinyContainer:{
        textAlign:"center",
        marginLeft:180,
    },
    tabBar: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
      },
})

export default Home