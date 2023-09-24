import React from 'react';
// import BottomNavBar from '@/components/BottomNavBar/BottomNavBar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useTheme, FAB } from 'react-native-paper';
import { DashboardScreenProps } from '@/routes/types';

const Dashboard = (props: DashboardScreenProps) => {
  const { navigation } = props;
  const theme = useTheme();
  return (
    <SafeAreaProvider style={{ backgroundColor: theme.colors.background }}>
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
        onPress={() => navigation.navigate('Checklist')}
      />
      {/* <BottomNavBar /> */}
    </SafeAreaProvider>
  );
};
export default Dashboard;
