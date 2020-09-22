import React, {FC} from 'react';
import {View, TextInput, Text} from 'react-native';
import {Button} from 'react-native-elements';

import {styles} from '../../screens/login/login.styles';

interface typeFormLogin {
  onChangeInput: (name: string, value: any) => void;
  onHandleSubmit: () => void;
  validForm: boolean;
}

export const FormLogin: FC<typeFormLogin> = ({
  onChangeInput,
  validForm,
  onHandleSubmit,
}) => {
  return (
    <>
      <View style={{marginBottom: 20}}>
        <TextInput
          autoCompleteType="off"
          autoCorrect={false}
          blurOnSubmit={true}
          placeholder="Usuario"
          style={styles.input}
          onChangeText={(e) => onChangeInput('username', e)}
        />
      </View>
      <View style={{marginBottom: 30}}>
        <TextInput
          autoCompleteType="off"
          autoCorrect={false}
          blurOnSubmit={true}
          secureTextEntry={true}
          placeholder="Contraseña"
          style={styles.input}
          onChangeText={(e) => onChangeInput('password', e)}
        />
        {!validForm && (
          <Text style={styles.error}>
            El usuario y/o la contraseña no són correctos, por favor ingrese un
            usuario y/o contraseña correcta
          </Text>
        )}
      </View>
      <View style={{marginBottom: 20}}>
        <Button
          onPress={onHandleSubmit}
          title="Iniciar Sesión"
          buttonStyle={styles.loginButton}
          titleStyle={styles.loginTitle}
        />
      </View>
    </>
  );
};
