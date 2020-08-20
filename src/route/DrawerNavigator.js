import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HOME_SCREEN, ACCOUNT_SCREEN } from './RouteName';
import HomeScreen from '../components/home/HomeScreen';
import AccountScreen from '../components/account/AccountScreen';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => (
  <Drawer.Navigator initialRouteName={HOME_SCREEN}>
    <Drawer.Screen name={HOME_SCREEN} component={HomeScreen} />
    <Drawer.Screen name={ACCOUNT_SCREEN} component={AccountScreen} />
  </Drawer.Navigator>
)

