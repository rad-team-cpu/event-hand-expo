import React, { useState } from 'react';
import { View } from 'react-native';
import {
  DateTimePickerAndroid,
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';
import { EventDateSelectScreenProps } from '@/routes/types';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Text from '@/components/Text';
import Button from '@/components/Button';
import useTheme from '@/core/theme';

const EventDateSelect = (props: EventDateSelectScreenProps) => {
  const { navigation } = props;
  const {assets, colors, gradients, sizes} = useTheme();


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
      <Text h4 center primary margin={sizes.md}>
        When is the date of your Event?
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
          gradient={gradients.info}
          onPress={showDatepicker}
        >
          <Text white bold transform="uppercase">
          {date ? date.toLocaleDateString() : 'Select a Date'}
          </Text>
        </Button>
      </View>
      <Button
        onPress={() => navigation.navigate('EventBudgetInput')}
        disabled={date == undefined}
        gradient={gradients.primary}
        margin={sizes.md}
      ><Text  white bold transform="uppercase">
        NEXT
        </Text>
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
