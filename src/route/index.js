import React from 'react';
import { NavigationContainer, navigationRef } from '@react-navigation/native'
import { StackNavigator } from './StackNavigator';
import {DarkTheme, LightTheme} from '../utils/Themes'; 

export default MainNavigator = (props) => (
  <NavigationContainer ref={navigationRef} theme={props.theme}>
    <StackNavigator />
  </NavigationContainer>
);


