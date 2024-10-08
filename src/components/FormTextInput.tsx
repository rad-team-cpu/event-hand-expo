import React from 'react';
import { IInputProps } from '@/constants/types';
import Input from '@/components/Input';
import { HelperText } from 'react-native-paper';
import {
  UseFormRegister,
  Control,
  FieldValues,
  Controller,
} from 'react-hook-form';

type FormTextInputProps = {
  mode?: 'text' | 'password';
  name: string;
  id?: string;
  label?: string;
  placeholder?: string;
  defaultValue?: string;
  handleChange?: (value: string) => void;
  control: Control<FieldValues, unknown>;
  register: UseFormRegister<FieldValues>;
  errors: FieldValues;
  errorMessage?: string;
  errorState?: boolean;
  iInputProps: IInputProps;
};

const FormTextInput = ({ mode = 'text', ...props }: FormTextInputProps) => {
  const {
    name,
    placeholder,
    control,
    defaultValue,
    handleChange,
    label,
    errors,
    errorMessage,
    errorState,
    iInputProps,
  } = props;

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue ? defaultValue : ''}
      render={({ field: { onChange } }) => {
        const onValueChange = (text: string) => {
          if (handleChange) {
            handleChange(text);
          }
          onChange(text);
        };

        return (
          <>
            <Input
              mode={mode}
              iprops={{
                label: label,
                onChangeText: onValueChange,
                placeholder: placeholder,
                ...iInputProps,
              }}
              // label={label}
              // onChangeText={onValueChange}
              // placeholder={placeholder}
              // {...iInputProps}
              // success={Boolean(registration.name && isValid.name)}
              // danger={Boolean(registration.name && !isValid.name)}
              // onChangeText={(value) => handleChange({name: value})}:
            />
            <HelperText type="error" visible={errorState ?? !!errors[name]}>
              {errorMessage ?? errors[name]?.message}
            </HelperText>
          </>
        );
      }}
    />
  );
};

export default FormTextInput;
