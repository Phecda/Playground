import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Welcome from './Welcome';
import PlaceholderPage from './PlaceholderPage';

const Tab = createMaterialBottomTabNavigator();

export default function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => {
        return {
          tabBarIcon: ({ focused, color }) => {
            let iconName = 'home';
            if (route.name === 'Placeholder') {
              if (focused) {
                iconName = 'view-list';
              } else {
                iconName = 'view-list-outline';
              }
            } else if (route.name === 'Welcome') {
              if (focused) {
                iconName = 'home';
              } else {
                iconName = 'home-outline';
              }
            }
            return (
              <MaterialCommunityIcons name={iconName} color={color} size={26} />
            );
          },
        };
      }}>
      <Tab.Screen name="Welcome" component={Welcome} />
      <Tab.Screen name="Placeholder" component={PlaceholderPage} />
    </Tab.Navigator>
  );
}
