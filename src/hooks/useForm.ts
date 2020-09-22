import {useState} from 'react';

export const useForm = ({initialValue = {}}) => {
  const [formValue, setFormValue] = useState(initialValue);

  const handleInputChange = ({target: {name, value}}) => {
    setFormValue({...formValue, [name]: value});
  };

  return [formValue, handleInputChange];
};
