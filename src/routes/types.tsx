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
  Login: undefined;
  Dashboard: undefined;
  EventDetails: undefined;
  SupplierSelect: undefined;
  Checklist: undefined;
};

type WelcomeScreenProps = NativeStackScreenProps<ScreenPropsList, 'Welcome'>;

type LoginScreenProps = NativeStackScreenProps<ScreenPropsList, 'Login'>;

type DashboardScreenProps = NativeStackScreenProps<
  ScreenPropsList,
  'Dashboard'
>;

type DashboardScreenNavigationProp = NativeStackNavigationProp<
  ScreenPropsList,
  'Dashboard'
>;

type EventDetailsScreenProps = NativeStackScreenProps<
  ScreenPropsList,
  'EventDetails'
>;

type SupplierSelectScreenProps = NativeStackScreenProps<
  ScreenPropsList,
  'SupplierSelect'
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
  DashboardScreenProps,
  DashboardScreenNavigationProp,
  EventListScreenProps,
  SupplierSelectScreenProps,
  ChecklistScreenProps,
  DashboardTabScreenPropsList,
  EventDetailsScreenProps,
  InboxScreenProps,
  NotificationsScreenProps,
};
