import React, { useState } from 'react';
import { EventTypeScreenProps } from '@/routes/types';
import { View } from 'react-native';
import { RadioButton, Button } from 'react-native-paper';

const EventType = (props: EventTypeScreenProps) => {
  const { navigation } = props;
  const [eventType, setEventType] = useState('');

  return (
    <View>
      <RadioButton.Group
        onValueChange={(value) => setEventType(value)}
        value={eventType}
      >
        <RadioButton.Item label="Wedding" value="WEDDING" />
        <RadioButton.Item label="Birthday" value="BIRTHDAY" />
        <RadioButton.Item label="Baptismal" value="BAPTISMAL" />
        <RadioButton.Item label="Graduation" value="GRADUATION" />
        <RadioButton.Item label="Reunion" value="REUNION" />
        <RadioButton.Item label="Corporate" value="CORPORATE" />
      </RadioButton.Group>
      <Button
        onPress={() => navigation.navigate('EventDateSelect')}
        uppercase={false}
        mode="outlined"
        buttonColor="#3D50DF"
        textColor="white"
        disabled={eventType == ''}
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
    </View>
  );
};

export default EventType;
