import React, { memo, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Platform } from 'react-native';
import { LoginScreenProps } from '@/routes/types';
import Block from '@/components/Block';
import Image from '@/components/Image';
import Button from '@/components/Button';
import Text from '@/components/Text';
import useTheme from '@/core/theme';
import { useAuth, useSignIn } from '@clerk/clerk-expo';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string } from 'yup';
import FormTextInput from '@/components/FormTextInput';
import { HelperText } from 'react-native-paper';

const isAndroid = Platform.OS === 'android';

const signUpValidationSchema = object().shape({
  emailAddress: string()
    .required('Please enter your email')
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      'Please enter a valid email',
    ),
  password: string().required('Please enter your password'),
});

const Login = ({ navigation }: LoginScreenProps) => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(signUpValidationSchema),
  });
  const { assets, colors, sizes, gradients } = useTheme();
  const { signIn, setActive, isLoaded } = useSignIn();
  const { userId } = useAuth();
  const [errorMessage, setErrorMessage] = useState<string>('');

  const submit = async (emailAddress: string, password: string) => {
    if (!isLoaded) {
      return;
    }

    const completeSignIn = await signIn.create({
      identifier: emailAddress,
      password,
    });
    // This is an important step,
    // This indicates the user is signed in
    await setActive({ session: completeSignIn.createdSessionId });
  };

  const onLoginPressed = handleSubmit(async (input) => {
    const { emailAddress, password } = input;
    await submit(emailAddress, password).catch((err) => {
      switch (err.status) {
        case 400:
          setErrorMessage('SignUp failed, please try again');
          break;
        case 403:
          setErrorMessage(
            'Server is unable to process your login, please try again later',
          );
          break;
        case 404:
          setErrorMessage('No internet connection');
          break;
        case 409:
          setErrorMessage('Email is already in use');
          break;
        case 422:
          setErrorMessage(
            'The information you have entered is invalid\\missing',
          );
          break;
        case 429:
          setErrorMessage(
            'Server is too busy to process your signup, please try again later',
          );
          break;
        case 500:
          setErrorMessage(
            'Server was not able to process your signup, please try again later',
          );
          break;
        default:
          setErrorMessage('Something went wrong, please try again later');
          break;
      }
    });
  });

  return (
    <Block safe marginTop={sizes.md}>
      <Block paddingHorizontal={sizes.s}>
        <Block flex={0} style={{ zIndex: 0 }}>
          <Image
            background
            resizeMode="cover"
            padding={sizes.sm}
            radius={sizes.cardRadius}
            source={assets.background}
            height={sizes.height * 0.3}
          >
            <Button
              row
              flex={0}
              justify="flex-start"
              onPress={() => navigation.goBack()}
            >
              <Image
                radius={0}
                width={10}
                height={18}
                color={colors.white}
                source={assets.arrow}
                transform={[{ rotate: '180deg' }]}
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
        <Block
          keyboard
          behavior={!isAndroid ? 'padding' : 'height'}
          marginTop={-(sizes.height * 0.2 - sizes.l)}
        >
          <Block
            flex={0}
            radius={sizes.sm}
            marginHorizontal="8%"
            shadow={!isAndroid}
          >
            <Block
              blur
              flex={0}
              intensity={90}
              radius={sizes.sm}
              overflow="hidden"
              justify="space-evenly"
              tint={colors.blurTint}
              paddingVertical={sizes.sm}
            >
              <Block
                row
                flex={0}
                align="center"
                justify="center"
                marginBottom={sizes.sm}
                paddingHorizontal={sizes.xxl}
              >
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
              <Block paddingHorizontal={sizes.sm}>
                <FormTextInput
                  name="emailAddress"
                  label="Email"
                  placeholder="Email"
                  control={control}
                  register={register}
                  errors={errors}
                  iInputProps={{
                    autoCapitalize: 'none',
                    returnKeyType: 'next',
                    textContentType: 'emailAddress',
                    keyboardType: 'email-address',
                  }}
                />
                <FormTextInput
                  name="password"
                  label="Password"
                  placeholder="Password"
                  control={control}
                  register={register}
                  errors={errors}
                  iInputProps={{
                    autoCapitalize: 'none',
                    returnKeyType: 'next',
                    secureTextEntry: true,
                  }}
                />
              </Block>
              <Block marginBottom={sizes.sm}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Welcome')}
                >
                  <Text tertiary marginLeft={sizes.sm}>
                    Forgot your password?
                  </Text>
                </TouchableOpacity>
              </Block>
              <Button
                primary
                outlined
                shadow={!isAndroid}
                marginVertical={sizes.s}
                marginHorizontal={sizes.sm}
                onPress={onLoginPressed}
              >
                <Text bold primary transform="uppercase">
                  Sign in
                </Text>
              </Button>
              <HelperText type="error" visible={true}>
                {errorMessage}
              </HelperText>
              <Block>
                <Text center>Don’t have an account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                  <Text center primary>
                    Sign up
                  </Text>
                </TouchableOpacity>
              </Block>
            </Block>
          </Block>
        </Block>
      </Block>
    </Block>
  );
};

export default memo(Login);
