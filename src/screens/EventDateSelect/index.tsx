import React, { useState } from 'react';
import { View } from 'react-native';
import { Text, Button } from 'react-native-paper';
import {
  DateTimePickerAndroid,
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';
import { EventDateSelectScreenProps } from '@/routes/types';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const EventDateSelect = (props: EventDateSelectScreenProps) => {
  const { navigation } = props;

  const [date, setDate] = useState<Date | undefined>(undefined);

  const onChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    if (selectedDate) {
      const currentDate = selectedDate;
      setDate(currentDate);
    }
  };

  const showMode = () => {
    DateTimePickerAndroid.open({
      value: new Date(),
      onChange,
      mode: 'date',
      display: 'spinner',
      minimumDate: new Date(),
    });
  };

  const showDatepicker = () => {
    showMode();
  };

  return (
    <SafeAreaProvider>
      <Text
        variant="titleLarge"
        style={{
          justifyContent: 'center',
        }}
      >
        When is the Date of your Event?
      </Text>
      <View
        style={{
          justifyContent: 'center',
          marginVertical: 10,
          marginHorizontal: '25%',
          maxWidth: '50%',
        }}
      >
        <Button
          mode="outlined"
          buttonColor="#3D50DF"
          textColor="white"
          labelStyle={{ fontWeight: 'bold' }}
          onPress={showDatepicker}
        >
          {date ? date.toLocaleDateString() : 'Select a Date'}
        </Button>
      </View>
      <Button
        onPress={() => navigation.navigate('SupplierSelect')}
        uppercase={false}
        mode="outlined"
        buttonColor="#3D50DF"
        textColor="white"
        disabled={date == undefined}
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
    </SafeAreaProvider>
  );
};

export default EventDateSelect;
