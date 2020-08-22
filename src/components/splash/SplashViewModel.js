import React, { useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';
import { BOTTOM_TAB_NAVIGATOR, LOGIN_SCREEN } from '../../route/RouteName';
import { CommonActions } from '@react-navigation/native';

export default splashViewModel = () => {
  const navigation = useNavigation();
  const _hasAccessToken = async () => {
    const token = await AsyncStorage.getItem('access_token') || null;
    return token === null;
  };

  const _goToNextPage = async () => {
    const hasToken = await _hasAccessToken();
    if (hasToken) {
      _resetNavigation(BOTTOM_TAB_NAVIGATOR)
    } else {
      _resetNavigation(LOGIN_SCREEN);
    }
  };

  const _resetNavigation = (routeName, index = 0) => {
    navigation?.dispatch(
      CommonActions?.reset({
        index,
        routes: [{name: routeName}],
      }),
    );
  };
  return {_goToNextPage};
};
