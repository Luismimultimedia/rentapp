import React from 'react';
import {useNavigation} from 'react-navigation-hooks';
import {View} from 'react-native';
import {Button} from 'react-native-elements';

import {styles} from '../../screens/login/login.styles';

export const OptionsBtn = () => {
  const {navigate} = useNavigation();
  return (
    <>
      <View style={{marginBottom: 20}}>
        <Button
          onPress={() => {
            navigate('Sign');
          }}
          title="¿Aún no tienes cuenta? Regístrate aquí"
          buttonStyle={styles.signButton}
          titleStyle={styles.signTitle}
        />
      </View>
      <View style={{marginBottom: 20}}>
        <Button
          onPress={() => {
            navigate('Walkthrough');
          }}
          title="¿Ir Atrás?"
          buttonStyle={styles.backButton}
          titleStyle={styles.backTitle}
        />
      </View>
    </>
  );
};
