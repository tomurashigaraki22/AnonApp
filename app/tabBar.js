import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation, useRoute } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { router } from "expo-router";

function TabBar() {
  return (
    <View style={styles.tabBarContainer}>
      <TouchableOpacity
        style={styles.tabItem}
        onPress={() => { router.push('/home')}}
      >
        <Icon name="home" size={20} color="black" />
        <Text>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.tabItem}
        onPress={() => { router.push('/search')}}
      >
        <Icon name="search" size={20} color="black"/>
        <Text>Search</Text>
      </TouchableOpacity>
      <TouchableOpacity
      style={styles.tabItem}
      onPress={() => {router.push("./post")}}>
        <Icon name="plus" size={20} color="black"/>
        <Text>Post</Text>
      </TouchableOpacity>
      <TouchableOpacity
      style={styles.tabItem}
      onPress={() => {router.push("./notification")}}>
        <Icon name="bell" size={20} color="black"/>
        <Text>Notifications</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.tabItem}
        onPress={() => { router.push('/profile')}}
      >
        <Icon name="user" size={20} color="black" />
        <Text>Profile</Text>
      </TouchableOpacity>
      
      {/* Add more tab items as needed */}
    </View>
  );
}

const styles = StyleSheet.create({
  tabBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  darktabBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#777',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  tabItem: {
    paddingVertical: 10,
    alignItems: 'center',
  },
});

export default TabBar;
