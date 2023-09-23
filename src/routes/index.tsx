import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dashboard from '@/screens/Dashboard';
import Welcome from '@/screens/Welcome';
import Login from '@/screens/Login';
import { ScreenPropsList } from './types';

const Stack = createNativeStackNavigator<ScreenPropsList>();

const Routes = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Routes;
