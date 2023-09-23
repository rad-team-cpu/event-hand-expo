import React, { memo } from 'react';
import Background from '../../components/Background';
import Logo from '../../components/Logo';
import Header from '../../components/Header';

import Button from '../../components/Button';
import { Navigation } from '../../types';
import Paragraph from '@/components/Paragraph';

type Props = {
  navigation: Navigation;
};

const Welcome = ({ navigation }: Props) => (
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

export default memo(Welcome);
