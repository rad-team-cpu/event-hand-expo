import React, { useState, useCallback } from 'react';
import { Text, TextInput, Checkbox, Button } from 'react-native-paper';
import { DatePickerModal } from 'react-native-paper-dates';
import Slider from '@react-native-community/slider';
import { EventDetailsScreenProps } from '@/routes/types';

const EventDetails = (props: EventDetailsScreenProps) => {
  const { navigation } = props;
  const [text, setText] = useState('');
  const [checked, setChecked] = useState(false);

  const [date, setDate] = useState(undefined);
  const [open, setOpen] = useState(false);

  const onDismissSingle = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const onConfirmSingle = useCallback(
    (params) => {
      setOpen(false);
      setDate(params.date);
    },
    [setOpen, setDate],
  );

  return (
    <>
      <Text variant="titleLarge" style={{ margin: 5 }}>
        What type of event will you be hosting?
      </Text>
      <Button
        onPress={() => setOpen(true)}
        uppercase={false}
        mode="outlined"
        style={{ margin: 5 }}
      >
        Select Event Type
      </Button>
      <Text>{''}</Text>
      <Text variant="titleLarge" style={{ margin: 5 }}>
        When is the date of event?
      </Text>
      <DatePickerModal
        locale="en"
        mode="single"
        visible={open}
        onDismiss={onDismissSingle}
        date={date}
        onConfirm={onConfirmSingle}
      />
      <Button
        onPress={() => setOpen(true)}
        uppercase={false}
        mode="outlined"
        style={{ margin: 5 }}
      >
        DATE
      </Button>
      <Text variant="titleLarge" style={{ margin: 5 }}>
        How much is your budget for the Event
      </Text>
      <TextInput
        label="Budget"
        mode="outlined"
        value={text}
        onChangeText={(text) => setText(text)}
        style={{ margin: 5 }}
      />
      <Button
        onPress={() => navigation.navigate('SupplierSelect')}
        uppercase={false}
        mode="outlined"
        buttonColor="#3D50DF"
        textColor="white"
        labelStyle={{ fontWeight: 'bold' }}
        style={{
          position: 'absolute',
          justifyContent: 'center',
          margin: 16,
          bottom: 0,
          left: 0,
          right: 0,
        }}
      >
        NEXT
      </Button>
      {/* <Checkbox
        status={checked ? 'checked' : 'unchecked'}
        onPress={() => {
          setChecked(!checked);
        }}
      />
      <Slider
        style={{ width: 200, height: 40 }}
        minimumValue={0}
        maximumValue={1}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#000000"
      /> */}
    </>
  );
};

export default EventDetails;
