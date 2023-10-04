import React, { useState } from 'react';
import { EventTypeScreenProps } from '@/routes/types';
import { View } from 'react-native';
import { RadioButton} from 'react-native-paper';
import Button from '@/components/Button';
import Text from '@/components/Text';

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
        disabled={eventType == ''}
      >
        <Text>
        NEXT
        </Text>
      </Button>
    </View>
  );
};

export default EventType;
