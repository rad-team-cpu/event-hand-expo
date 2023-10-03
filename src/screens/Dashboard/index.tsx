import React from 'react';
// import BottomNavBar from '@/components/BottomNavBar/BottomNavBar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useTheme } from 'react-native-paper';
import { DashboardScreenProps } from '@/routes/types';
import { DashboardRoutes } from '@/routes';

const Dashboard = ({ navigation }: DashboardScreenProps) => {

  const theme = useTheme();
  return (
    <SafeAreaProvider style={{ backgroundColor: theme.colors.background }}>
      <DashboardRoutes />
    </SafeAreaProvider>
  );
};
export default Dashboard;
