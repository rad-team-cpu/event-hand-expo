import type { NativeStackScreenProps } from '@react-navigation/native-stack';

type ScreenPropsList = {
  Welcome: undefined;
  Login: undefined;
  Dashboard: undefined;
};

type WelcomeScreenProps = NativeStackScreenProps<ScreenPropsList, 'Welcome'>;

type LoginScreenProps = NativeStackScreenProps<ScreenPropsList, 'Login'>;

export { ScreenPropsList, WelcomeScreenProps, LoginScreenProps };
