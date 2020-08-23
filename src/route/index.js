import React from 'react';
import { NavigationContainer, navigationRef } from '@react-navigation/native'
import { StackNavigator } from './StackNavigator';

export default MainNavigator = () => (
  <NavigationContainer ref={navigationRef}>
    <StackNavigator />
  </NavigationContainer>
);


