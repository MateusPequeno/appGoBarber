import 'react-native-gesture-handler';
/* Some terminal commands
 adb kill-server
 adb devices
 yarn start
yarn run react-native run-android
yarn add eslint -D
yarn eslint --init
yarn add eslint-config-prettier eslint-plugin-prettier -D
yarn add eslint-import-resolver-typescript -D
yarn add styled-components
yarn add @react-navigation/native
yarn add react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
yarn add @react-navigation/stack
yarn react-native link
yarn add react-native-vector-icons
config icons, android/app/build.graddle e inserir o cód q está no final do arquivo
yarn add @unform/core @unform/mobile
*/
import React from 'react';
import { View, StatusBar } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './routes/index';

const app: React.FC = () => (
  <NavigationContainer>
  <StatusBar barStyle = "light-content" translucent />
  <View style={{ flex: 1, backgroundColor: '#312e38' }}>
  <Routes/>
  </View>
  </NavigationContainer>
);

export default app;
