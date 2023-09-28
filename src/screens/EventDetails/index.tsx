import React from 'react';
import { Text, TextInput, Checkbox } from 'react-native-paper';
import Slider from '@react-native-community/slider';

const EventDetails = () => {
  const [text, setText] = React.useState('');
  const [checked, setChecked] = React.useState(false);

  return (
    <>
      <Text>Questionnire</Text>
      <TextInput
        label="Email"
        value={text}
        onChangeText={(text) => setText(text)}
      />
      <TextInput
        label="Email"
        value={text}
        onChangeText={(text) => setText(text)}
      />
      <TextInput
        label="Email"
        value={text}
        onChangeText={(text) => setText(text)}
      />
      <Checkbox
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
      />
    </>
  );
};

export default EventDetails;
