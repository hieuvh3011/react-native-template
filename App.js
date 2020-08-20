/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StatusBar,
} from 'react-native';
import {Provider} from 'react-redux'; 
import configureStore from './src/store/store';
import MainNavigation from './src/route/index';

const store = configureStore();


const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" backgroundColor={'transparent'} translucent={true} />
      <MainNavigation />
    </Provider>
  );
};

export default App;
