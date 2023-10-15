import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { useSignUp } from '@clerk/clerk-expo';
import { SignUpScreenProps } from '@/routes/types';
import {Platform} from 'react-native';
import { useForm } from 'react-hook-form';
import { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import Block from '@/components/Block';
import Image from '@/components/Image';
import Button from '@/components/Button';
import Text from '@/components/Text';
import useTheme from '@/core/theme';
import DatePicker from '@/components/Datepicker';
import { sub } from 'date-fns/fp';
import FormTextInput from '@/components/FormTextInput';
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string, date } from 'yup';
import axios from 'axios';
import { format } from 'date-fns';

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
    .length(11, 'Please eter a valid contact number'),
  dateOfBirth: date()
    .min(sub({ years: 100 })(new Date()), 'Must be at most 100 years old.')
    .max(sub({ years: 18 })(new Date()), 'Must be at least 18 years old.')
    .typeError('Enter Valid Date')
    .required('Enter date of birth.'),
});

export default function SignUp({ navigation }: SignUpScreenProps) {
  const { isLoaded, signUp, setActive } = useSignUp();
  const {
    register,
    control,
    handleSubmit,
    getValues,
    trigger,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(signUpValidationSchema),
  });
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  // const [pendingVerification, setPendingVerification] = useState(false);
  const [code, setCode] = useState('');
  const { assets, colors, gradients, sizes } = useTheme();

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
                onValueChange={onDateChange}
                display="spinner"
                maximumDate={maxDate}
                minimumDate={minDate}
                // defaultValue={minDate}
                label={
                  date ? date.toLocaleDateString() : 'Select your date of birth'
                }
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
                // onPress={createPassword}
                onPress={() => onSubmit()}
              >
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

