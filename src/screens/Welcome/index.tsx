import React, { memo } from 'react';
import Background from '../../components/Background';
import Logo from '../../components/Logo';
import Header from '../../components/Header';
import Button from '../../components/Button';
import Paragraph from '@/components/Paragraph';
import { WelcomeScreenProps } from '@/routes/types';

const Welcome = ({ navigation }: WelcomeScreenProps) => {
  return (
    <Background>
      <Logo />
      <Header>EventHand</Header>
      <Paragraph>
        Welcome to EventHand! Supplying you with special moments.
      </Paragraph>
      <Button mode="outlined" onPress={() => navigation.navigate('Login')}>
        Login
      </Button>
    </Background>
  );
};

export default memo(Welcome);
