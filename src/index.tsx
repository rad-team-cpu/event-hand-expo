import Welcome from '@/screens/Welcome';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './screens/Home';
import Login from './screens/Login';


const Router = createStackNavigator(
  {
    Welcome,
    Login,
    Home,
  },
  {
    initialRouteName: 'Welcome',
    headerMode: 'none',
  }
);

export default createAppContainer(Router);
