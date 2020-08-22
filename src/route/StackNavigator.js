import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import SplashScreen from '../components/splash/SplashScreen';
import LoginScreen from '../components/login/LoginScreen';
import { SPLASH_SCREEN, LOGIN_SCREEN, BOTTOM_TAB_NAVIGATOR, DRAWER_NAVIGATOR, NOTIFICATION_SCREEN } from './RouteName';
import BottomTabNavigator from './BottomTabNavigator';
import { createDrawer, DrawerNavigator } from './DrawerNavigator';
import Notification from '../components/notification/Notification';

const Stack = createStackNavigator();

export const StackNavigator = () => (
  <Stack.Navigator headerMode={"none"}>
    <Stack.Screen name={SPLASH_SCREEN} component={SplashScreen} />
    <Stack.Screen name={LOGIN_SCREEN} component={LoginScreen} />
    <Stack.Screen name={BOTTOM_TAB_NAVIGATOR} component={BottomTabNavigator} />
    <Stack.Screen name={NOTIFICATION_SCREEN} component={Notification} />
  </Stack.Navigator>
);
