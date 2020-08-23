/**
 * This is a file use to write your own navigation without navigation props.
 * You could see the details here: 
 * https://reactnavigation.org/docs/navigating-without-navigation-prop
 */

import {navigationRef} from '@react-navigation/native'; 

export function navigate(name, params) {
  navigationRef?.current?.navigate(name, params);
}

export function resetNavigation(screenName, params, index = 0) {
  navigationRef?.current?.dispatch(
    CommonActions.reset({
      index: index,
      routes: [{ name: screenName, params }],
    }),
  );
}

export function goBack() {
  navigationRef?.current?.goBack();
}