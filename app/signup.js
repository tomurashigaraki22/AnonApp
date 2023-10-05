import { router } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Image ,TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';


const SignUp = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = () => {
      // Handle your form submission logic here, e.g., validation or API calls
      Alert.alert('Submitted', `Email: ${username}\nPassword: ${password}`);
    };
  return (
    <View style={styles.container}>
           <View style={styles.header}>
              <Image 
                style={styles.tinyLogo}
                source={require('../assets/triangle.png')}
                />
              <Text style={styles.tinyText}>
                Sign Up
            </Text>
        </View>
     <View style={styles.textContainer}>
     <Text style={styles.texts}>Join an Exciting Social Experience.</Text>
     </View>
    <View style={styles.inputContainer}>
     <Icon name="user" size={20} color="gray" style={styles.inputIcon} />
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        keyboardType="text"
        autoCapitalize="none"
      />
     </View>
     <View style={styles.inputContainer}>
     <Icon name="lock" size={20} color="gray" style={styles.inputIcon} />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
     </View>

     <TouchableOpacity style={styles.login} onPress={()=> { router.push("/home")}}> 
     <Text style={styles.buttonText}>Sign Up</Text>
     </TouchableOpacity>

     <TouchableOpacity onPress={() => { router.push('/login')}}>
          <Text style={styles.t1}>Already a User, Login Here</Text>
        </TouchableOpacity>


     <Text style={styles.footer}>{'\u00A9'} 2023; Anon</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      padding: 16,
    },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 0,
      marginBottom: 10,
      paddingLeft: 8,
      borderRadius: 10,
      flex: 1,
    },
    inputContainer: {
      flexDirection: 'row',
      borderWidth: 1,
      borderColor: '#ccc',
      alignItems: 'center',
      paddingLeft: 10,
      marginBottom:20,
      borderRadius:20,
    },
    inputIcon: {
      marginRight: 10,
    },
    textContainer: {
      marginBottom: 5,
      // backgroundColor: '#6CB4EE',
      width: 'auto',
      height: "auto",
    },
    texts: {
      fontSize:40,
      color: "#000",
      textAlign:'center',
    },
    upper: {
        fontSize:20
    },
    login:{
        width:200,
        height:50,
        backgroundColor: "#000",
        color:"#fff",
        borderRadius: 10,
        marginLeft:80,
    },
    buttonText:{
        position:"absolute",
        top:10,
        left:70,
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
        marginTop:20,
      }, 
      footer: {
        marginTop:80,
        textAlign:"center"
      },
      t1: {
        color: "gray", // Change text color to white
        fontSize: 15,
        marginTop: 20,
        textAlign:"center",
      },
    
  }); 


export default SignUp