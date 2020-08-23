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