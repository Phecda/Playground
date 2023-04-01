import {
  DefaultTheme,
  DarkTheme as DefaultDarkTheme,
} from '@react-navigation/native';
import {
  MD3LightTheme,
  MD3DarkTheme,
  adaptNavigationTheme,
} from 'react-native-paper';

export const paperTheme = {
  light: MD3LightTheme,
  dark: MD3DarkTheme,
};

const adapted = adaptNavigationTheme({
  reactNavigationLight: DefaultTheme,
  reactNavigationDark: DefaultDarkTheme,
  materialLight: MD3LightTheme,
  materialDark: MD3DarkTheme,
});

export const navigationTheme = {
  light: adapted.LightTheme,
  dark: adapted.DarkTheme,
};
