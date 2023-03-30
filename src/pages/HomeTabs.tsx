import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Welcome from './Welcome';
import PlaceholderPage from './PlaceholderPage';

const Tab = createBottomTabNavigator();

export default function HomeTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Welcome" component={Welcome} />
      <Tab.Screen name="Placeholder" component={PlaceholderPage} />
    </Tab.Navigator>
  );
}
