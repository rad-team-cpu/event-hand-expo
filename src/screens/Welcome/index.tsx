import React, { memo } from 'react';
import Background from '../../components/Background';
import Logo from '../../components/Logo';
import Header from '../../components/Header';
import Button from '../../components/Button';
import Paragraph from '@/components/Paragraph';
import Text from '@/components/Text';
import { WelcomeScreenProps } from '@/routes/types';
import useTheme from '@/core/theme';
import Image from '@/components/Image';
import Block from '@/components/Block';
import { View } from 'react-native';

const Welcome = ({ navigation }: WelcomeScreenProps) => {
  const {assets, colors, gradients, sizes} = useTheme();
  return (
    <Image
    background
    source={assets.background}
    padding={sizes.padding}
    style={{flex: 1}}>
    <Block safe justify="center">
      <Block card flex={0} padding={sizes.sm} marginBottom={sizes.sm}>
        <View style={{ alignItems: 'center' }}>
          <Logo />
          <Text h4 center bold marginBottom={sizes.sm}>
            EventHand
          </Text>
          <Text center>
            Welcome to EventHand!
          </Text>
          <Text center marginBottom={sizes.sm}>
            Supplying you with special moments.
          </Text>
        </View>
        <Button
          gradient={gradients.primary}
          onPress={() => navigation.navigate('Login')}
        >
        <Text white bold transform="uppercase">
          Login
        </Text>
        </Button>
      </Block>
    </Block>
  </Image>
);
  //   <Background>
  //     <Logo />
  //     <Header>EventHand</Header>
  //     <Paragraph>
  //       Welcome to EventHand! Supplying you with special moments.
  //     </Paragraph>
  //     <Button onPress={() => navigation.navigate('Login')}>
  //       <Text black bold transform="uppercase">
  //         Login
  //       </Text>
  //     </Button>
  //   </Background>
  // );
};

export default memo(Welcome);
