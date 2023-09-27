import React from 'react';
// import BottomNavBar from '@/components/BottomNavBar/BottomNavBar';
import { FAB } from 'react-native-paper';
import {
  DashboardScreenNavigationProp,
  EventListScreenProps,
} from '@/routes/types';
import { useNavigation } from '@react-navigation/native';

const EventList = (props: EventListScreenProps) => {
  const navigation = useNavigation<DashboardScreenNavigationProp>();

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
      onPress={() => navigation.navigate('Questionnaire')}
    />
  );
};
export default EventList;
