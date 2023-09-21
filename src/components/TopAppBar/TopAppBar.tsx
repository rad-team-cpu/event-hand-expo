import React from 'react';
import { Appbar } from 'react-native-paper';

const TopAppBar = () => (
  <Appbar.Header mode="center-aligned" style={{ backgroundColor: '#3D50DF' }}>
    <Appbar.Action icon="cog" onPress={() => {}} color="white" />
    <Appbar.Content
      title="EVENT HAND"
      titleStyle={{ fontWeight: 'bold' }}
      color="white"
    />
    <Appbar.Action icon="account" onPress={() => {}} color="white" />
  </Appbar.Header>
);

export default TopAppBar;
