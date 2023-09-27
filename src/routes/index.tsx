import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ScreenPropsList } from './types';
import Dashboard from '@/screens/Dashboard';
import Welcome from '@/screens/Welcome';
import Login from '@/screens/Login';
import TopAppBar from '@/components/TopAppBar/TopAppBar';
import Checklist from '@/screens/Checklist';
import Questionnaire from '@/screens/Questionnaire';

const MainStack = createNativeStackNavigator<ScreenPropsList>();

const Routes = () => (
  <NavigationContainer>
    <MainStack.Navigator>
      <MainStack.Screen
        name="Welcome"
        component={Welcome}
        options={{ headerShown: false }}
      />
      <MainStack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <MainStack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{ header: TopAppBar }}
      />
      <MainStack.Screen name="Questionnaire" component={Questionnaire} />
      <MainStack.Screen name="Checklist" component={Checklist} />
    </MainStack.Navigator>
  </NavigationContainer>
);

export default Routes;
