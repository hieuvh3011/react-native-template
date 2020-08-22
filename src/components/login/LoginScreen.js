import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { textField } from '../../utils/TextStyles';


const {width, height} = Dimensions.get('window');


export default function LoginScreen(props) {
  return (
    <View style={[styles.center, styles.container]}>
      <Text style={textField}>LoginScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    width,
    height,
  }
});
