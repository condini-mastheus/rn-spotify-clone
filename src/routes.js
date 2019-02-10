import { createAppContainer, createStackNavigator } from 'react-navigation';
import { colors } from '~/styles';

import Main from '~/screens/Main';
import Search from '~/screens/Search';
import Album from '~/screens/Album';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main,
      Search,
      Album,
    },
    {
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: colors.secundary,
          borderBottomWidth: 0,
        },
        headerTintColor: colors.white,
        headerBackTitle: false,
      },
    },
  ),
);

export default Routes;
