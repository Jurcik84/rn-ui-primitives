import React from "react";
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from '@react-navigation/drawer'

import Icon from 'react-native-vector-icons/FontAwesome';


import ContactsList from './App/screens/ContactsList';
import ContactDetails from "./App/screens/ContactDetails";
import ActionsList from './App/screens/ActionsList';
import ActionDetails from './App/screens/ActionDetails';
import Settings from './App/screens/Settings';


const ContactsStack = createStackNavigator();
const ActionsStack = createStackNavigator();
const AppTabs = createBottomTabNavigator();
const AppDrawer = createDrawerNavigator();


const ContactsStackScreen = () => (
    <ContactsStack.Navigator>
        <ContactsStack.Screen
            name="ContactsList"
            options={{
                headerTitle: "Contacts",
                headerStyle: {
                    backgroundColor: 'red'
                }
            }}
            component={ContactsList}
        ></ContactsStack.Screen>
        <ContactsStack.Screen
            name="ContactDetails"
            component={ContactDetails}
            options={({ route }) => {
                return {
                    headerTitle: `${route.params.contact.name.first} ${route.params.contact.name.last} `
                }
            }}
        ></ContactsStack.Screen>
    </ContactsStack.Navigator>
)

const ActionsStackScreen = () => (
    <ActionsStack.Navigator>
        <ActionsStack.Screen name="ActionsList" component={ActionsList} />
        <ActionsStack.Screen name="ActionDetails" component={ActionDetails} />
    </ActionsStack.Navigator>
);

const AppTabScreen = () => (
    <AppTabs.Navigator>
        <AppTabs.Screen
            name="Contacts"
            component={ContactsStackScreen}
            options={{
                tabBarIcon: (props) => (
                    <Icon
                        name="home"
                        backgroundColor="#3b5998"
                    >

                    </Icon>
                )
            }}
        ></AppTabs.Screen>
        <AppTabs.Screen name="Actions"
            component={ActionsStackScreen}
        ></AppTabs.Screen>
    </AppTabs.Navigator>
)

const AppDrawerScreen = () => (
    <AppDrawer.Navigator drawerPosition="left">
        <AppDrawer.Screen
            options={{ drawerLabel: 'Home' }}
            name="Tabs" component={AppTabScreen} />
        <AppDrawer.Screen
            options={{
                gestureEnabled: true,
            }}
            name="Settings" component={Settings} />
    </AppDrawer.Navigator>
);


export default () => (
    <NavigationContainer>
        <AppDrawerScreen />
    </NavigationContainer>
)

// export default ({ navigation }) => (
//     <SafeAreaView>
//       <Button title="Toggle Drawer" onPress={() => navigation.toggleDrawer()} />
//       <Button
//         title="To Actions"
//         onPress={() => {
//           navigation.navigate('Tabs', {
//             screen: 'Actions',
//             params: { userId: 123 },
//           });
//         }}
//       />
//     </SafeAreaView>
//   );