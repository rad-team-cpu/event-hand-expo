import React from 'react';
import { Appbar } from 'react-native-paper';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { useAuth } from '@clerk/clerk-expo';

const TopAppBar = (props: NativeStackHeaderProps) => {
  const { signOut } = useAuth();
  const { navigation } = props;

  return (
    <Appbar.Header mode="center-aligned" style={{ backgroundColor: 'white' }}>
      <Appbar.Action icon="logout" onPress={signOut} color="#3D50DF" />
      <Appbar.Content
        title="EVENT HAND"
        titleStyle={{ fontWeight: 'bold' }}
        color="#3D50DF"
      />
      <Appbar.Action
        icon="account"
        onPress={() => navigation.navigate('Profile')}
        color="#3D50DF"
      />
    </Appbar.Header>
  );
};

export default TopAppBar;
