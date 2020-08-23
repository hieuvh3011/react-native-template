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
      <View style={styles.content}>
        <Text style={textField}>{strings.account}</Text>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  center:{
    alignItems:'center',
    justifyContent:'center',
  },
  container: {
    width,
    height,
  },
  content:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  }
});
