import React from 'react';
// import BottomNavBar from '@/components/BottomNavBar/BottomNavBar';
import { FAB } from 'react-native-paper';
import { EventListScreenProps } from '@/routes/types';

const EventList = (props: EventListScreenProps) => {
  const { navigation } = props;
  return (
    <FAB
      icon="plus"
      color="white"
      style={{
        backgroundColor: '#3D50DF',
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
      }}
      // onPress={() => navigation.navigate('Dashboard', { screen: 'Checklist' })}
    />
  );
};
export default EventList;
