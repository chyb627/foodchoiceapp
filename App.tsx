import React from 'react';
import { StatusBar } from 'react-native';
import CategoriesScreen from './src/screens/CategoriesScreen';

export default function App() {
  return (
    <>
      <StatusBar barStyle={'default'} />
      <CategoriesScreen />
    </>
  );
}
