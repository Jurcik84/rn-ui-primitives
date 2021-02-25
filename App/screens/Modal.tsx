import React from "react";
import { View, Text, TouchableOpacity, Dimensions } from "react-native";

export default ({ navigation, route }) => (
  <View
    style={{
      flex: 1,
      backgroundColor: "transparent",
      alignItems: "center",
      justifyContent: "center",
      borderWidth: 1,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      
  
    }}
  >
    <TouchableOpacity
      style={{ backgroundColor: "white", padding: 20 }}
      onPress={() => navigation.pop()}
    >
      <Text>Modal me {route.params.data}</Text>
    </TouchableOpacity>
  </View>
);
