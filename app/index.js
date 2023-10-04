import { View, Text, StyleSheet, Link } from 'react-native';
import React from 'react';

const Index = () => {
  return (
    <View style={styles.container}>
      <View style={styles.text}>
         <Text>Welcome to Anon</Text>
         <Text>Connect with other anonymously and share
            your thoughts without revealing your identity.
            Anon is the perfect plaftorm to express yourself freely.
         </Text>
      </View>

      <View style={styles.btn}>
          <Link href="/login">Log In</Link>
          <Link href="/signup">Sign Up</Link>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#000",
        color:"#fff",
    }
})

export default Index;