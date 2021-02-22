import React from "react";
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ContactsList from './App/screens/ContactsList';
import ContactDetails from "./App/screens/ContactDetails";
import ActionsList from './App/screens/ActionsList';
import ActionDetails from './App/screens/ActionDetails';


const ContactsStack = createStackNavigator();
const ActionsStack = createStackNavigator();
const AppTabs = createBottomTabNavigator();


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
            options={({route})=> {
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

const AppTabScreen = ()=> (
    <AppTabs.Navigator>
         <AppTabs.Screen name="Contacts"
         component={ContactsStackScreen}
         ></AppTabs.Screen>
             <AppTabs.Screen name="Actions"
         component={ActionsStackScreen}
         ></AppTabs.Screen>
    </AppTabs.Navigator>
)

export default () => (

    <NavigationContainer>
        <AppTabScreen />
    </NavigationContainer>
)