import React from 'react';
import { View, Text } from 'react-native';
import { StateProvider } from './src/contexts/StateContext';

export default () => {
  return(
    <StateProvider>
      <View>
        <Text>Opa, Funcionando...</Text>   
      </View>
    </StateProvider>
    
  );
}