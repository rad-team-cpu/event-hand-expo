import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { useSignUp } from '@clerk/clerk-expo';
import { SignUpScreenProps } from '@/routes/types';
import {Platform} from 'react-native';
import { getErrorMessage } from '@/core/utils';
import Block from '@/components/Block';
import Image from '@/components/Image';
import Button from '@/components/Button';
import Input from '@/components/Input'; 
import Text from '@/components/Text';
import useTheme from '@/core/theme';

const isAndroid = Platform.OS === 'android';


export default function SignUp({ navigation }: SignUpScreenProps) {
  const { isLoaded, signUp, setActive } = useSignUp();
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [pendingVerification, setPendingVerification] = useState(false);
  const [code, setCode] = useState('');
  const {assets, colors, gradients, sizes} = useTheme();


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
  <Block safe marginTop={sizes.md}>
    <Block paddingHorizontal={sizes.s}>
      <Block flex={0} style={{zIndex: 0}}>
        <Image
          background
          resizeMode="cover"
          padding={sizes.sm}
          radius={sizes.cardRadius}
          source={assets.background}
          height={sizes.height * 0.3}>
          <Button
            row
            flex={0}
            justify="flex-start"
            onPress={() => navigation.goBack()}>
            <Image
              radius={0}
              width={10}
              height={18}
              color={colors.white}
              source={assets.arrow}
              transform={[{rotate: '180deg'}]}
            />
            <Text p white marginLeft={sizes.s}>
              Go back
            </Text>
          </Button>

          <Text h4 center white marginBottom={sizes.md}>
            Create an Account
          </Text>
        </Image>
      </Block>
      <Block
        keyboard
        behavior={!isAndroid ? 'padding' : 'height'}
        marginTop={-(sizes.height * 0.2 - sizes.l)}>
      {!pendingVerification && (
        <Block
          flex={0}
          radius={sizes.sm}
          marginHorizontal="8%"
          shadow={!isAndroid} // disabled shadow on Android due to blur overlay + elevation issue
        >
          <Block
            blur
            flex={0}
            intensity={90}
            radius={sizes.sm}
            overflow="hidden"
            justify="space-evenly"
            tint={colors.blurTint}
            paddingVertical={sizes.sm}>
            {/* form inputs */}
            <Block paddingHorizontal={sizes.sm}>
              <Input
                autoCapitalize="none"
                label="Email"
                returnKeyType="next"
                value={emailAddress}
                onChangeText={(text) => setEmailAddress(text)}
                textContentType="emailAddress"
                keyboardType="email-address"
                placeholder="Email"
                // success={Boolean(registration.name && isValid.name)}
                // danger={Boolean(registration.name && !isValid.name)}
                // onChangeText={(value) => handleChange({name: value})}
              />
              {/* <Input
                autoCapitalize="none"
                marginBottom={sizes.m}
                label={t('common.email')}
                keyboardType="email-address"
                placeholder={t('common.emailPlaceholder')}
                success={Boolean(registration.email && isValid.email)}
                danger={Boolean(registration.email && !isValid.email)}
                onChangeText={(value) => handleChange({email: value})}
              /> */}
              <Input
                label="Password"
                returnKeyType="next"
                value={password}
                onChangeText={(text) => setPassword(text)}
                secureTextEntry
                placeholder="Password"
                // onChangeText={(value) => handleChange({password: value})}
                // success={Boolean(registration.password && isValid.password)}
                // danger={Boolean(registration.password && !isValid.password)}
              />
              <Input
                label="First Name"
                returnKeyType="next"
                value={firstName}
                onChangeText={(text) => setFirstName(text)}
                placeholder="First Name"
                // onChangeText={(value) => handleChange({password: value})}
                // success={Boolean(registration.password && isValid.password)}
                // danger={Boolean(registration.password && !isValid.password)}
              />
              <Input
                label="Last Name"
                returnKeyType="next"
                value={lastName}
                onChangeText={(text) => setLastName(text)}
                placeholder="Last Name"
                // onChangeText={(value) => handleChange({password: value})}
                // success={Boolean(registration.password && isValid.password)}
                // danger={Boolean(registration.password && !isValid.password)}
              />
               <Input
                label="Contact Number"
                returnKeyType="done"
                value={contactNumber}
                onChangeText={(text) => setContactNumber(text)}
                // onChangeText={(value) => handleChange({password: value})}
                // success={Boolean(registration.password && isValid.password)}
                // danger={Boolean(registration.password && !isValid.password)}
              />
            </Block>
            <Button
              primary
              outlined
              shadow={!isAndroid}
              marginVertical={sizes.s}
              marginHorizontal={sizes.sm}
              onPress={onSignUpPress}>
              <Text bold primary transform="uppercase">
                Sign up
              </Text>
            </Button>

            <Block >
              <Text center>Already have an account? </Text>
              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text primary center>Sign in</Text>
              </TouchableOpacity>
            </Block>
          </Block>
        </Block>
      )}
     {pendingVerification && (
      <Block>
        <Block>
          <Block>
            <Input
              value={code}
              placeholder="Code"
              onChangeText={(code) => setCode(code)}
            />
          </Block>
          <Button onPress={onPressVerify}>
            <Text>
            Verify Email
            </Text>
          </Button>
        </Block>
      <Block>
        <Text>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text>Sign in</Text>
        </TouchableOpacity>
      </Block>
    </Block>
     )}
      </Block>
    </Block>
  </Block>



    // <Background>
    //   <BackButton goBack={() => navigation.goBack()} />

    //   <Logo />

    //   <Header>Create Account</Header>
    //   <View>
    //     {!pendingVerification && (
    //       <View>
    //         <View>
    //           <TextInput
    //             label="Email"
    //             autoCapitalize="none"
    //             value={emailAddress}
    //             placeholder="Email"
    //             returnKeyType="next"
    //             onChangeText={(emailAddress) => setEmailAddress(emailAddress)}
    //             textContentType="emailAddress"
    //             keyboardType="email-address"
    //           />
    //         </View>

    //         <View>
    //           <TextInput
    //             value={password}
    //             placeholder="Password"
    //             secureTextEntry={true}
    //             onChangeText={(password) => setPassword(password)}
    //           />
    //         </View>
    //         <View>
    //           <TextInput
    //             value={firstName}
    //             placeholder="John"
    //             secureTextEntry={true}
    //             onChangeText={(firstName) => setFirstName(firstName)}
    //           />
    //         </View>
    //         <View>
    //           <TextInput
    //             value={lastName}
    //             placeholder="Doe"
    //             secureTextEntry={true}
    //             onChangeText={(lastName) => setLastName(lastName)}
    //           />
    //         </View>
    //         <View>
    //           <TextInput
    //             value={contactNumber}
    //             placeholder="0923747836"
    //             secureTextEntry={true}
    //             onChangeText={(contactNumber) =>
    //               setContactNumber(contactNumber)
    //             }
    //           />
    //         </View>

    //         <Button
    //           onPress={onSignUpPress}
    //         >
    //           <Text>
    //           Sign Up
    //           </Text>
    //         </Button>
    //       </View>
    //     )}
    //   </View>
    //   {pendingVerification && (
    //     <View>
    //       <View>
    //         <TextInput
    //           value={code}
    //           placeholder="Code"
    //           onChangeText={(code) => setCode(code)}
    //         />
    //       </View>
    //       <Button onPress={onPressVerify}>
    //         <Text>
    //         Verify Email
    //         </Text>
    //       </Button>
    //     </View>
    //   )}
    //   <View>
    //     <Text>Already have an account? </Text>
    //     <TouchableOpacity onPress={() => navigation.navigate('Login')}>
    //       <Text>Sign in</Text>
    //     </TouchableOpacity>
    //   </View>
    // </Background>
  );
}

