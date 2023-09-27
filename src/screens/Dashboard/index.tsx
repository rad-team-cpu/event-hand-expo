import React from 'react';
// import BottomNavBar from '@/components/BottomNavBar/BottomNavBar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useTheme } from 'react-native-paper';
import { DashboardScreenProps } from '@/routes/types';
import DashboardNavBarRoutes from '@/routes/DashboardNavBar';

const Dashboard = (props: DashboardScreenProps) => {
  const { navigation } = props;
  const theme = useTheme();
  return (
    <SafeAreaProvider style={{ backgroundColor: theme.colors.background }}>
      <DashboardNavBarRoutes />
    </SafeAreaProvider>
  );
};
export default Dashboard;
