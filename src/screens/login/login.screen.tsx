import React, {useState} from 'react';
import {useNavigation} from 'react-navigation-hooks';
import {NavigationStackScreenComponent} from 'react-navigation-stack';
import {View, Text} from 'react-native';

import HeaderTitle from '../../shared/components/headerTitle/headerTitle.component';
import {FormLogin} from '../../components/login/form.component';
import {OptionsBtn} from '../../components/login/optionsBtn.component';
import {COLORS} from '../../libs/constants';

import {styles} from './login.styles';

type Params = {userId: string};

type ScreenProps = {language: string};

type loginUser = {username: string; password: string};

const Login: NavigationStackScreenComponent<Params, ScreenProps> = () => {
  const {navigate} = useNavigation();

  const [formValues, setFormValues] = useState<loginUser>({
    username: '',
    password: '',
  });

  const [validForm, setValidForm] = useState<boolean>(true);

  const onChangeInput = (name: string, e: any) => {
    setFormValues({...formValues, [name]: e});
  };

  const onHandleSubmit = () => {
    if (
      formValues.username.toLowerCase() === 'luismimultimedia@gmail.com' &&
      formValues.password === '12345'
    ) {
      setValidForm(true);
      navigate('');
    } else {
      setValidForm(false);
    }
  };

  return (
    <View style={styles.main_container}>
      {/* Title of login */}
      <View>
        <Text style={styles.main_text}>
          Inicia Sesión para que veas como va la renta de tus propiedades o para
          que busques propiedades para vivir.
        </Text>
      </View>
      {/* Form Component*/}
      <View style={{marginTop: 30}}>
        <FormLogin
          onChangeInput={onChangeInput}
          onHandleSubmit={onHandleSubmit}
          validForm={validForm}
        />
        <OptionsBtn />
      </View>
    </View>
  );
};

Login.navigationOptions = () => ({
  title: 'Home',
  headerStyle: {
    backgroundColor: COLORS.white,
    height: 100,
    shadowColor: 'transparent', // hide borderBottom ios
    elevation: 0, // hide borderBottom android
  },
  headerTitleAlign: 'center',
  headerTitle: () => <HeaderTitle title="Iniciar Sesión" />,
  headerLeft: () => null,
});

export default Login;
