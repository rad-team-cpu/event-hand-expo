import React from 'react';
import {
  DateTimePickerAndroid,
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';
import Text from '@/components/Text';
import Button from '@/components/Button';
import { ITextProps, IButtonProps } from '@/constants/types';
import {
  UseFormRegister,
  Control,
  FieldValues,
  Controller,
} from 'react-hook-form';
import { HelperText } from 'react-native-paper';
import { format } from 'date-fns';

type DatePickerProps = {
  name: string;
  label: string;
  defaultValue?: string | Date | null;
  onSavedValue?: string | Date | null;
  iButtonProps?: IButtonProps;
  display: 'spinner' | 'default' | 'clock' | 'calendar';
  maximumDate?: Date;
  minimumDate?: Date;
  iTextprops: ITextProps;
  onValueChange?: (event: DateTimePickerEvent, selectedDate?: Date) => void;
  control: Control<FieldValues, unknown>;
  register: UseFormRegister<FieldValues>;
  errors: FieldValues;
  errorMessage?: string;
  errorState?: boolean;
};

const DatePicker = (props: DatePickerProps) => {
  const {
    name,
    defaultValue,
    label,
    iButtonProps,
    display,
    minimumDate,
    maximumDate,
    onValueChange,
    iTextprops,
    control,
    errors,
    errorMessage,
    errorState,
  } = props;

  return (
    <>
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({ field: { value, onChange } }) => {
          const onDateChange = (
            event: DateTimePickerEvent,
            selectedDate?: Date,
          ) => {
            if (selectedDate) {
              if (onValueChange) {
                onValueChange(event, selectedDate);
              }
              console.log(format(selectedDate, 'MM/dd/yyyy'));
              onChange(selectedDate);
            }
          };
          const showMode = () => {
            DateTimePickerAndroid.open({
              value: value ?? new Date(),
              onChange: onDateChange,
              mode: 'date',
              display,
              minimumDate,
              maximumDate,
            });
          };

          const showDatepicker = () => {
            showMode();
          };

          return (
            <Button {...iButtonProps} onPress={showDatepicker}>
              <Text {...iTextprops}>{label}</Text>
            </Button>
          );
        }}
      />
      <HelperText type="error" visible={errorState ?? !!errors[name]}>
        {errorMessage ?? errors[name]?.message}
      </HelperText>
    </>
  );
};

export default DatePicker;
