import { EventBudgetInputScreenProps } from '@/routes/types';
import React, { useState } from 'react';
import { GestureResponderEvent } from 'react-native';
import { HelperText } from 'react-native-paper';
import Text from '@/components/Text';
import Input from '@/components/Input';
import Button from '@/components/Button';
import useTheme from '@/core/theme';

const EventBudgetInput = (props: EventBudgetInputScreenProps) => {
  const { navigation } = props;
  const [error, setError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [input, setInput] = useState<string>('');
  const {assets, colors, gradients, sizes} = useTheme();


  const onChange = (text: string) => {
    if (!text.match(/^[1-9][0-9]*$/g)) {
      setError(true);
      setErrorMessage('Please Enter a valid number');
    } else if (parseFloat(text) < 10000) {
      setError(true);
      setErrorMessage('Please enter an amount greater than or equal to 10000');
    } else {
      setError(false);
    }
    setInput(text);
  };

  const next = (event: GestureResponderEvent) => {
    if (!input.match(/^[1-9][0-9]*$/g)) {
      setError(true);
      setErrorMessage('Please Enter a valid number');
    } else {
      navigation.navigate('SupplierSelect');
    }
  };

  return (
    <>
      <Text h4 center primary margin={sizes.md}>
        How much is your estimated budget?
      </Text>
      <Input
        placeholder="max. P1,000,000"
        placeholderTextColor="#60605e"
        maxLength={7}
        keyboardType="number-pad"
        onChangeText={onChange}
        marginHorizontal={sizes.m}
        // error={error}
      />
      <HelperText type="error" visible={error}>
        {errorMessage}
      </HelperText>
      <Button
        onPress={next}
        disabled={error}
        gradient={gradients.primary}
        margin={sizes.md}
      >
      <Text white bold transform="uppercase">
        Next
      </Text>
      </Button>
    </>
  );
};

export default EventBudgetInput;
