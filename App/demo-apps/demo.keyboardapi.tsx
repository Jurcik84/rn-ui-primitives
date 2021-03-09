import React from 'react';
import { Text, StyleSheet, SafeAreaView, View, Keyboard } from 'react-native';
import { TextInput, TouchableHighlight } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 150,
    },
    input: {
        margin: 10,
        backgroundColor: '#ededed',
        height: 50,
        padding: 10
    }, button: {
        height: 50,
        backgroundColor: '#dddddd',
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center'
    }
})


export default class RNKeyBoardApi extends React.Component<{}, {}> {
    keyboardWillShowListener: unknown;
    keyboardDidShowListener: unknown;
    keyboardWillHideListener: unknown;
    keyboardDidHideListener: unknown;
    keyboardWillChangeFrameListener: unknown;
    keyboardDidChangeFrameListener: unknown;


    readonly state = {
        keyboardState: ''
    };

    logEvent = (event: string) => this.setState(() => ({
        keyboardState: event
    }));

    componentDidMount():void {
        this.keyboardWillShowListener =
            Keyboard.addListener('keyboardWillShow',
                () => this.logEvent('keyboardWillShow'))
        this.keyboardDidShowListener =
            Keyboard.addListener('keyboardDidShow',
                () => this.logEvent('keyboardDidShow'))
        this.keyboardWillHideListener =
            Keyboard.addListener('keyboardWillHide',
                () => this.logEvent('keyboardWillHide'))
        this.keyboardDidHideListener =
            Keyboard.addListener('keyboardDidHide',
                () => this.logEvent('keyboardDidHide'))
        this.keyboardWillChangeFrameListener =
            Keyboard.addListener('keyboardWillChangeFrame',
                () => this.logEvent('keyboardWillChangeFrame'))
        this.keyboardDidChangeFrameListener =
            Keyboard.addListener('keyboardDidChangeFrame',
                () => this.logEvent('keyboardDidChangeFrame'))

    }

    dismissKeyBoard = ():void =>  Keyboard.dismiss();

    removeListeners = ():void => {
        Keyboard.removeAllListeners('keyboardWillShow')
        Keyboard.removeAllListeners('keyboardDidShow')
        Keyboard.removeAllListeners('keyboardWillHide')
        Keyboard.removeAllListeners('keyboardDidHide')
        Keyboard.removeAllListeners('keyboardWillChangeFrame')
        Keyboard.removeAllListeners('keyboardDidChangeFrame')
    }

    onChangeHandler = (textValue: unknown)=> console.log(textValue)
    public render() {

        const { keyboardState = "" } = this.state;
        return <View style={[styles.container]}>
            <TextInput style={[styles.input]} onChange={this.onChangeHandler} />
            <Text>{keyboardState}</Text>
           
        </View>
    }
}
