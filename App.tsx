import React, { useEffect, useState } from 'react';
import { View, Text, Dimensions, Platform, StyleSheet } from 'react-native';


function usePlatformDetection() {

  const devicePlatform = Platform.OS || "Platform.OS is N/A";
  const deviceOSVersion= Platform.Version || "Platform.Version is N/A";

  return Object.freeze({
    devicePlatform,
    deviceOSVersion
  });

}

type DeviceOrientation = "portrait" | "landscape"


function useDimensionManager() {

  const [deviceOrientation, setDeviceOrientaton] = useState<DeviceOrientation>('portrait');

  useEffect(useEffectCallback, []);

  return Object.freeze({ deviceOrientation });

  function orientationHandler() {
    const { width, height } = Dimensions.get("window");
    setDeviceOrientaton(width < height ? "portrait" : "landscape");
  }

  function useEffectCallback() {
    Dimensions.addEventListener('change', orientationHandler);
  }
}

export default function App() {

  const { deviceOrientation = "", } = useDimensionManager();
  const { devicePlatform,
    deviceOSVersion } = usePlatformDetection();

  return <View style={styles.container}>
    <Text>Your device is in {deviceOrientation} mode</Text>
    <Text>Your device is in {devicePlatform} Operate system</Text>
    <Text>Your device is in {deviceOSVersion} Verson of Operate system</Text>
  </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 40,
  }
})




// variables su identifikovatelne hotnoty podla ich mena
// su hodnoty ktore su pomenovane , dane meno , id , identifiktator
