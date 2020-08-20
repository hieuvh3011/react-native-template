import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../components/home/HomeScreen';
import AccountScreen from '../components/account/AccountScreen';

const Tabs = createBottomTabNavigator();

export default BottomTabNavigator = () => (
  <Tabs.Navigator>
    <Tabs.Screen name="Home" component={HomeScreen} />
    <Tabs.Screen name="Account" component={AccountScreen} />
  </Tabs.Navigator>
)