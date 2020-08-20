import React from 'react';
import { NavigationContainer, navigationRef } from '@react-navigation/native'
import { StackNavigator } from './StackNavigator';

export default MainNavigator = () => (
  <NavigationContainer ref={navigationRef} >
    <StackNavigator />
  </NavigationContainer>
);

export function navigate(name, params) {
  navigationRef.current?.navigate(name, params);
}

export function resetNavigation(screenName, params, index = 0) {
  navigationRef.current?.dispatch(
    CommonActions.reset({
      index: index,
      routes: [{ name: screenName, params }],
    }),
  );
}

export function goBack() {
  navigationRef.current?.goBack();
}
