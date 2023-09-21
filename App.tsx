import Home from '@/screens/Home';
import React from 'react';
import { View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { useTheme } from 'react-native-paper';

export default function App() {
  const theme = useTheme();
  return (
    <PaperProvider>
      <Home />
    </PaperProvider>
  );
}
