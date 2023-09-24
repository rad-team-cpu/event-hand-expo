import React from 'react';
// import BottomNavBar from '@/components/BottomNavBar/BottomNavBar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useTheme } from 'react-native-paper';

const Dashboard = () => {
  const theme = useTheme();
  return (
    <SafeAreaProvider style={{ backgroundColor: theme.colors.background }}>
      {/* <BottomNavBar /> */}
    </SafeAreaProvider>
  );
};
export default Dashboard;
