import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {textField} from '../../utils/TextStyles'; 
import { Header } from '../common/Header/Header';


const {width, height} = Dimensions.get('window'); 


export default function HomeScreen(props) {
  return (
    <View style={[styles.container]}>
      <Header title={"ok men"}/>
      <Text style={textField}>HomeScreen</Text>
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