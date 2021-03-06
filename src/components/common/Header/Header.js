import React, { useMemo } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet, StatusBar,
} from 'react-native';
import PropTypes from 'prop-types';
import { scaleModerate, scaleVertical } from '../../../utils/Scale';
import  headerViewModel  from '../../common/Header/HeaderViewModel';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import texts from '../../../utils/TextStyles';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

const headerHeight = scaleVertical(50);

export function Header(props) {
  const { title, back, noRightIcon } = props;
  const { _goBack, _goToNotification, _openDrawer } = headerViewModel(props);

  const _renderLeft = () => {
    if (back) {
      return (
        <TouchableOpacity style={styles.iconArea} onPress={_goBack}>
          <Icon name={'arrow-left'} size={scaleModerate(25)} />
        </TouchableOpacity>
      )
    }
    return (
      <TouchableOpacity style={styles.iconArea} onPress={_openDrawer}>
        <Icon name={'menu'} size={scaleModerate(25)} />
      </TouchableOpacity>
    )
  };

  const _renderRight = () => {
    if (noRightIcon) {
      return (
        <View style={styles.iconArea} />
      )
    }
    return (
      <TouchableOpacity style={styles.iconArea} onPress={_goToNotification}>
        <Icon name={'email-outline'} size={scaleModerate(25)} />
      </TouchableOpacity>
    )
  };

  const _renderTitle = () => (
    <View style={styles.title}>
      <Text style={[texts.textField, { color: '#242424' }]}>{title || 'Header'}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {_renderLeft()}
      {_renderTitle()}
      {_renderRight()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: headerHeight + getStatusBarHeight(),
    paddingTop: getStatusBarHeight(),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: scaleModerate(10),
  },
  iconArea: {
    width: headerHeight,
    height: headerHeight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

Header.propTypes = {
  title: PropTypes.string,
  back: PropTypes.bool,
  noRightIcon: PropTypes.bool,
}