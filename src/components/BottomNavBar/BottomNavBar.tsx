import * as React from 'react';
import { BottomNavigation, Text, FAB } from 'react-native-paper';

const MusicRoute = () => (
  <FAB
    icon="plus"
    color="white"
    style={{
      backgroundColor: '#4A43EC',
      position: 'absolute',
      margin: 16,
      right: 0,
      bottom: 0,
    }}
    onPress={() => console.log('Pressed')}
  />
);

const AlbumsRoute = () => <Text>Chat</Text>;

const RecentsRoute = () => <Text>Favorites</Text>;

const NotificationsRoute = () => <Text>Notifications</Text>;

const BottomNavBar = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {
      key: 'music',
      title: 'Events',
      focusedIcon: 'calendar-check',
      unfocusedIcon: 'calendar-check',
    },
    { key: 'albums', title: 'Chat', focusedIcon: 'chat' },
    { key: 'recents', title: 'Favorites', focusedIcon: 'heart' },
    {
      key: 'notifications',
      title: 'Notifications',
      focusedIcon: 'bell',
      unfocusedIcon: 'bell-outline',
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    music: MusicRoute,
    albums: AlbumsRoute,
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
      barStyle={{ backgroundColor: '#4A43EC' }}
    />
  );
};

export default BottomNavBar;
