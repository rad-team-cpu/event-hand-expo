import { EventBudgetInputScreenProps } from '@/routes/types';
import React, { useState } from 'react';
import { Text, TextInput, HelperText, Button } from 'react-native-paper';

const EventBudgetInput = (props: EventBudgetInputScreenProps) => {
  const { navigation } = props;
  const [error, setError] = useState<boolean>(false);
  const [input, setInput] = useState<string>('');

  const onChange = (text: string) => {
    if (text.match(/^[^\d]+$/g)) {
      setError(true);
    } else {
      setError(false);
    }
    setInput(text);
  };

  const validInput = !input.match(/^$/) && !error;

  return (
    <>
      <Text
        variant="titleLarge"
        style={{
          justifyContent: 'center',
        }}
      >
        Please enter your budget
      </Text>
      <TextInput
        mode="outlined"
        placeholder="Enter Numeric Values Only"
        placeholderTextColor="#60605e"
        keyboardType="number-pad"
        onChangeText={onChange}
        error={error}
      />
      <HelperText type="error" visible={validInput}>
        Enter a valid number
      </HelperText>
      <Button
        onPress={() => navigation.navigate('SupplierSelect')}
        mode="outlined"
        buttonColor="#3D50DF"
        textColor="white"
        disabled={!validInput}
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
        NEXT
      </Button>
    </>
  );
};

export default EventBudgetInput;
