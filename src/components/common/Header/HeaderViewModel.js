import React from 'react';
import {useNavigation} from '@react-navigation/native'; 
import { NOTIFICATION_SCREEN } from '../../../route/RouteName';

export default headerViewModel = () => {
  const navigation = useNavigation(); 

  const _goBack = () => navigation?.goBack();

  const _goToNotification = () => navigation?.navigate(NOTIFICATION_SCREEN)
  return { _goBack, _goToNotification }
}