import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ScreenPropsList } from './types';
import Dashboard from '@/screens/Dashboard';
import Welcome from '@/screens/Welcome';
import Login from '@/screens/Login';
import TopAppBar from '@/components/TopAppBar/TopAppBar';
import Checklist from '@/screens/Checklist';
import EventDetails from '@/screens/EventDetails';
import SupplierSelect from '@/screens/SupplierSelect';
import SupplierList from '@/screens/SupplierList/SupplierList';
import SupplierListAppBar from '@/components/SupplierListAppBar/SupplierListBar';
import EventType from '@/screens/EventType';

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
      <MainStack.Screen name="EventDetails" component={EventDetails} />
      <MainStack.Screen name="EventType" component={EventType} />
      <MainStack.Screen name="SupplierSelect" component={SupplierSelect} />
      <MainStack.Screen name="Checklist" component={Checklist} />
      <MainStack.Screen
        name="SupplierList"
        component={SupplierList}
        options={{ header: SupplierListAppBar }}
      />
    </MainStack.Navigator>
  </NavigationContainer>
);

export default Routes;
