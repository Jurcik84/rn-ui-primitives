import React from 'react';
import { Button, SafeAreaView } from 'react-native'

export default ({ navigation }) => <SafeAreaView>
    <Button title="Toggle" onPress={() => navigation.toggleDrawer()} />
    <Button title="To Actions" onPress={() => navigation.navigate("Tabs", {
        screen: 'ActionsList',
        params: {
            userId: 123
        }
    })} />
</SafeAreaView>;
