import React, { useState } from 'react';
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import { useSignUp } from '@clerk/clerk-expo';
import Background from '@/components/Background';
import BackButton from '@/components/BackButton';
import Logo from '@/components/Logo';
import { SignUpScreenProps } from '@/routes/types';
import Header from '@/components/Header';
import Button from '@/components/Button';
// import { theme } from '../../core/theme';
import TextInput from '../../components/TextInput';
import { getErrorMessage } from '@/core/utils';


export default function SignUp({ navigation }: SignUpScreenProps) {
  const { isLoaded, signUp, setActive } = useSignUp();
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [pendingVerification, setPendingVerification] = useState(false);
  const [code, setCode] = useState('');

  // start the sign up process.
  const onSignUpPress = async () => {
    if (!isLoaded) {
      return;
    }

    try {
      await signUp.create({
        emailAddress,
        password,
        firstName,
        lastName,
      });

      // send the email.
      await signUp.prepareEmailAddressVerification({ strategy: 'email_code' });

      // change the UI to our pending section.
      setPendingVerification(true);
    } catch (err) {
      console.error(JSON.stringify(getErrorMessage(err), null, 2));
    }
  };

  // This verifies the user using email code that is delivered.
  const onPressVerify = async () => {
    if (!isLoaded) {
      return;
    }

    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code,
      });

      await setActive({ session: completeSignUp.createdSessionId });
      navigation.navigate('Dashboard');
    } catch (err) {
      console.error(JSON.stringify(getErrorMessage(err), null, 2));
    }
  };

  return (
    <Background>
      <BackButton goBack={() => navigation.goBack()} />

      <Logo />

      <Header>Create Account</Header>
      <View>
        {!pendingVerification && (
          <View>
            <View>
              <TextInput
                label="Email"
                autoCapitalize="none"
                value={emailAddress}
                placeholder="Email"
                returnKeyType="next"
                onChangeText={(emailAddress) => setEmailAddress(emailAddress)}
                textContentType="emailAddress"
                keyboardType="email-address"
              />
            </View>

            <View>
              <TextInput
                value={password}
                placeholder="Password"
                secureTextEntry={true}
                onChangeText={(password) => setPassword(password)}
              />
            </View>
            <View>
              <TextInput
                value={firstName}
                placeholder="John"
                secureTextEntry={true}
                onChangeText={(firstName) => setFirstName(firstName)}
              />
            </View>
            <View>
              <TextInput
                value={lastName}
                placeholder="Doe"
                secureTextEntry={true}
                onChangeText={(lastName) => setLastName(lastName)}
              />
            </View>
            <View>
              <TextInput
                value={contactNumber}
                placeholder="0923747836"
                secureTextEntry={true}
                onChangeText={(contactNumber) =>
                  setContactNumber(contactNumber)
                }
              />
            </View>

            <Button
              onPress={onSignUpPress}
            >
              Sign Up
            </Button>
          </View>
        )}
      </View>
      {pendingVerification && (
        <View>
          <View>
            <TextInput
              value={code}
              placeholder="Code"
              onChangeText={(code) => setCode(code)}
            />
          </View>
          <Button onPress={onPressVerify}>
            Verify Email
          </Button>
        </View>
      )}
      <View>
        <Text>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text>Sign in</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
}

