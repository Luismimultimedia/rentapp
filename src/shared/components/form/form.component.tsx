import React, {FC, useState, useEffect} from 'react';
import {View, TextInput, Text} from 'react-native';

import {InputModel} from 'src/shared/models/formValue.models';

import {styles} from './form.styles';

interface FormProps {
  readonly fields: Array<InputModel>;
  setLoginValues: (formValues: {}) => void;
}

const getInitialState = (field: Array<InputModel>) => {
  const state: Record<string, any> = {};
  field.map((inputModel: InputModel) => {
    state[inputModel.name] = '';
  });
  return state;
};

const Form: FC<FormProps> = ({fields, setLoginValues}) => {
  const [formValues, setFormValues] = useState(getInitialState(fields));

  const onChangeInput = (name: string, e: any) => {
    setFormValues({...formValues, [name]: e});
    setLoginValues({...formValues, [name]: e});
  };

  useEffect(() => {
    return () => {};
  }, [formValues]);

  return (
    <>
      {fields.map((inputModel: InputModel, index) => {
        console.log('inputs', inputModel);
        return (
          <View key={index} style={{marginBottom: 20}}>
            <TextInput
              {...inputModel.inputProps}
              style={styles.input}
              placeholder={inputModel.name}
              onChangeText={(e) => onChangeInput(inputModel.name, e)}
            />
            {inputModel.error && <Text>{inputModel.errorMsg}</Text>}
          </View>
        );
      })}
    </>
  );
};

export default Form;
