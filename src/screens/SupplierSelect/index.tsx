import React, { useState, Dispatch, SetStateAction } from 'react';
import { Button, Text, Checkbox } from 'react-native-paper';
import Slider from '@react-native-community/slider';
import { SupplierSelectScreenProps } from '@/routes/types';
import { GestureResponderEvent, View } from 'react-native';

const SupplierSelect = (props: SupplierSelectScreenProps) => {
  const budget = 20000;
  const [venueChecked, setVenueChecked] = useState<boolean>(false);
  const [cateringChecked, setCateringChecked] = useState<boolean>(false);
  const [photographyChecked, setPhotographyChecked] = useState<boolean>(false);
  const [decorationChecked, setDecorationChecked] = useState<boolean>(false);
  const [videographyChecked, setVideographyChecked] = useState<boolean>(false);
  const [venueAmount, setVenueAmount] = useState<number>(budget);
  const [cateringAmount, setCateringAmount] = useState<number>(budget);
  const [photographyAmount, setPhotographyAmount] = useState<number>(budget);
  const [decorationAmount, setDecorationAmount] = useState<number>(budget);
  const [videographyAmount, setVideographyAmount] = useState<number>(budget);
  const [supplierChecked, setSupplierChecked] = useState<boolean>(false);
  const [selectedAll, setSelectedAll] = useState<boolean>(false);
  const { navigation } = props;

  const checkboxStatus = [
    venueChecked,
    cateringChecked,
    photographyChecked,
    decorationChecked,
    videographyChecked,
  ];

  const hasChecked = checkboxStatus.filter((status) => status == false);

  const setAmount =
    (setAmount: Dispatch<SetStateAction<number>>) => (value: number) =>
      setAmount(Math.trunc(value));

  const select =
    (setCheck: Dispatch<SetStateAction<boolean>>) =>
    (status: boolean) =>
    (event: GestureResponderEvent) =>
      setCheck(!status);

  const selectAll = (event: GestureResponderEvent) => {
    if (selectedAll == false) {
      setVenueChecked(true);
      setCateringChecked(true);
      setPhotographyChecked(true);
      setDecorationChecked(true);
      setVideographyChecked(true);
      setSelectedAll(true);
    } else {
      setVenueChecked(false);
      setCateringChecked(false);
      setPhotographyChecked(false);
      setDecorationChecked(false);
      setVideographyChecked(false);
      setSelectedAll(false);
    }
  };

  const is = (checked: boolean) => (checked ? 'checked' : 'unchecked');

  const disableButton =
    !venueChecked &&
    !cateringChecked &&
    !photographyChecked &&
    !decorationChecked;

  return (
    <>
      <Text
        variant="headlineLarge"
        style={{ textAlign: 'center', justifyContent: 'space-evenly' }}
      >
        {budget}
      </Text>
      <View>
        <View
          style={{
            flexDirection: 'row',

            paddingHorizontal: 5,
          }}
        >
          <Text variant="titleLarge" style={{ margin: 5 }}>
            Select All
          </Text>
          <Checkbox status={is(selectedAll)} onPress={selectAll} />
        </View>
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
            status={is(venueChecked)}
            onPress={select(setVenueChecked)(venueChecked)}
          />
          <Slider
            style={{ width: 200, height: 40 }}
            minimumValue={1}
            maximumValue={budget}
            value={venueAmount}
            disabled={!venueChecked}
            minimumTrackTintColor="#3D50DF"
            maximumTrackTintColor="#000000"
            thumbTintColor="#FFFFFF"
            onValueChange={setAmount(setVenueAmount)}
          />
          <Text style={{ margin: 5 }}>P{venueAmount}</Text>
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
            status={is(cateringChecked)}
            onPress={select(setCateringChecked)(cateringChecked)}
          />
          <Slider
            style={{ width: 200, height: 40 }}
            minimumValue={1}
            maximumValue={budget}
            value={cateringAmount}
            disabled={!cateringChecked}
            minimumTrackTintColor="#3D50DF"
            maximumTrackTintColor="#000000"
            thumbTintColor="#FFFFFF"
            onValueChange={setAmount(setCateringAmount)}
          />
          <Text style={{ margin: 5 }}>P{cateringAmount}</Text>
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
            status={is(photographyChecked)}
            onPress={select(setPhotographyChecked)(photographyChecked)}
          />
          <Slider
            style={{ width: 200, height: 40 }}
            minimumValue={1}
            maximumValue={budget}
            value={photographyAmount}
            disabled={!photographyChecked}
            minimumTrackTintColor="#3D50DF"
            maximumTrackTintColor="#000000"
            thumbTintColor="#FFFFFF"
            onValueChange={(value: number) => {
              setPhotographyAmount(Math.trunc(value));
            }}
          />
          <Text style={{ margin: 5 }}>P{photographyAmount}</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 5,
          }}
        >
          <Text variant="titleLarge" style={{ margin: 5 }}>
            Decoration
          </Text>
          <Checkbox
            status={is(decorationChecked)}
            onPress={select(setDecorationChecked)(decorationChecked)}
          />
          <Slider
            style={{ width: 200, height: 40 }}
            minimumValue={1}
            maximumValue={budget}
            value={decorationAmount}
            disabled={!decorationChecked}
            minimumTrackTintColor="#3D50DF"
            maximumTrackTintColor="#000000"
            thumbTintColor="#FFFFFF"
            onValueChange={setAmount(setDecorationAmount)}
          />
          <Text style={{ margin: 5 }}>P{decorationAmount}</Text>
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
            status={is(videographyChecked)}
            onPress={select(setVideographyChecked)(videographyChecked)}
          />
          <Slider
            style={{ width: 200, height: 40 }}
            minimumValue={1}
            maximumValue={budget}
            value={videographyAmount}
            disabled={!videographyChecked}
            minimumTrackTintColor="#3D50DF"
            maximumTrackTintColor="#000000"
            thumbTintColor="#FFFFFF"
            onValueChange={setAmount(setVideographyAmount)}
          />
          <Text style={{ margin: 5 }}>P{videographyAmount}</Text>
        </View>
      </View>
      <Button
        onPress={() => navigation.navigate('Checklist')}
        uppercase={false}
        mode="outlined"
        buttonColor="#3D50DF"
        textColor="white"
        disabled={disableButton}
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
