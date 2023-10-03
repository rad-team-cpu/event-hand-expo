// import React, { memo, useState } from 'react';
// import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
// import Background from '../../components/Background';
// import Logo from '../../components/Logo';
// import Header from '../../components/Header';
// import Button from '../../components/Button';
// import TextInput from '../../components/TextInput';
// import BackButton from '../../components/BackButton';
// import { theme } from '../../core/theme';
// import { emailValidator, passwordValidator } from '../../core/utils';
// import { LoginScreenProps } from '@/routes/types';

// const Login = ({ navigation }: LoginScreenProps) => {
//   const [email, setEmail] = useState({ value: '', error: '' });
//   const [password, setPassword] = useState({ value: '', error: '' });

//   const _onLoginPressed = () => {
//     const emailError = emailValidator(email.value);
//     const passwordError = passwordValidator(password.value);

//     if (emailError || passwordError) {
//       setEmail({ ...email, error: emailError });
//       setPassword({ ...password, error: passwordError });
//       // return;
//     }

//     navigation.navigate('Dashboard');
//   };

//   return (
//     <Background>
//       <BackButton goBack={() => navigation.goBack()} />

//       <Logo />

//       <Header>Welcome back!</Header>

//       <TextInput
//         label="Email"
//         returnKeyType="next"
//         value={email.value}
//         onChangeText={(text) => setEmail({ value: text, error: '' })}
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
//         // onChangeText={(text) => setPassword({ value: text, error: '' })}
//         error={!!password.error}
//         errorText={password.error}
//         secureTextEntry
//       />

//       <View style={styles.forgotPassword}>
//         <TouchableOpacity onPress={() => navigation.navigate('Welcome')}>
//           <Text style={styles.label}>Forgot your password?</Text>
//         </TouchableOpacity>
//       </View>

//       <Button mode="contained" onPress={_onLoginPressed}>
//         Login
//       </Button>

//       <View style={styles.row}>
//         <Text style={styles.label}>Don’t have an account? </Text>
//         <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
//           <Text style={styles.link}>Sign up</Text>
//         </TouchableOpacity>
//       </View>
//     </Background>
//   );
// };



// export default memo(Login);

import React from "react";
import { Text, TouchableOpacity, StyleSheet, View } from "react-native";
import Background from '../../components/Background';
import Logo from '../../components/Logo';
import Header from '../../components/Header';
import Button from '../../components/Button';
import TextInput from '../../components/TextInput';
import BackButton from '../../components/BackButton';
import { theme } from '../../core/theme';
import { useSignIn } from "@clerk/clerk-expo";
import { LoginScreenProps } from "@/routes/types";
 
export default function Login({ navigation }: LoginScreenProps) {
  const { signIn, setActive, isLoaded } = useSignIn();
 
  const [emailAddress, setEmailAddress] = React.useState("");
  const [password, setPassword] = React.useState("");
 
  const onSignInPress = async () => {
    if (!isLoaded) {
      return;
    }
 
    try {
      const completeSignIn = await signIn.create({
        identifier: emailAddress,
        password,
      });
      // This is an important step,
      // This indicates the user is signed in
      await setActive({ session: completeSignIn.createdSessionId });
      navigation.navigate('Dashboard');
    } catch (err: any) {
      console.log(err);
    }
  };
  return (
    <Background>
      <BackButton goBack={() => navigation.goBack()} />

      <Logo />

      <Header>Welcome back!</Header>
      <View>
        <View>
          <TextInput
            label="Email"
            returnKeyType="next"
            autoCapitalize="none"
            value={emailAddress}
            placeholder="Email"
            textContentType="emailAddress"
            keyboardType="email-address"
            onChangeText={(emailAddress) => setEmailAddress(emailAddress)}
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

        <View style={styles.forgotPassword}>
          <TouchableOpacity onPress={() => navigation.navigate('Welcome')}>
            <Text style={styles.label}>Forgot your password?</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonPos}>
        <Button mode="contained" onPress={() => navigation.navigate('Dashboard')} style={styles.button}>
           Sign in
        </Button>
        </View>

        <View style={styles.row}>
         <Text style={styles.label}>Don’t have an account? </Text>
         <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
           <Text style={styles.link}>Sign up</Text>
         </TouchableOpacity>
       </View>
      </View>
    </Background>
  );
}

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
  buttonPos: {
    alignItems: 'center',
    marginBottom: 24,
  },
  label: {
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
});