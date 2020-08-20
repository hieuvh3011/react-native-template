import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {textField} from '../../utils/TextStyles'; 


const {width, height} = Dimensions.get('window'); 


export default function SplashScreen(props) {
  return (
    <View style={[styles.center, styles.container]}>
      <Text style={textField}>SplashScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  center:{
    alignItems:'center',
    justifyContent:'center'
  },
  container: {
    width,
    height,
  }
}); 