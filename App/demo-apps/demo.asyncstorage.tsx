import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { TouchableHighlight } from 'react-native-gesture-handler';

const style = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flex: 1,
        marginHorizontal: 20
    },

})


// DATA
const person = {
    name: "Juraj Hynek",
    age: 50,
    accupation: "React Native Developer"
};

const key = "@dev";

type personAttrType = {
    name?: string,
    age?: number,
    accupation?: string
}

type PersonType = {
    person?: personAttrType
}

export default class RNAppAsyncStorage extends React.Component<{}, PersonType>{

    state: PersonType = {
        person: {}
    };

    componentDidMount() {
        AsyncStorage.setItem(key, JSON.stringify(person))
            .then(() => console.log('item stored'))
            .catch((err) => console.log(err.message))
    }

    async getPerson() {

        try {

            const data = await AsyncStorage.getItem(key);
            const person = await data;
            this.setState({
                person: JSON.parse(person)
            });
        }
        catch (err) {
            console.log(err.message)
        }
    }

    public render() {
        const { person = {} } = this.state;
        const { name,
            age,
            accupation } = person;

        console.log('data when rendering', this.state)

        return <View style={[style.container]}>
            <Text style={{
                fontSize: 22,
                marginBottom: 20
            }}></Text>
            <TouchableHighlight onPress={this.getPerson}>
                <Text>Get data from storage</Text>
            </TouchableHighlight>
            <Text>{name}</Text>
            <Text>{age}</Text>
            <Text>{accupation}</Text>
        </View>
    }
}
