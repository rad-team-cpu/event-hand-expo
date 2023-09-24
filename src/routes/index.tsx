import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dashboard from '@/screens/Dashboard';
import Welcome from '@/screens/Welcome';
import Login from '@/screens/Login';
import { ScreenPropsList } from './types';
import TopAppBar from '@/components/TopAppBar/TopAppBar';
import Checklist from '@/screens/Checklist';

const Stack = createNativeStackNavigator<ScreenPropsList>();

const Routes = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{ header: TopAppBar }}
      />
      <Stack.Screen name="Checklist" component={Checklist} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Routes;
