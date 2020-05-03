import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Jobs from './pages/Jobs';
import Single from './pages/Single';

const AppStack = createStackNavigator();

const Routes = () => (
  <NavigationContainer>
    <AppStack.Navigator>
      <AppStack.Screen name='Jobs' component={Jobs} />
      <AppStack.Screen name='Single' component={Single} />
    </AppStack.Navigator>
  </NavigationContainer>
);

export default Routes;
