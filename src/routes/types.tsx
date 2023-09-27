import type { NativeStackScreenProps } from '@react-navigation/native-stack';
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
};

type WelcomeScreenProps = NativeStackScreenProps<ScreenPropsList, 'Welcome'>;

type LoginScreenProps = NativeStackScreenProps<ScreenPropsList, 'Login'>;

type SignupScreenProps = NativeStackScreenProps<ScreenPropsList, 'Signup'>;


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
  ChecklistScreenProps,
  DashboardTabScreenPropsList,
  EventListScreenProps,
  InboxScreenProps,
  NotificationsScreenProps,
};
