import React from 'react';
import {
  View,
  Model,
  StyleSheet,
  Dimensions
} from 'react-native';
import strings from "../../localization";

const {width, height} = Dimensions.get("window");

export default function SettingScreen() {
  return (
    <View style={styles.container}>
      <Header title={strings.settings} back={true}/>
      <Text>{string.settings}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  }
})



