import React from 'react';
import {  View, Text, StyleSheet, AppState } from 'react-native';

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
    interval: unknown = null;
    state = {
        appState: 'active',
        time: 0
    }
    componentDidMount() {
        AppState.addEventListener('change', this.handleAppState)
    }
    handleAppState = (currentAppState: string) => {
        this.setState(() => ({
            appState: currentAppState
        }), () => {
            this.getTimeOfInactive(this.state.appState);
        });
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    getTimeOfInactive = (appStateValue: string) => {

        if (appStateValue.includes('inactive')) {
            this.interval = setInterval(() => {
                this.setState(() => ({
                    time: this.state.time += 1
                }))

            }, 1000);
        }
        else if (appStateValue.includes('background')) {
            this.setState(() => ({
                time: 0
            }))
        }
        else {
            clearInterval(this.interval);
        }
    }

    public render() {

        return <View style={[style.container]}>
            <Text style={{
                fontSize: 22,
                marginBottom: 20
            }}>AppState will tell you whether the app is active, inactive of in the background</Text>
            <Text>AppState:  {this.state.appState} </Text>
            <Text>App was inactivate for  {this.state.time} seconds </Text>
        </View>
    }
}
