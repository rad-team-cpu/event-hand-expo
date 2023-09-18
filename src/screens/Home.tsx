import React from 'react';
import BottomNavBar from '@/components/BottomNavBar/BottomNavBar';
import TopAppBar from '@/components/TopAppBar/TopAppBar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Home = () => (
  <SafeAreaProvider>
    <TopAppBar />
    <BottomNavBar />
  </SafeAreaProvider>
);

export default Home;
