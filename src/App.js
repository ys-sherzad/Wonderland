import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
import Home from './home';


const App = () => {


  return (
    <SafeAreaView>
      <StatusBar barStyle={'dark-content'} />
      <Home />
    </SafeAreaView>
  );
};

export default App;
