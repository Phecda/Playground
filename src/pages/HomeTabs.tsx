import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Welcome from './Welcome';
import PlaceholderPage from './PlaceholderPage';

const Tab = createBottomTabNavigator();

export default function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => {
        return {
          tabBarIcon: ({ focused, color, size }) => {
            let iconName = 'home';
            if (route.name === 'Placeholder') {
              iconName = 'list';
            } else if (route.name === 'Welcome') {
              if (focused) {
                iconName = 'home';
              } else {
                iconName = 'home-outline';
              }
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        };
      }}>
      <Tab.Screen name="Welcome" component={Welcome} />
      <Tab.Screen name="Placeholder" component={PlaceholderPage} />
    </Tab.Navigator>
  );
}
