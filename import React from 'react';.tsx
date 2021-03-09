import React from 'react';
import { Text, StyleSheet, SafeAreaView, View } from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import { TouchableHighlight } from 'react-native-gesture-handler';

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20
    },
    button: {
        height: 60,
        marginTop: 15,
        backgroundColor: '#ededed',
        justifyContent: 'center',
        alignItems: 'center'

    }
});



export default class RNKeyBoardApi extends React.Component<{}, {}> {
    id: unknown = ''
    readonly state: {} = {
        
    };


    public render() {
    
        return <SafeAreaView style={[style.container]}>
            
        </SafeAreaView>
    }
}
