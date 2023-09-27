import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { DashboardTabScreenPropsList } from './types';
import EventList from '@/screens/EventList';
import Inbox from '@/screens/Inbox';
import Notifications from '@/screens/Notifications';

const Tab = createMaterialBottomTabNavigator<DashboardTabScreenPropsList>();

const DashboardNavBarRoutes = () => (
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

export default DashboardNavBarRoutes;
