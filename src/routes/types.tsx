import type {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import type {
  NavigatorScreenParams,
  CompositeScreenProps,
} from '@react-navigation/native';
import { MaterialBottomTabScreenProps } from '@react-navigation/material-bottom-tabs';

type ScreenPropsList = {
  Welcome: undefined;
  SignUp: undefined;
  Verification: undefined;
  Login: undefined;
  Dashboard: undefined;
  Profile: undefined;
  EventDateSelect: undefined;
  EventType: undefined;
  EventBudgetInput: undefined;
  SupplierSelect: undefined;
  Checklist: undefined;
  SupplierList: undefined;
};

type WelcomeScreenProps = NativeStackScreenProps<ScreenPropsList, 'Welcome'>;

type SignUpScreenProps = NativeStackScreenProps<ScreenPropsList, 'SignUp'>;

type VerificationScreenProps = NativeStackScreenProps<
  ScreenPropsList,
  'Verification'
>;

type LoginScreenProps = NativeStackScreenProps<ScreenPropsList, 'Login'>;

type DashboardScreenProps = NativeStackScreenProps<
  ScreenPropsList,
  'Dashboard'
>;

type ProfileScreenProps = NativeStackScreenProps<ScreenPropsList, 'Profile'>;

type DashboardScreenNavigationProp = NativeStackNavigationProp<
  ScreenPropsList,
  'Dashboard'
>;

type EventDateSelectScreenProps = NativeStackScreenProps<
  ScreenPropsList,
  'EventDateSelect'
>;

type EventTypeScreenProps = NativeStackScreenProps<
  ScreenPropsList,
  'EventType'
>;

type EventBudgetInputScreenProps = NativeStackScreenProps<
  ScreenPropsList,
  'EventBudgetInput'
>;

type SupplierSelectScreenProps = NativeStackScreenProps<
  ScreenPropsList,
  'SupplierSelect'
>;

type ChecklistScreenProps = NativeStackScreenProps<
  ScreenPropsList,
  'Checklist'
>;

type SupplierListScreenProps = NativeStackScreenProps<
  ScreenPropsList,
  'SupplierList'
>;

type DashboardTabScreenPropsList = {
  Dashboard: NavigatorScreenParams<ScreenPropsList>;
  EventList: undefined;
  Inbox: undefined;
  Notifications: undefined;
  Profile: undefined;
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
  SignUpScreenProps,
  VerificationScreenProps,
  LoginScreenProps,
  DashboardScreenProps,
  ProfileScreenProps,
  DashboardScreenNavigationProp,
  EventListScreenProps,
  EventDateSelectScreenProps,
  EventTypeScreenProps,
  EventBudgetInputScreenProps,
  SupplierSelectScreenProps,
  ChecklistScreenProps,
  SupplierListScreenProps,
  DashboardTabScreenPropsList,
  InboxScreenProps,
  NotificationsScreenProps,
};
