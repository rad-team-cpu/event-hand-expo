import React, { useState } from 'react';
import { Platform } from 'react-native';
import { Appbar } from 'react-native-paper';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { useAuth } from '@clerk/clerk-expo';
import ConfrimationDialog from '../ConfirmationDialog';
import Button from '@/components/Button';
import useTheme from '@/core/theme';
import Text from '@/components/Text';
import Loading from '../Loading';

const isAndroid = Platform.OS === 'android';

const TopAppBar = (props: NativeStackHeaderProps) => {
  const { isLoaded, signOut } = useAuth();
  const { sizes } = useTheme();
  const { navigation } = props;
  const [visible, setVisible] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const open = () => setVisible(!visible);

  const logOut = async () => {
    if (!isLoaded) {
      return;
    }

    setLoading(true);
    await signOut().catch(() => setLoading(false));
  };

  return (
    <Appbar.Header mode="center-aligned" style={{ backgroundColor: 'white' }}>
      <Appbar.Action icon="logout" onPress={open} color="#3D50DF" />
      <Appbar.Content
        title="EVENT HAND"
        titleStyle={{ fontWeight: 'bold' }}
        color="#3D50DF"
      />
      <ConfrimationDialog
        visible={visible}
        show={open}
        content={
          loading ? (
            <Loading />
          ) : (
            <Text size={sizes.sm}>Are you sure you wish to logout?</Text>
          )
        }
        dismissableBackButton
        buttons={
          <Button
            key={'btn-01'}
            primary
            outlined
            shadow={!isAndroid}
            paddingHorizontal={sizes.m}
            marginVertical={sizes.s}
            marginHorizontal={sizes.m}
            onPress={logOut}
          >
            <Text bold primary transform="uppercase">
              Logout
            </Text>
          </Button>
        }
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
