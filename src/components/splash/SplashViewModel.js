import React, { useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage'
import { useNavigation } from '@react-navigation/native'
import { BOTTOM_TAB_NAVIGATOR, LOGIN_SCREEN } from '../../route/RouteName';
export default splashViewModel = () => {
  const navigation = useNavigation();
  const _hasAccessToken = async () => {
    const token = await AsyncStorage.getItem("access_token") || null;
    return token === null;
  }

  const _goToNextPage = async () => {
    const hasToken = await _hasAccessToken();
    if (hasToken) {
      navigation?.navigate(BOTTOM_TAB_NAVIGATOR);
    } else {
      navigation?.navigate(LOGIN_SCREEN);
    }
  }

  return { _goToNextPage }
}