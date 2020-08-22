import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {textField} from '../../utils/TextStyles';
import strings from "../../localization";
import { Header } from "../common/Header/Header";


const {width, height} = Dimensions.get('window');


export default function AccountScreen(props) {
  return (
    <View style={styles.container}>
      <Header title={strings.account}/>
      <Text style={textField}>AccountScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  center:{
    alignItems:'center',
    justifyContent:'center',
    alignItems:'center'
  },
  container: {
    width,
    height,
  }
});
