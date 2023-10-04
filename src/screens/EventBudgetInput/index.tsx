import { EventBudgetInputScreenProps } from '@/routes/types';
import React, { useState } from 'react';
import { GestureResponderEvent } from 'react-native';
import { Text, TextInput, HelperText, Button } from 'react-native-paper';

const EventBudgetInput = (props: EventBudgetInputScreenProps) => {
  const { navigation } = props;
  const [error, setError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [input, setInput] = useState<string>('');

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
      <Text
        variant="titleLarge"
        style={{
          justifyContent: 'center',
        }}
      >
        Please enter your estimated budget
      </Text>
      <TextInput
        mode="outlined"
        placeholder="max. 1000000"
        placeholderTextColor="#60605e"
        maxLength={7}
        keyboardType="number-pad"
        onChangeText={onChange}
        error={error}
      />
      <HelperText type="error" visible={error}>
        {errorMessage}
      </HelperText>
      <Button
        onPress={next}
        mode="outlined"
        buttonColor="#3D50DF"
        textColor="white"
        disabled={error}
        labelStyle={{ fontWeight: 'bold' }}
        style={{
          position: 'relative',
          justifyContent: 'center',
          margin: 16,
          bottom: 0,
          left: 0,
          right: 0,
        }}
      >
      <Text>
        NEXT
      </Text>
      </Button>
    </>
  );
};

export default EventBudgetInput;
