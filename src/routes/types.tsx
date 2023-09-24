import type { NativeStackScreenProps } from '@react-navigation/native-stack';

type ScreenPropsList = {
  Welcome: undefined;
  Login: undefined;
  Dashboard: undefined;
  Checklist: undefined;
};

type WelcomeScreenProps = NativeStackScreenProps<ScreenPropsList, 'Welcome'>;

type LoginScreenProps = NativeStackScreenProps<ScreenPropsList, 'Login'>;

type DashboardScreenProps = NativeStackScreenProps<
  ScreenPropsList,
  'Dashboard'
>;

type ChecklistScreenProps = NativeStackScreenProps<
  ScreenPropsList,
  'Checklist'
>;

export {
  ScreenPropsList,
  WelcomeScreenProps,
  LoginScreenProps,
  DashboardScreenProps,
  ChecklistScreenProps,
};
