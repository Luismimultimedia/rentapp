export interface InputModel {
  name: string;
  value: string | number;
  validation: string;
  error: boolean;
  errorMsg: string;
  type: string;
  inputProps: InputPropsModel;
}

export interface InputPropsModel {
  secureTextEntry: boolean;
}
