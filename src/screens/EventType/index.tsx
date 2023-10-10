import React, { useState } from 'react';
import { EventTypeScreenProps } from '@/routes/types';
import { View, StyleSheet } from 'react-native';
import { RadioButton } from 'react-native-paper';
import Button from '@/components/Button';
import Text from '@/components/Text';
import Block from '@/components/Block';
import useTheme from '@/core/theme';

const EventType = (props: EventTypeScreenProps) => {
  const { navigation } = props;
  const { assets, colors, gradients, sizes } = useTheme();

  const [eventType, setEventType] = useState('');

  return (
    <Block>
      <RadioButton.Group
        onValueChange={(value) => setEventType(value)}
        value={eventType}
      >
        {[
          'Wedding',
          'Birthday',
          'Baptismal',
          'Graduation',
          'Reunion',
          'Corporate',
        ].map((label) => (
          <View key={label} style={styles.radioContainer}>
            <RadioButton.Item label={label} value={label.toUpperCase()} />
          </View>
        ))}
      </RadioButton.Group>
      <Button
        onPress={() => navigation.navigate('EventDateSelect')}
        disabled={eventType === ''}
        gradient={gradients.primary}
        margin={sizes.md}
      >
        <Text white bold transform="uppercase">
          NEXT
        </Text>
      </Button>
    </Block>
  );
};

const styles = StyleSheet.create({
  radioContainer: {
    backgroundColor: 'white', // Set the background color for the rounded container
    borderRadius: 20, // Adjust the border radius as needed
    margin: 6, // Add spacing between each RadioButton.Item
    padding: 4, // Add padding to the container
  },
});

export default EventType;
