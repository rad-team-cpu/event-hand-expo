import type { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import type { MaterialBottomTabScreenProps } from 'react-native-paper';
import type {
  NavigatorScreenParams,
  CompositeScreenProps,
} from '@react-navigation/native';

type ScreenPropsList = {
  Welcome: undefined;
  Login: undefined;
  Signup: undefined;
  Dashboard: undefined;
  Checklist: undefined;
  Profile: undefined;
  VerifyCode: undefined;
};

type WelcomeScreenProps = NativeStackScreenProps<ScreenPropsList, 'Welcome'>;

type LoginScreenProps = NativeStackScreenProps<ScreenPropsList, 'Login'>;
type ProfileScreenProps = NativeStackScreenProps<ScreenPropsList, 'Profile'>;
type ProfileNavigationProps = NativeStackNavigationProp<ScreenPropsList, 'Profile'>
type SignupScreenProps = NativeStackScreenProps<ScreenPropsList, 'Signup'>;

 type VerifyCodeScreenProps = NativeStackScreenProps<ScreenPropsList, 'VerifyCode'>;



type DashboardScreenProps = NativeStackScreenProps<
  ScreenPropsList,
  'Dashboard'
>;

type ChecklistScreenProps = NativeStackScreenProps<
  ScreenPropsList,
  'Checklist'
>;

type DashboardTabScreenPropsList = {
  Dashboard: NavigatorScreenParams<ScreenPropsList>;
  EventList: undefined;
  Inbox: undefined;
  Notifications: undefined;
};

type EventListScreenProps = CompositeScreenProps<
  MaterialBottomTabScreenProps<DashboardTabScreenPropsList, 'EventList'>,
  NativeStackScreenProps<ScreenPropsList>
>;

type InboxScreenProps = CompositeScreenProps<
  MaterialBottomTabScreenProps<DashboardTabScreenPropsList, 'Inbox'>,
  NativeStackScreenProps<ScreenPropsList>
>;

type NotificationsScreenProps = CompositeScreenProps<
  MaterialBottomTabScreenProps<DashboardTabScreenPropsList, 'Notifications'>,
  NativeStackScreenProps<ScreenPropsList>
>;


export {
  ScreenPropsList,
  WelcomeScreenProps,
  LoginScreenProps,
  SignupScreenProps,
  DashboardScreenProps,
  ProfileScreenProps,
  ProfileNavigationProps,
  ChecklistScreenProps,
  DashboardTabScreenPropsList,
  EventListScreenProps,
  InboxScreenProps,
  NotificationsScreenProps,
  VerifyCodeScreenProps
};
