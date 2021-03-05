import React from 'react';
import { Alert, View, TouchableHighlight, Text, StyleSheet } from 'react-native';

const style = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flex:1
    },
    button: {
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ededed'
    }
})

export default class RNAlert extends React.Component {
    state = {
        showMessage: false
    }

    showAlert = () => {
        Alert.alert('Title', "Message !", [
            {
                text: "Cancel",
                onPress: () => console.log("Dismiss called ..."),
                style: 'destructive'
            }, {
                text: "Show Message",
                onPress: () => this.setState({
                    showMessage: true
                })
            }
        ])
    }
    public render() {
        const { showMessage } = this.state;
        return <View style={[style.container]}>
            <TouchableHighlight onPress={this.showAlert} style={[style.button]}>
                 <Text>SHOW Alert</Text>
            </TouchableHighlight>
            {
                showMessage && <Text>Showing message - success</Text>
            }
        </View>
    }
}
