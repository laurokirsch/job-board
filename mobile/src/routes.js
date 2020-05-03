import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Jobs from './pages/Jobs';
import Single from './pages/Single';

const AppStack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name='Jobs' component={Jobs} />
        <AppStack.Screen name='Single' component={Single} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
