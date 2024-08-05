import * as React from 'react';
import { AppRegistry } from 'react-native';
import { PaperProvider, MD3DarkTheme, MD3LightTheme, configureFonts } from 'react-native-paper';
import Home from './home';

const darkBlueTheme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    primary: '#190348', // Azul escuro
    accent: '#320869',
    background: '#121212',
    surface: '#190348',
    text: '#ffffff',
    disabled: '#3e3e3e',
    placeholder: '#6e6e6e',
    backdrop: '#121212',
    notification: '#ff80ab',
  }
};

export default function Main() {
  return (
    <PaperProvider theme={darkBlueTheme}>
      <Home />
    </PaperProvider>
  );
}

AppRegistry.registerComponent('Main', () => Main);
