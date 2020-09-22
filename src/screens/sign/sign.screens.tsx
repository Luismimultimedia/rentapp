import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {NavigationStackScreenComponent} from 'react-navigation-stack';

import HeaderTitle from '../../shared/components/headerTitle/headerTitle.component';
import {COLORS} from '../../libs/constants';
import {styles} from './sign.styles';

type Params = {userId: string};

type ScreenProps = {language: string};

const Sign: NavigationStackScreenComponent<Params, ScreenProps> = () => {
  return (
    <View style={styles.main_container}>
      {/* Title of login */}
      <View>
        <Text style={styles.main_text}>
          Inicia Sesión para que veas como va la renta de tus propiedades o para
          que busques propiedades para vivir.
        </Text>
      </View>
    </View>
  );
};

Sign.navigationOptions = () => ({
  title: 'Sign',
  headerStyle: {
    backgroundColor: COLORS.white,
    height: 100,
    shadowColor: 'transparent', // hide borderBottom ios
    elevation: 0, // hide borderBottom android
  },
  headerTitleAlign: 'center',
  headerTitle: () => <HeaderTitle title="Registrarse" />,
  headerLeft: () => null,
});

export default Sign;
