import React from 'react';
import 'react-native-gesture-handler';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';

import Navigator from './src/navigator/navigator';

// import {COLORS} from './src/libs/constants';
// import Home from './src/views/home/home.views';
// import Walkthrough from './src/screens/walkthrough/walkthrough.screens';

declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
    <>
      <StatusBar barStyle="default" />
      <SafeAreaView style={styles.container}>
        <Navigator />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});

export default App;
