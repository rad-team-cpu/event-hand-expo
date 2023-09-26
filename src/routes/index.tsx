import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Dashboard from '@/screens/Dashboard';
import Welcome from '@/screens/Welcome';
import Login from '@/screens/Login';
import { DashboardTabScreenPropsList, ScreenPropsList } from './types';
import TopAppBar from '@/components/TopAppBar/TopAppBar';
import Checklist from '@/screens/Checklist';
import EventList from '@/screens/EventList';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import Inbox from '@/screens/Inbox';
import Notifications from '@/screens/Notifications';

const Stack = createNativeStackNavigator<ScreenPropsList>();

const Tab = createMaterialBottomTabNavigator<DashboardTabScreenPropsList>();

const DashboardRoutes = () => (
  <Tab.Navigator
    shifting
    barStyle={{ backgroundColor: '#3D50DF' }}
    activeColor="black"
    inactiveColor="white"
  >
    <Tab.Screen
      name="EventList"
      component={EventList}
      options={{
        tabBarLabel: 'EVENTS',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons
            name="calendar-multiple-check"
            color={color}
            size={26}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Inbox"
      component={Inbox}
      options={{
        tabBarLabel: 'INBOX',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="inbox" size={24} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Notifications"
      component={Notifications}
      options={{
        tabBarLabel: 'NOTIFICATIONS',
        tabBarIcon: ({ color }) => (
          <MaterialIcons name="notifications" color={color} size={26} />
        ),
      }}
    />
  </Tab.Navigator>
);

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

export { Routes, DashboardRoutes };
