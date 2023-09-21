import React from 'react';
import BottomNavBar from '@/components/BottomNavBar/BottomNavBar';
import TopAppBar from '@/components/TopAppBar/TopAppBar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Checklist from '@/components/Checklist/Checklist';
import { useTheme } from 'react-native-paper';



const Home = () => {
  const theme = useTheme();
  return (
    <SafeAreaProvider style={{ backgroundColor: theme.colors.background }}>
      <TopAppBar />
        <Checklist />
      <BottomNavBar />
    </SafeAreaProvider>
  );

}
export default Home;
