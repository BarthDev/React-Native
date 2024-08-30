import React from 'react';
import { NativeBaseProvider } from 'native-base';
import Rotas from '@/src/Rotas';
import { StatusBar } from 'react-native';


export default function App() {
  return (
    <NativeBaseProvider>
       <StatusBar barStyle="dark-content" />
      <Rotas />
    </NativeBaseProvider>
  );
}