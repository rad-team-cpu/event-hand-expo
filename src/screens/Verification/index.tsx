import React, { useState } from 'react';
import { useSignUp } from '@clerk/clerk-expo';
import { VerificationScreenProps } from '@/routes/types';
import { Platform } from 'react-native';
import Block from '@/components/Block';
import Image from '@/components/Image';
import Button from '@/components/Button';
import Text from '@/components/Text';
import useTheme from '@/core/theme';
import FormTextInput from '@/components/FormTextInput';
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string } from 'yup';
import { HelperText } from 'react-native-paper';
import {
  useForm,
  Control,
  UseFormRegister,
  FieldValues,
} from 'react-hook-form';
import Loading from '@/components/Loading';

const isAndroid = Platform.OS === 'android';

const signUpValidationSchema = object().shape({
  code: string().required('Enter contact number.'),
});

function Verification({ navigation }: VerificationScreenProps) {
  const { isLoaded, signUp, setActive } = useSignUp();
  const { assets, colors, sizes } = useTheme();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(signUpValidationSchema),
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  // start the sign up process.

  //   This verifies the user using email code that is delivered.
  const submit = async (code: string) => {
    if (!isLoaded) {
      return;
    }
    const completeSignUp = await signUp.attemptEmailAddressVerification({
      code,
    });

    await setActive({ session: completeSignUp.createdSessionId });
  };

  const onPressVerify = handleSubmit(async (input) => {
    const { code } = input;
    setLoading(true);
    await submit(code).catch((err) => {
      setLoading(false);
      switch (err.status) {
        case 400:
          setErrorMessage('Sign up failed, please try again');
          break;
        case 401:
          setErrorMessage('Sign up failed, please try again');
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

  if (loading) {
    return <Loading />;
  }

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
              Enter Verification Code
            </Text>
          </Image>
        </Block>
        <Block
          keyboard
          behavior={!isAndroid ? 'padding' : 'height'}
          marginTop={-(sizes.height * 0.2 - sizes.l)}
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
            {/* form inputs */}
            <Block paddingHorizontal={sizes.sm}>
              <FormTextInput
                name="code"
                label="Verification"
                placeholder="Enter Code here"
                control={control as unknown as Control<FieldValues, unknown>}
                register={register as unknown as UseFormRegister<FieldValues>}
                errors={errors}
                iInputProps={{
                  keyboardType: 'number-pad',
                }}
              />
              <Block>
                <Button
                  primary
                  outlined
                  shadow={!isAndroid}
                  marginVertical={sizes.s}
                  marginHorizontal={sizes.sm}
                  onPress={onPressVerify}
                >
                  <Text bold primary transform="uppercase">
                    Submit
                  </Text>
                </Button>
                <HelperText type="error" visible={true}>
                  {errorMessage}
                </HelperText>
              </Block>
            </Block>
          </Block>
        </Block>
      </Block>
    </Block>
  );
}

export default Verification;
