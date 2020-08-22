import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HOME_SCREEN, ACCOUNT_SCREEN, NOTIFICATION_SCREEN, SETTINGS_SCREEN, BOTTOM_TAB_NAVIGATOR } from './RouteName';
import HomeScreen from '../components/home/HomeScreen';
import AccountScreen from '../components/account/AccountScreen';
import SettingScreen from "../components/settings/SettingScreen";
import BottomTabNavigator from "./BottomTabNavigator";

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => (
  <Drawer.Navigator initialRouteNames={NOTIFICATION_SCREEN}>
    <Drawer.Screen name={NOTIFICATION_SCREEN} component={Notification} />
    <Drawer.Screen name={SETTINGS_SCREEN} component={SettingScreen} />
  </Drawer.Navigator>
)

