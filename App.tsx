
import React, { useEffect, useRef, useState } from 'react';
import { Text, SafeAreaView, FlatList, StyleSheet, View } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import NetInfo from "@react-native-community/netinfo";

function useNetInfo() {

  const [isConnected, setIsConnected] = useState<Boolean>(false);
  const [connectionType, setConnectionType] = useState<String>("")

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(({ type, isConnected }) => {
      // console.log("Connection type", type);
      // console.log("Is connected?", isConnected);
      setIsConnected(isConnected);
      setConnectionType(type);
    });

    return () => {
      unsubscribe();
    }
  })

  return {
    isConnected
  }
}


type UserType = {
  userId: number,
  id: number,
  title: string,
  completed: boolean
}

const strUri = "https://jsonplaceholder.typicode.com/todos/";

function useLocalStorage(dataFromServer: unknown) {
  const key = '@data';
  const [storedData, setStoredData] = useState<unknown>();

  async function saveDataToLocStorage(data: unknown) {
    await AsyncStorage.setItem(key, JSON.stringify(data));
  }

  async function getStoredData() {
    const result = await AsyncStorage.getItem(key);
    if (result) {
      setStoredData(result);
    }
  }

  useEffect(() => {

  }, []);

  return { saveDataToLocStorage, getStoredData, storedData }
}


function useFetch(strUri: string) {
  const [userList, setuserList] = useState<Array<UserType>>([]);
  const { } = useLocalStorage(userList)

  useEffect(() => {
    fetch(strUri)
      .then(response => response.json())
      .then(json => setuserList(json))
      .catch(({ message }) => console.log('error useFetch', message))

  }, []);

  return {
    userList
  }
}



export default function App() {
  const { isConnected } = useNetInfo();
  const { userList = [] } = useFetch(strUri);


  const getListViewItem = (item) => {
    console.log(item)
  }
  return (
    <SafeAreaView style={styles.container}>
      {
        isConnected ?  <FlatList
        keyExtractor={(item) => String(item.id)}
        data={userList}
        renderItem={({ item }) => <Text style={styles.item}
          onPress={getListViewItem}>{item.title}</Text>}
        ItemSeparatorComponent={() => <View style={{
          borderBottomWidth: 1,
          borderColor: '#cdcdcd'
        }}></View>}
      />: <Text>Macka</Text>
      }
    </SafeAreaView>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})
