import React from 'react';
import { useSignUp } from '@clerk/clerk-expo';
import { SignUpScreenProps } from '@/routes/types';
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
import { useForm } from 'react-hook-form';

const isAndroid = Platform.OS === 'android';

const signUpValidationSchema = object().shape({
  code: string().required('Enter contact number.'),
});

function Verification({ navigation }: SignUpScreenProps) {
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
    submit(code);
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
              Create an Account
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
                control={control}
                register={register}
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
                  // onPress={onSignUpPress}
                  onPress={onPressVerify}
                >
                  <Text bold primary transform="uppercase">
                    Sign up
                  </Text>
                </Button>
              </Block>
            </Block>
          </Block>
        </Block>
      </Block>
    </Block>
  );
}

export default Verification;
