import React from 'react';
import { Alert, View, Text, StyleSheet, AppState } from 'react-native';

const style = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flex: 1,
        marginHorizontal: 20
    },
    button: {
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ededed'
    }
})

export default class RNAppState extends React.Component<{}, {}> {
    state = {
        appState: 'active'
    }
    componentDidMount() {
        AppState.addEventListener('change', this.handleAppState)
    }
    handleAppState = (currentAppState: string) => {
        this.setState(() => ({
            appState: currentAppState
        }));
    }
    public render() {

        return <View style={[style.container]}>
            <Text style={{
                fontSize: 22,
                marginBottom: 20
            }}>AppState will tell you whether the app is active, inactive of in the background</Text>
            <Text>AppState:  {this.state.appState} </Text>
        </View>
    }
}
