import React from 'react';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { NOTIFICATION_SCREEN } from '../../../route/RouteName';

export default headerViewModel = (props) => {
  const navigation = useNavigation();

  const _goBack = () => navigation?.goBack();

  const _goToNotification = () => navigation?.navigate(NOTIFICATION_SCREEN)

  const _openDrawer = () => {
    console.log('open drawer navigator')
  }

  return {_goBack, _goToNotification, _openDrawer}
}
