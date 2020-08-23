/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StatusBar, useColorScheme,
} from 'react-native';
import {Provider} from 'react-redux'; 
import configureStore from './src/store/store';
import MainNavigation from './src/route/index';
import { ColorScheme, DarkTheme, LightTheme } from './src/utils/Themes';
const store = configureStore();


const App: () => React$Node = () => {

  const scheme = useColorScheme(); 

  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" backgroundColor={'transparent'} translucent={true} />
      <MainNavigation theme={scheme === ColorScheme.DARK ? DarkTheme : LightTheme} />
    </Provider>
  );
};

export default App;
