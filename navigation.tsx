import React, { useState } from "react";

import { Provider } from 'react-redux';
import store from './App/store'

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
import Loading from "./App/screens/Loading";
import SignIn from './App/screens/SignIn';
import SignUp from './App/screens/SignUp';
import Modal from './App/screens/Modal';




const ContactsStack = createStackNavigator();
const ActionsStack = createStackNavigator();
const AppTabs = createBottomTabNavigator();
const AppDrawer = createDrawerNavigator();
const RootStack = createStackNavigator();


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

const AuthStack = createStackNavigator();
const AuthStackScreen = () => (
    <AuthStack.Navigator>
        <AuthStack.Screen name="SignIn" component={SignIn} />
        <AuthStack.Screen name="SignUp" component={SignUp} />
    </AuthStack.Navigator>
);


const RootStackScreen = () => {
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    const [user, setUser] = React.useState<null | {}>({});

    // React.useEffect(() => {
    //     setTimeout(() => {
    //         setIsLoading(!isLoading);
    //         setUser({});
    //     }, 500);
    // }, []);


    return <RootStack.Navigator
        headerMode="none"
        screenOptions={{ animationEnabled: false }}
        mode="modal"
    >
        {isLoading ? (
            <RootStack.Screen name="Loading" component={Loading} />
        ) : user ? (
            <RootStack.Screen name="AppDrawerScreen" component={AppDrawerScreen} />
        ) : (
                    <RootStack.Screen name="AuthStackScreen" component={AuthStackScreen} />
                )}
        <RootStack.Screen
            name="Modal"
            component={Modal}
            options={{ animationEnabled: true, }}
        />
    </RootStack.Navigator>
}

export default () => {
    return (
        <Provider store={store}>
        <NavigationContainer>
            <RootStackScreen />
        </NavigationContainer>
        </Provider>
    );
};

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

// export default ({ navigation }) => (
//     <>
//       <Button title="Sign In" onPress={() => alert('todo!')} />
//       <Button title="Sign Up" onPress={() => navigation.push('SignUp')} />
//     </>
//   );