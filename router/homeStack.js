import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createAppContainer, StackRouter } from "react-navigation";
import React from 'react';
import {StyleSheet,Text,View} from 'react-native';

import Login from './Login.js';
import SignUp from './SignUp.js';

const Stack = createStackNavigator();
const  homeStack = () => {
    return (
           <Stack.Navigator>
               <Stack.Screen name="Login" component={Login} />
               <Stack.Screen name="SignUp" component={SignUp} />
           </Stack.Navigator>
          
    );
}
export default homeStack;
