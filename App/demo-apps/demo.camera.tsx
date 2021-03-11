import React, { PureComponent } from 'react';
import { Alert, AppRegistry, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RNCamera } from 'react-native-camera';

class ExampleApp extends PureComponent<{}, {}> {
  camera: unknown;
  state = {
    imgUri: ""
  }
  render() {
    return (
      <View style={styles.container}>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          captureAudio={false}

          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
        // androidCameraPermissionOptions={{
        //   title: 'Permission to use camera',
        //   message: 'We need your permission to use your camera',
        //   buttonPositive: 'Ok',
        //   buttonNegative: 'Cancel',
        // }}
        // androidRecordAudioPermissionOptions={{
        //   title: 'Permission to use audio recording',
        //   message: 'We need your permission to use your audio',
        //   buttonPositive: 'Ok',
        //   buttonNegative: 'Cancel',
        // }}
        // onGoogleVisionBarcodesDetected={({ barcodes }) => {
        //   console.log(barcodes);
        // }}
        />
        <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
          <TouchableOpacity onPress={this.takePicture} style={styles.capture}>
            {/* <Text style={{ fontSize: 14 }}> SNAP </Text> */}
          </TouchableOpacity>
        </View>
        {
          !!this.state.imgUri ? <Image source={{ uri: this.state.imgUri }} style={{
            flex: 1
          }} /> : null
        }
      </View>
    );
  }

  takePicture = async () => {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options);
     
      this.setState(() => ({
        imgUri: data.uri
      }))
    }
    else {
     Alert.alert("takePicture error", 'error');
    }
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    width: 80,
    height: 80,
    backgroundColor: '#fff',
    borderRadius: 40 ,
    // padding: 15,
    // paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
    borderColor: 'red',
    borderWidth: 10
  },
});

export default ExampleApp;
