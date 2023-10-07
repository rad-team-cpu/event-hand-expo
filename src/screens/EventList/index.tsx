import React from 'react';
// import BottomNavBar from '@/components/BottomNavBar/BottomNavBar';
import { FAB } from 'react-native-paper';
import {
  DashboardScreenNavigationProp,
  EventListScreenProps,
} from '@/routes/types';
import { useNavigation } from '@react-navigation/native';
import EventCards from '@/components/Card/EventCard';


// const EventList = (props: EventListScreenProps) => {
//   const navigation = useNavigation<DashboardScreenNavigationProp>();

//   return (
//     <FAB
//       icon="plus"
//       color="white"
//       style={{
//         backgroundColor: '#3D50DF',
//         position: 'absolute',
//         margin: 16,
//         right: 0,
//         bottom: 0,
//       }}
//       onPress={() => navigation.navigate('EventType')}
//     />
//   );
// };
// export default EventList;

import { faker } from '@faker-js/faker';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ScrollView, View } from 'react-native';
import Block from '@/components/Block';
import Input from '@/components/Input';
import useTheme from '@/core/theme';

enum Event { Wedding, Birthday, Baptismal }


const data = [
  {
    key: '1',
    name: faker.company.name(),
    eventType: faker.helpers.enumValue(Event), 
  },
  {
    key: '2',
    name: faker.company.name(),
    eventType: faker.helpers.enumValue(Event), 

  },
  {
    key: '3',
    name: faker.company.name(),
    eventType: faker.helpers.enumValue(Event), 
  },
 
];

const EventList = () => {
  const {colors, sizes} = useTheme();
  const navigation = useNavigation<DashboardScreenNavigationProp>();

  return (
    
    <GestureHandlerRootView style={{ flex: 1 }}>
  <View style={{ flex: 1 }}>
    <ScrollView>
      <Block color={colors.card} flex={0} padding={sizes.padding}>
        <Input search placeholder='Search' />
      </Block>
      {EventCards(data)}
    </ScrollView>
  </View>
  
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
    onPress={() => navigation.navigate('EventType')}
  />
</GestureHandlerRootView>

  );
};

export default EventList;
