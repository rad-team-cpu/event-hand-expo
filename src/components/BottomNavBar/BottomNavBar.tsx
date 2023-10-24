import * as React from 'react';
import { BottomNavigation, Text, FAB } from 'react-native-paper';

const EventsRoute = () => (
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
    onPress={() => console.log('Pressed')}
  />
);

const ChatsRoute = () => <Text>Chat</Text>;

const RecentsRoute = () => <Text>Favorites</Text>;

const NotificationsRoute = () => <Text>Notifications</Text>;

const BottomNavBar = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {
      key: 'events',
      title: 'Events',
      focusedIcon: 'calendar-check',
      unfocusedIcon: 'calendar-check',
    },
    { key: 'chat', title: 'Chat', focusedIcon: 'chat' },
    { key: 'recents', title: 'Favorites', focusedIcon: 'heart' },
    {
      key: 'notifications',
      title: 'Notifications',
      focusedIcon: 'bell',
      unfocusedIcon: 'bell-outline',
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    events: EventsRoute,
    chat: ChatsRoute,
    recents: RecentsRoute,
    notifications: NotificationsRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      activeColor="black"
      inactiveColor="white"
      barStyle={{ backgroundColor: '#3D50DF' }}
    />
  );
};

export default BottomNavBar;
