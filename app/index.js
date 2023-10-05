import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';

const Index = () => {
    const router = useRouter();

  return (
    <View style={styles.container}>
        <View style={styles.header}>
        <Image 
                style={styles.tinyLogo}
                source={require('../assets/triangle.png')}
                />
            <Text style={styles.tinyText}>
                Welcome
            </Text>
        </View>
      <View style={styles.text}>
         <Text style={styles.texts}>Welcome to Anon</Text>
         <Text style={styles.texts}>Connect with other anonymously and share
            your thoughts without revealing your identity.
            Anon is the perfect plaftorm to express yourself freely.
         </Text>
      </View>


     <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => {
            // Navigate to the login page
            router.push('/login')  
        }}>
            <Text style={styles.buttonText}>Log In</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => {
            // Navigate to the login page
            router.push('/signup')  
        }}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.footers}>{'\u00A9'} 2023; Anon</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    texts: {
      textAlign:"center",
      width:300,
      marginLeft:50,
      fontSize:20,
    },
    text: {
      marginTop:250,
    },
    buttonContainer: {
        width: "80%",
        position: "absolute",
        bottom: -100,
        flexDirection: "row",
        justifyContent: "space-between",
        left:40,
      },
      button: {
        flex: 1,
        backgroundColor: "#000",
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 10,
        marginHorizontal: 5,
      },
      buttonText: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
      },
      tinyLogo: {
        width:30,
        height:30,
      },
      tinyText: {
         fontSize:20,
      },
      header:{
        display:"flex",
        flexDirection:"row",
        marginLeft:140,
        marginTop:80,
        marginBottom:-50,
      },
      footers: {
        marginTop:20,
        textAlign:"center"
      }
})

export default Index;