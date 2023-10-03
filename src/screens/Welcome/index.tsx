import React, { memo } from 'react';
import Background from '../../components/Background';
import Logo from '../../components/Logo';
import Header from '../../components/Header';
import Button from '../../components/Button';
import Paragraph from '@/components/Paragraph';
import { WelcomeScreenProps } from '@/routes/types';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { theme } from '../../core/theme';
import { SafeAreaProvider } from 'react-native-safe-area-context';


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
      
      <View style={styles.row}>
         <Text style={styles.label}>Don’t have an account? </Text>
         <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
           <Text style={styles.link}>Sign up</Text>
         </TouchableOpacity>
       </View>
    </Background>
  );
};

export default memo(Welcome);

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  button: {
    marginTop: 10,
    
  },
  label: {
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
});