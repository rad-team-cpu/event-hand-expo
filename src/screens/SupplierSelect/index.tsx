import React, { useState, Dispatch, SetStateAction } from 'react';
import { Checkbox } from 'react-native-paper';
import Slider from '@react-native-community/slider';
import { SupplierSelectScreenProps } from '@/routes/types';
import { GestureResponderEvent, View } from 'react-native';
import Button from '@/components/Button';
import Text from '@/components/Text';
import useTheme from '@/core/theme';

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
  const {assets, colors, gradients, sizes} = useTheme();


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
      <Text h4 center primary margin={sizes.md}
      >
        Total Budget: {budget}
      </Text>
      <View>
        <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 5,
            marginBottom: 10, 
          }}
        >
          <Checkbox status={is(selectedAll)} onPress={selectAll} />
          <Text style={{
              flex: 1,
              fontSize: 16,
            }}>
            Select All
          </Text>
          
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 5,
            marginBottom: 10, 
          }}
        >
          <Checkbox
            status={is(venueChecked)}
            onPress={select(setVenueChecked)(venueChecked)}
          />
          <Text style={{
              flex: 1,
              fontSize: 16,
            }}>
            Venue
          </Text>

          <Slider
            style={{ width: 150, height: 40, flex:2 }}
            minimumValue={1}
            maximumValue={budget}
            value={venueAmount}
            disabled={!venueChecked}
            minimumTrackTintColor="#3D50DF"
            maximumTrackTintColor="#000000"
            thumbTintColor="#FFFFFF"
 
            onValueChange={setAmount(setVenueAmount)}
          />
          <Text style={{
            flex: 0,
            marginHorizontal: 5,
 
          }}>
    P{venueAmount}</Text>
        </View>
        <View 
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 5,
          marginBottom: 10, 
        }}
          >
          <Checkbox
            status={is(cateringChecked)}
            onPress={select(setCateringChecked)(cateringChecked)}
          />
          <Text style={{
              flex: 1,
              fontSize: 16,
            }}>
            Catering
          </Text>

          <Slider
            style={{ width: 150, height: 40, flex: 2}}
            minimumValue={1}
            maximumValue={budget}
            value={cateringAmount}
            disabled={!cateringChecked}
            minimumTrackTintColor="#3D50DF"
            maximumTrackTintColor="#000000"
            thumbTintColor="#FFFFFF"
            onValueChange={setAmount(setCateringAmount)}
          />
        <Text style={{
            flex: 0,
            marginHorizontal: 5,

          }}>P{cateringAmount}</Text>
        </View>
        <View
           style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 5,
            marginBottom: 10, 
          }}
        >
          <Checkbox
            status={is(photographyChecked)}
            onPress={select(setPhotographyChecked)(photographyChecked)}
          />
          <Text style={{
              flex: 1,
              fontSize: 16,
            }}>
            Photography
          </Text>

          <Slider
            style={{ width: 150, height: 40, flex: 2}}
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
        <Text style={{
            flex: 0,
            marginHorizontal: 5,
 
          }}>P{photographyAmount}</Text>
        </View>
        <View
           style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 5,
            marginBottom: 10, 
          }}
        >
        <Checkbox
            status={is(decorationChecked)}
            onPress={select(setDecorationChecked)(decorationChecked)}
          />
          <Text style={{
              flex: 1,
              fontSize: 16,
            }}>
            Decoration
          </Text>

          <Slider
            style={{ width: 150, height: 40, flex:2 }}
            minimumValue={1}
            maximumValue={budget}
            value={decorationAmount}
            disabled={!decorationChecked}
            minimumTrackTintColor="#3D50DF"
            maximumTrackTintColor="#000000"
            thumbTintColor="#FFFFFF"
            onValueChange={setAmount(setDecorationAmount)}
          />
          <Text style={{
            flex: 0,
            marginHorizontal: 5,

          }}>
            P{decorationAmount}</Text>
        </View>
        <View
           style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 5,
            marginBottom: 10, 
          }}
        ><Checkbox
        status={is(videographyChecked)}
        onPress={select(setVideographyChecked)(videographyChecked)}
      />
          <Text style={{
              flex: 1,
              fontSize: 10,
            }}>
            Videography
          </Text>

          <Slider
            style={{ width: 150, height: 40, flex: 2 }}
            minimumValue={1}
            maximumValue={budget}
            value={videographyAmount}
            disabled={!videographyChecked}
            minimumTrackTintColor="#3D50DF"
            maximumTrackTintColor="#000000"
            thumbTintColor="#FFFFFF"
            onValueChange={setAmount(setVideographyAmount)}
          />
        <Text style={{
            flex: 0,
            marginHorizontal: 5,
             
          }}>P{videographyAmount}</Text>
        </View>
      </View>
      <Button
        onPress={() => navigation.navigate('Checklist')}
        disabled={disableButton}
        gradient={gradients.primary}
        margin={sizes.md}
      >
        <Text white bold transform="uppercase">
        NEXT
        </Text>
      </Button>
    </>
  );
};

export default SupplierSelect;
