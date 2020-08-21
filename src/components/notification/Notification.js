import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions
} from 'react-native';
import { Header } from '../common/Header/Header';
import strings from '../../localization/Localization';
import texts from '../../utils/TextStyles';

const { width, height } = Dimensions.get('window');

export default Notification = () => {
  return (
    <View style={styles.container}>
      <Header title={strings.notification} back={true} noRightIcon={true}/>
      <Text style={texts.textField}>
        {strings.notification}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width,
    height,
    alignItems: 'center'
  }
});