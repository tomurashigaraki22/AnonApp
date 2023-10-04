import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';

const Index = () => {
    const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.text}>
         <Text style={styles.texts}>Welcome to Anon</Text>
         <Text style={styles.texts}>Connect with other anonymously and share
            your thoughts without revealing your identity.
            Anon is the perfect plaftorm to express yourself freely.
         </Text>
      </View>

      {/* <View style={styles.btn}>
      <Button
          title="Log In"
          onPress={() => {
            // Navigate to the login page
            router.push('/login')  
        }}
        />
        <Button
          title="Sign Up"
          onPress={() => {
            // Navigate to the signup page
           router.push('/signup')  
        }}
        /> 
    </View>*/}

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
})

export default Index;