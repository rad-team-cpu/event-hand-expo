import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { useSignUp } from '@clerk/clerk-expo';
import { SignUpScreenProps } from '@/routes/types';
import { Platform } from 'react-native';
import { useForm } from 'react-hook-form';
import Block from '@/components/Block';
import Image from '@/components/Image';
import Button from '@/components/Button';
import Text from '@/components/Text';
import useTheme from '@/core/theme';
import FormTextInput from '@/components/FormTextInput';
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string, date } from 'yup';
import { HelperText } from 'react-native-paper';
import DatePicker from '@/components/Datepicker';
import { sub } from 'date-fns/fp';
import { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import format from 'date-fns/format';

interface SignUpInput {
  emailAddress: string;
  password: string;
  lastName: string;
  firstName: string;
  contactNumber: string;
  birthDate: Date;
}

const isAndroid = Platform.OS === 'android';

const signUpValidationSchema = object().shape({
  emailAddress: string()
    .required('Please enter your email')
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      'Please enter a valid email',
    ),
  password: string()
    .required('Please enter your password')
    .matches(
      /^(?=.*[A-Z])(?=.*\d).{8,}$/,
      'Your password must have at least one uppercase, a number, and least 8 characters long',
    ),
  lastName: string()
    .required('Enter last name.')
    .matches(/^[a-zA-Z]+$/, 'Please put a valid name'),
  firstName: string()
    .required('Enter first name.')
    .matches(/^[a-zA-Z]+$/, 'Please put a valid name'),
  contactNumber: string()
    .required('Enter contact number.')
    .matches(/^(09|\+639)\d{9}$/, 'Please enter a valid contact number.')
    .length(11, 'Please enter a valid contact number'),
  birthDate: date()
    .min(sub({ years: 100 })(new Date()), 'Must be at most 100 years old.')
    .max(sub({ years: 18 })(new Date()), 'Must be at least 18 years old.')
    .typeError('Enter Valid Date')
    .required('Enter date of birth.'),
});

export default function SignUp({ navigation }: SignUpScreenProps) {
  const { isLoaded, signUp } = useSignUp();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(signUpValidationSchema),
  });
  const { assets, colors, sizes } = useTheme();
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [date, setDate] = useState<Date | undefined>(undefined);

  const minDate = sub({ years: 100 })(new Date());
  const maxDate = sub({ years: 18, days: 1 })(new Date());

  const onDateSelect = (event: DateTimePickerEvent, selectedDate?: Date) => {
    if (selectedDate) {
      const currentDate = selectedDate;
      setDate(currentDate);
    }
  };

  const signUpFlow = async (input: SignUpInput) => {
    if (!isLoaded) {
      return;
    }

    const {
      emailAddress,
      password,
      lastName,
      firstName,
      contactNumber,
      birthDate,
    } = input;

    const unsafeMetadata = {
      contactNumber: contactNumber,
      birthDate: format(birthDate, 'MM/dd/yyyy'),
      type: 'CLIENT',
      role: 'CLIENT',
    };

    await signUp.create({
      emailAddress,
      password,
      lastName,
      firstName,
      unsafeMetadata,
    });
    await signUp.prepareEmailAddressVerification({ strategy: 'email_code' });

    navigation.navigate('Verification');
  };

  // start the sign up process.
  const onSignUpPress = handleSubmit(async (input) => {
    await signUpFlow(input).catch((err) => {
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
              paddingVertical={sizes.sm}
            >
              {/* form inputs */}
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
                  mode="password"
                  name="password"
                  label="Password"
                  placeholder="Password"
                  control={control}
                  register={register}
                  errors={errors}
                  iInputProps={{
                    autoCapitalize: 'none',
                    returnKeyType: 'next',
                    // secureTextEntry: true,
                  }}
                />
                <FormTextInput
                  name="firstName"
                  label="First Name"
                  placeholder="John"
                  control={control}
                  register={register}
                  errors={errors}
                  iInputProps={{
                    returnKeyType: 'next',
                  }}
                />

                <FormTextInput
                  name="lastName"
                  label="Last Name"
                  placeholder="Doe"
                  control={control}
                  register={register}
                  errors={errors}
                  iInputProps={{
                    returnKeyType: 'next',
                  }}
                />
                <FormTextInput
                  name="contactNumber"
                  label="Contact Number"
                  placeholder="09XXXXXXXXX"
                  control={control}
                  register={register}
                  errors={errors}
                  iInputProps={{
                    keyboardType: 'number-pad',
                  }}
                />
              </Block>
              <DatePicker
                name="birthDate"
                control={control}
                onValueChange={onDateSelect}
                display="spinner"
                maximumDate={maxDate}
                minimumDate={minDate}
                label={date ? date.toLocaleDateString() : 'Date of birth'}
                register={register}
                errors={errors}
                iButtonProps={{
                  primary: true,
                  outlined: true,
                  shadow: !isAndroid,
                  marginVertical: sizes.s,
                  marginHorizontal: sizes.sm,
                }}
                iTextprops={{
                  bold: true,
                  primary: true,
                  transform: 'uppercase',
                }}
              />
              <Button
                primary
                outlined
                shadow={!isAndroid}
                marginVertical={sizes.s}
                marginHorizontal={sizes.sm}
                onPress={onSignUpPress}
                // onPress={() => navigation.navigate('Verification')}
              >
                <Text bold primary transform="uppercase">
                  Sign up
                </Text>
              </Button>
              <HelperText type="error" visible={true}>
                {errorMessage}
              </HelperText>
              <Block>
                <Text center>Already have an account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                  <Text primary center>
                    Sign in
                  </Text>
                </TouchableOpacity>
              </Block>
            </Block>
          </Block>
        </Block>
      </Block>
    </Block>
  );
}
