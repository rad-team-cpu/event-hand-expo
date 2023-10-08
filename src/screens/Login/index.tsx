import React, { memo, useState } from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import Background from '../../components/Background';
import Logo from '../../components/Logo';
import Header from '../../components/Header';
// import Button from '../../components/Button';
import TextInput from '../../components/TextInput';
import BackButton from '../../components/BackButton';
import {Linking, Platform} from 'react-native';
import { LoginScreenProps } from '@/routes/types';
import { useSignIn } from '@clerk/clerk-expo';
import { getErrorMessage } from '@/core/utils';
import Block from '@/components/Block';
import Image from '@/components/Image';
import Button from '@/components/Button';
import Input from '@/components/Input'; 
import Text from '@/components/Text';
import useTheme from '@/core/theme';
import Checkbox from '@/components/Checkbox';
// import axios from 'axios';

const isAndroid = Platform.OS === 'android';


interface IRegistrationValidation {
  name: boolean;
  email: boolean;
  password: boolean;
  agreed: boolean;
}

const Login = ({ navigation }: LoginScreenProps) => {
  const { signIn, setActive, isLoaded } = useSignIn();
  // const { getToken, isSignedIn } = useAuth();
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isValid, setIsValid] = useState<IRegistrationValidation>({
    name: false,
    email: false,
    password: false,
    agreed: false,
  });
  const {assets, colors, gradients, sizes} = useTheme();


  const _onLoginPressed = async () => {
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
      // setError(false);
      // const token = await getToken({ template: 'client' });
      // console.log(isSignedIn);
      // console.log(token);
      // await axios
      //   .get(`http://192.168.254.105:3000/`, {
      //     headers: { Authorization: `Bearer ${token}` },
      //   })
      //   .then((response) => {
      //     console.log(response.data);
      //   })
      //   .catch((error) => {
      //     console.error(error);
      //   });
      navigation.navigate('Dashboard');
    } catch (err) {
      console.log(getErrorMessage(err));
      setError(true);
      setErrorMessage(getErrorMessage);
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
              Welcome Back
            </Text>
          </Image>
        </Block>
        {/* register form */}
        <Block
          keyboard
          behavior={!isAndroid ? 'padding' : 'height'}
          marginTop={-(sizes.height * 0.2 - sizes.l)}>
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
              <Text p semibold center>
                Eventhand
              </Text>
              {/* social buttons */}
              <Block row center justify="space-evenly" marginVertical={sizes.m}>
                <Button outlined gray shadow={!isAndroid}>
                  <Image
                    source={assets.facebook}
                    height={sizes.m}
                    width={sizes.m}
                    // color={isDark ? colors.icon : undefined}
                  />
                </Button>
                <Button outlined gray shadow={!isAndroid}>
                  <Image
                    source={assets.apple}
                    height={sizes.m}
                    width={sizes.m}
                    // color={isDark ? colors.icon : undefined}
                  />
                </Button>
                <Button outlined gray shadow={!isAndroid}>
                  <Image
                    source={assets.google}
                    height={sizes.m}
                    width={sizes.m}
                    // color={isDark ? colors.icon : undefined}
                  />
                </Button>
              </Block>
              <Block
                row
                flex={0}
                align="center"
                justify="center"
                marginBottom={sizes.sm}
                paddingHorizontal={sizes.xxl}>
                <Block
                  flex={0}
                  height={1}
                  width="50%"
                  end={[1, 0]}
                  start={[0, 1]}
                  gradient={gradients.divider}
                />
                <Text center marginHorizontal={sizes.s}>
                  Sign in
                </Text>
                <Block
                  flex={0}
                  height={1}
                  width="50%"
                  end={[0, 1]}
                  start={[1, 0]}
                  gradient={gradients.divider}
                />
              </Block>
              {/* form inputs */}
              <Block paddingHorizontal={sizes.sm}>
                <Input
                  autoCapitalize="none"
                  marginBottom={sizes.m}
                  label="Email"
                  returnKeyType="next"
                  value={emailAddress}
                  onChangeText={(text) => setEmailAddress(text)}
                  textContentType="emailAddress"
                  keyboardType="email-address"
                  placeholder="Name"
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
                  returnKeyType="done"
                  value={password}
                  onChangeText={(text) => setPassword(text)}
                  secureTextEntry
                  // onChangeText={(value) => handleChange({password: value})}
                  // success={Boolean(registration.password && isValid.password)}
                  // danger={Boolean(registration.password && !isValid.password)}
                />
              </Block>
              <View>
                <TouchableOpacity onPress={() => navigation.navigate('Welcome')}>
                  <Text>Forgot your password?</Text>
                </TouchableOpacity>
              </View>
              {/* checkbox terms */}
              <Button
                primary
                outlined
                shadow={!isAndroid}
                marginVertical={sizes.s}
                marginHorizontal={sizes.sm}
                onPress={_onLoginPressed}>
                <Text bold primary transform="uppercase">
                  Sign in
                </Text>
              </Button>
              <View>
                <Text>Don’t have an account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                  <Text>Sign up</Text>
                </TouchableOpacity>
              </View>
            </Block>
          </Block>
        </Block>
      </Block>
    </Block>
    // <Background>
    //   <BackButton goBack={() => navigation.goBack()} />

    //   <Logo />

    //   <Header>Welcome back!</Header>

    //   <TextInput
    //     label="Email"
    //     returnKeyType="next"
    //     value={emailAddress}
    //     onChangeText={(text) => setEmailAddress(text)}
    //     error={error}
    //     autoCapitalize="none"
    //     textContentType="emailAddress"
    //     keyboardType="email-address"
    //   />
    //   <TextInput
    //     label="Password"
    //     returnKeyType="done"
    //     value={password}
    //     onChangeText={(text) => setPassword(text)}
    //     error={error}
    //     errorText={errorMessage}
    //     secureTextEntry
    //   />
    //   <View>
    //     <TouchableOpacity onPress={() => navigation.navigate('Welcome')}>
    //       <Text>Forgot your password?</Text>
    //     </TouchableOpacity>
    //   </View>

    //   <Button onPress={_onLoginPressed}>
    //     Login
    //   </Button>

    //   <View>
    //     <Text>Don’t have an account? </Text>
    //     <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
    //       <Text>Sign up</Text>
    //     </TouchableOpacity>
    //   </View>
    // </Background>
  );
};


export default memo(Login);
