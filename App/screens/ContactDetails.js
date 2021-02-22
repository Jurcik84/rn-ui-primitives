import React from 'react'
import {Text, View} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';


export default ({route}) => {
   const {contact} = route.params;
    return <View>
        <Text>{contact.name.title}</Text>
        <View style={{marginTop: 16, marginBottom: 16}}>
            <Icon.Button
              name="facebook"
              backgroundColor="#3b5998"
              onPress={() => alert('Login with Facebook')}>
              Login with Facebook
            </Icon.Button>
          </View>
    </View>
}
