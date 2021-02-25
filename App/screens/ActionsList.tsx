import React from "react";
import { View, Button } from "react-native";

export default ({ navigation }) => (
  <View style={{ flex: 1 }}>
    <Button title="Open Modal" onPress={() => navigation.navigate('Modal', {
      data: 123
    })} />
    <Button title="Open Alert" onPress={() => alert("todo!")} />
  </View>
);