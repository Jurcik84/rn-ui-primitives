
import React from 'react';
import { Text, View, SectionList, SafeAreaView, StyleSheet, Image, StatusBar, FlatList } from 'react-native';

export default () => {

  return <View style={styles.container}>
  
  </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212"
  },
  sectionHeader: {
    fontWeight: '800',
    fontSize: 18,
    color: "#f4f4f4",
    marginTop: 20,
    marginBottom: 5
  },
  item: {
    margin: 10
  },
  itemPhoto: {
    width: 200,
    height: 200
  },
  itemText: {
    color: 'rgba(255,255,255,0.5)',
    marginTop: 5
  }
})




