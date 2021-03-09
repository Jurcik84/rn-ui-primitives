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


type coordsType = {
    latitude?: number,
    longitude?: number
}

type RNMGeolocationState = {
    originalCoords: coordsType,
    updatedCoords: coordsType,
    id: unknown
}

export default class RNMGeolocation extends React.Component<{}, RNMGeolocationState> {
    id: unknown = ''
    readonly state: RNMGeolocationState = {
        originalCoords: {},
        updatedCoords: {},
        id: ''
    };

    componentDidMount() {
        Geolocation.getCurrentPosition(this.getCurrentPosSuccHandler, this.getCurrentPosErrorHandler);
        this.id = Geolocation.watchPosition(this.geoHandlerSuccess, this.geoHandlerError);
    }

    private getCurrentPosErrorHandler = ({ message }: { message: string }) => {
        console.log("Geolocation.getCurrentPosition error message", message);
    }
    private getCurrentPosSuccHandler = ({ coords }: { coords: RNMGeolocationState["originalCoords"] }) => {
        this.setState((prevState: RNMGeolocationState): RNMGeolocationState => ({
            ...prevState,
            originalCoords: coords,

        }));
    }

    private geoHandlerSuccess = ({ coords }: { coords: RNMGeolocationState["updatedCoords"] }) => {
        this.setState((prevState: RNMGeolocationState): RNMGeolocationState => ({
            ...prevState,
            id: this.id,
            updatedCoords: coords
        }));

    }

    private geoHandlerError = ({ message }: { message: string }) => {
        console.log("Geolocation.watchPosition error message", message);
    }

    private clearGeoWatch = () => {
        Geolocation.clearWatch(Number(this.state.id));
    }

    public render() {
        const { originalCoords,
            updatedCoords } = this.state;

        return <SafeAreaView style={[style.container]}>
            <Text>Using the Geolocation API to get users's current location</Text>
            <View style={[style.container]}>
                <Text>Original Coordinates :</Text>
                <Text>{originalCoords.latitude}</Text>
                <Text>{originalCoords.longitude}</Text>
                <Text>Updated Coordinates</Text>
                <Text>{updatedCoords.latitude}</Text>
                <Text>{updatedCoords.longitude}</Text>
                <TouchableHighlight onPress={this.clearGeoWatch} style={[style.button]}>
                    <Text>Clear Geo Watch</Text>
                </TouchableHighlight>
            </View>
        </SafeAreaView>
    }
}
