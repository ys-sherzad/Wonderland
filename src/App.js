import React, {useState, useEffect} from 'react';
import {
  View,
  SafeAreaView,
  StatusBar,
  ActivityIndicator
} from 'react-native';
import Home from './home';


const App = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }, [])

  return (
    <SafeAreaView style={{flex:1}}>
      <StatusBar barStyle={'dark-content'} />
      {isLoading && (
        <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator size={'small'} color="#000" />
        </View>
      )}
      {!isLoading && (<Home />)}
    </SafeAreaView>
  );
};

export default App;
