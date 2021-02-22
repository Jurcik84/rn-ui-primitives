import React from 'react'
import {Text, View} from 'react-native'
export default ({route}) => {
   const {contact} = route.params;
    return <View>
        <Text>{contact.name.title}</Text>
    </View>
}
