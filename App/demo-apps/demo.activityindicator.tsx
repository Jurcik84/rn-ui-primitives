import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  ActivityIndicator,

} from 'react-native';




export default function () {
  const [isLoading, setIsLoading] = useState(true);
  const [loaderSize = "size", setLoaderSize] = useState('large');
  const [loaderColor, setLoaderColor] = useState('#ffe81f');

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoading(false)
  //   }, 10000);
  // }, []);

  return <SafeAreaView style={{ marginTop: 90 }}>
    {
      isLoading && <ActivityIndicator
      // --------- animating false will make indicator 
      // not visible
        animating={true}
        size={loaderSize} 
        color={loaderColor} />
    }

  </SafeAreaView>
}