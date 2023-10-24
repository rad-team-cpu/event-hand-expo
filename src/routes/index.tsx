import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ScreenPropsList } from './types';
import { SignedIn, SignedOut } from '@clerk/clerk-expo';
import Dashboard from '@/screens/Dashboard';
import Welcome from '@/screens/Welcome';
import Login from '@/screens/Login';
import TopAppBar from '@/components/TopAppBar/TopAppBar';
import SignUp from '@/screens/SignUp';
import SupplierSelect from '@/screens/SupplierSelect';
import SupplierList from '@/screens/SupplierList/SupplierList';
import SupplierListAppBar from '@/components/SupplierListAppBar/SupplierListBar';
import EventType from '@/screens/EventType';
import EventDateSelect from '@/screens/EventDateSelect';
import EventBudgetInput from '@/screens/EventBudgetInput';
import Profile from '@/screens/Profile';
import Verification from '@/screens/Verification';
import ClientProfile from '@/screens/ClientProfile';

const MainStack = createNativeStackNavigator<ScreenPropsList>();

const Routes = () => {
  return (
    <NavigationContainer>
      <SignedIn>
        <MainStack.Navigator>
          <MainStack.Screen
            name="Dashboard"
            component={Dashboard}
            options={{ header: TopAppBar }}
          />
          <MainStack.Screen
            name="ClientProfile"
            component={ClientProfile}
            options={{ headerShown: false }}
          />
          <MainStack.Screen 
            name="EventType" 
            component={EventType} 
            options={{ header: TopAppBar }}
          />
          <MainStack.Screen
            name="EventDateSelect"
            component={EventDateSelect}
            options={{ header: TopAppBar }}
          />
          <MainStack.Screen
            name="EventBudgetInput"
            component={EventBudgetInput}
            options={{ header: TopAppBar }}
          />
          <MainStack.Screen 
            name="SupplierSelect" 
            component={SupplierSelect} 
          />
          <MainStack.Screen
            name="SupplierList"
            component={SupplierList}
            options={{ header: TopAppBar }}
          />
          <MainStack.Screen
            name="Profile"
            component={Profile}
            options={{ headerShown: false }}
          />
        </MainStack.Navigator>
      </SignedIn>
      <SignedOut>
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
            name="SignUp"
            component={SignUp}
            options={{ headerShown: false }}
          />
          <MainStack.Screen
            name="Verification"
            component={Verification}
            options={{ headerShown: false }}
          />
        </MainStack.Navigator>
      </SignedOut>
    </NavigationContainer>
  );
};

export default Routes;
