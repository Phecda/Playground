import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeTabs from './HomeTabs';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import { useColorScheme } from 'react-native';
import { navigationTheme, paperTheme } from './configThemes';

const Stack = createNativeStackNavigator();

export default function BaseStack() {
  const colorScheme = useColorScheme() ?? 'light';
  return (
    <PaperProvider theme={paperTheme[colorScheme]}>
      <NavigationContainer theme={navigationTheme[colorScheme]}>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeTabs}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
