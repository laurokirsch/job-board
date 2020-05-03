import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

const Routes = () => (
  <NavigationContainer>
    <AppStack.Navigator>
      <AppStack.Screen />
      <AppStack.Screen />
    </AppStack.Navigator>
  </NavigationContainer>
);

export default Routes;
