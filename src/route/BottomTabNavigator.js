import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../components/home/HomeScreen';
import AccountScreen from '../components/account/AccountScreen';
import { createDrawer } from './DrawerNavigator';
import { DrawerActions } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { HOME_SCREEN, ACCOUNT_SCREEN } from './RouteName';
import strings from '../localization/Localization';
const Tabs = createBottomTabNavigator();

export default BottomTabNavigator = () => (
  <Tabs.Navigator>
    <Tabs.Screen
      component={HomeScreen}
      options={() => ({
        title: strings.home,
      })}
      name={HOME_SCREEN}
     />
    <Tabs.Screen
      component={AccountScreen}
      options={() => ({
        title: strings.account,
      })}
      name={ACCOUNT_SCREEN}
     />
  </Tabs.Navigator>
)
