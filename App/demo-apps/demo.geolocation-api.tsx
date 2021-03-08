import React from 'react';
import {  Text, StyleSheet, SafeAreaView } from 'react-native';
import Geolocation from '@react-native-community/geolocation';

const style = StyleSheet.create({
    container: {
        flex: 1,
    },
});


export default class RNMGeolocation extends React.Component<{}, {}> {
    state = {
        originalCoords: {},
        updatedCoords: {},
        id: ''
    };

    componentDidMount() {
        // Geolocation.getCurrentPosition(({coords}) => {
        //     console.log("geo data", coords);
        // }, ({ message }) => {
        //     console.log("geo data", message);
        // });
        console.log('geo', Geolocation && Geolocation )
    }

    public render() {

        return <SafeAreaView style={[style.container]}>
            <Text>ako s</Text>
        </SafeAreaView>
    }
}
