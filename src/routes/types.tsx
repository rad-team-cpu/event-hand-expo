import type { NativeStackScreenProps } from '@react-navigation/native-stack';

type ScreenPropsList = {
  Welcome: undefined;
  Login: undefined;
  Dashboard: undefined;
  Signup: undefined;
};

type WelcomeScreenProps = NativeStackScreenProps<ScreenPropsList, 'Welcome'>;

type LoginScreenProps = NativeStackScreenProps<ScreenPropsList, 'Login'>;

type SignUpScreenProps = NativeStackScreenProps<ScreenPropsList, 'Signup'>;


export { ScreenPropsList, WelcomeScreenProps, LoginScreenProps, SignUpScreenProps };
