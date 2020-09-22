import React from 'react';
import SvgUri from 'react-native-svg-uri';
import {View, Text} from 'react-native';
import {Button} from 'react-native-elements';
import {useNavigation} from 'react-navigation-hooks';

import {styles} from './walkthrough.styles';

const Walkthrough = () => {
  const {navigate} = useNavigation();

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Rentapp</Text>
      </View>
      <View style={styles.containerImage}>
        <Text style={styles.containerText}>
          Aplicativo especializado en búsqueda y renta de casa, Haz tú negocio
          con tan solo 2 pasos
        </Text>
      </View>
      <View style={{...styles.containerImage, marginTop: 42}}>
        <SvgUri
          width="299"
          height="151"
          source={require('./../../../assets/svg/tutorial.svg')}
        />
      </View>
      <View style={{flex: 1, padding: 18}}>
        <View style={{marginBottom: 18}}>
          <Button
            onPress={() => {
              navigate('Login');
            }}
            title="Iniciar Sesión"
            buttonStyle={styles.loginButton}
            titleStyle={styles.loginTitle}
          />
        </View>
        <View>
          <Button
            onPress={() => {
              navigate('Sign');
            }}
            title="Registrarse"
            buttonStyle={styles.signButton}
            titleStyle={styles.signTitle}
          />
        </View>
      </View>
    </>
  );
};

Walkthrough.navigationOptions = () => ({
  headerShown: false,
});

export default Walkthrough;
