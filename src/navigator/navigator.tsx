import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Walkthrough from '../screens/walkthrough/walkthrough.screen';
import Login from '../screens/login/login.screen';
import Sign from '../screens/sign/sign.screens';
import Home from '../screens/home/home.screens';

const HomeStack = createStackNavigator(
  {
    Walkthrough: {
      screen: Walkthrough,
    },
    Login: {
      screen: Login,
    },
    Sign: {
      screen: Sign,
    },
    Home: {
      screen: Home,
    },
  },
  {
    initialRouteName: 'Walkthrough',
  },
);

export default createAppContainer(HomeStack);
