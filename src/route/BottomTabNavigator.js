import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../components/home/HomeScreen';
import AccountScreen from '../components/account/AccountScreen';

const Tabs = createBottomTabNavigator();

export default BottomTabNavigator = () => (
  <Tabs.Navigator>
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Account" component={AccountScreen} />
  </Tabs.Navigator>
)