// import React, { memo, useState } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// import Background from '../../components/Background';
// import Logo from '../../components/Logo';
// import Header from '../../components/Header';
// import Button from '../../components/Button';
// import TextInput from '../../components/TextInput';
// import BackButton from '../../components/BackButton';
// import { theme } from '../../core/theme';
// import {
//   emailValidator,
//   passwordValidator,
//   nameValidator,
// } from '../../core/utils';
// import { SignupScreenProps } from '@/routes/types';



// const Signup = ({ navigation }: SignupScreenProps) => {
//   const [name, setName] = useState({ value: '', error: '' });
//   const [email, setEmail] = useState({ value: '', error: '' });
//   const [password, setPassword] = useState({ value: '', error: '' });

//   const _onSignUpPressed = () => {
//     const nameError = nameValidator(name.value);
//     const emailError = emailValidator(email.value);
//     const passwordError = passwordValidator(password.value);

//     if (emailError || passwordError || nameError) {
//       setName({ ...name, error: nameError });
//       setEmail({ ...email, error: emailError });
//       setPassword({ ...password, error: passwordError });
//       return;
//     }

//     navigation.navigate('Welcome');
//   };

//   return (
//     <Background>
//       <BackButton goBack={() => navigation.goBack()} />

//       <Logo />

//       <Header>Create Account</Header>

//       <TextInput
//         label="Name"
//         returnKeyType="next"
//         value={name.value}
//         onChangeText={text => setName({ value: text, error: '' })}
//         error={!!name.error}
//         errorText={name.error}
//       />

//       <TextInput
//         label="Email"
//         returnKeyType="next"
//         value={email.value}
//         onChangeText={text => setEmail({ value: text, error: '' })}
//         error={!!email.error}
//         errorText={email.error}
//         autoCapitalize="none"
//         textContentType="emailAddress"
//         keyboardType="email-address"
//       />

//       <TextInput
//         label="Password"
//         returnKeyType="done"
//         value={password.value}
//         onChangeText={text => setPassword({ value: text, error: '' })}
//         error={!!password.error}
//         errorText={password.error}
//         secureTextEntry
//       />

//       <Button mode="contained" onPress={_onSignUpPressed} style={styles.button}>
//         Sign Up
//       </Button>

//       <View style={styles.row}>
//         <Text style={styles.label}>Already have an account? </Text>
//         <TouchableOpacity onPress={() => navigation.navigate('Login')}>
//           <Text style={styles.link}>Login</Text>
//         </TouchableOpacity>
//       </View>
//     </Background>
//   );
// };

// const styles = StyleSheet.create({
//   label: {
//     color: theme.colors.secondary,
//   },
//   button: {
//     marginTop: 24,
//   },
//   row: {
//     flexDirection: 'row',
//     marginTop: 4,
//   },
//   link: {
//     fontWeight: 'bold',
//     color: theme.colors.primary,
//   },
// });

// export default memo(Signup);

import * as React from "react";
import { Text, StyleSheet, TouchableOpacity, View } from "react-native";
import { useSignUp } from "@clerk/clerk-expo";
import Background from "@/components/Background";
import BackButton from "@/components/BackButton";
import Logo from "@/components/Logo";
import { SignupScreenProps } from "@/routes/types";
import Header from "@/components/Header";
import Button from "@/components/Button";
import { theme } from '../../core/theme';
import TextInput from '../../components/TextInput';

 
export default function Signup({ navigation }: SignupScreenProps) {
  const { isLoaded, signUp, setActive } = useSignUp();
 
  const [emailAddress, setEmailAddress] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [pendingVerification, setPendingVerification] = React.useState(false);
  const [code, setCode] = React.useState("");
 
  // start the sign up process.
  const onSignUpPress = async () => {
    if (!isLoaded) {
      return;
    }
 
    try {
      await signUp.create({
        emailAddress,
        password,
      });
 
      // send the email.
      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });
 
      // change the UI to our pending section.
      setPendingVerification(true);
    } catch (err: any) {
      console.error(JSON.stringify(err, null, 2));
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
    } catch (err: any) {
      console.error(JSON.stringify(err, null, 2));
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
 
         <Button mode="contained" onPress={onSignUpPress} style={styles.button}>
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
          <Button mode="contained" onPress={() => navigation.navigate('Login')}>
            Verify Email
          </Button>
        </View>
       )} 
       <View style={styles.row}>
         <Text style={styles.label}>Already have an account? </Text>
         <TouchableOpacity onPress={() => navigation.navigate('Login')}>
           <Text style={styles.link}>Sign in</Text>
         </TouchableOpacity>
       </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  label: {
    color: theme.colors.secondary,
  },
  button: {
    marginTop: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
});