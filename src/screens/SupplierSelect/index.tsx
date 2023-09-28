import React, { useState } from 'react';
import { Button, Text, Checkbox } from 'react-native-paper';
import Slider from '@react-native-community/slider';
import { SupplierSelectScreenProps } from '@/routes/types';
import { View } from 'react-native';

const SupplierSelect = (props: SupplierSelectScreenProps) => {
  const [checked, setChecked] = useState(false);
  const { navigation } = props;
  return (
    <>
      <Text
        variant="headlineLarge"
        style={{ textAlign: 'center', justifyContent: 'space-evenly' }}
      >
        5000
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 5,
        }}
      >
        <Text variant="titleLarge" style={{ margin: 5 }}>
          Venue
        </Text>
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
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 5,
        }}
      >
        <Text variant="titleLarge" style={{ margin: 5 }}>
          Catering
        </Text>
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
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 5,
        }}
      >
        <Text variant="titleLarge" style={{ margin: 5 }}>
          Decorations
        </Text>
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
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 5,
        }}
      >
        <Text variant="titleLarge" style={{ margin: 5 }}>
          Photography
        </Text>
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
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 5,
        }}
      >
        <Text variant="titleLarge" style={{ margin: 5 }}>
          Videography
        </Text>
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
      </View>
      <Button
        onPress={() => navigation.navigate('Checklist')}
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
    </>
  );
};

export default SupplierSelect;
