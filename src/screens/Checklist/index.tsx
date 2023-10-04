import { ChecklistScreenProps } from '@/routes/types';
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, IconButton, Button } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Block from '@/components/Block';
import Image from '@/components/Image';
import Text from '@/components/Text';
import { TouchableOpacity } from 'react-native';
import useTheme from '@/core/theme';
// interface CheckboxProps {
//   label: string;
// }

// function CustomCheckbox({ label }: CheckboxProps) {
//   const [checked, setChecked] = useState(false);

//   return (
//     <View style={styles.checkboxContainer}>
//       <Checkbox.Android
//         status={checked ? 'checked' : 'unchecked'}
//         onPress={() => {
//           setChecked(!checked);
//         }}
//       />
//       <Text style={styles.label}>{label}</Text>
//     </View>
//   );
// }

const Checklist = (props: ChecklistScreenProps) => {
  const { navigation } = props;
  const {assets, colors, gradients, sizes} = useTheme();


  const rightButton = () => {
    return (
      <>
        <IconButton
          icon="chevron-right"
          size={36}
          onPress={() => navigation.navigate('SupplierList')}
        />
      </>
    );
  };
  return (
    <SafeAreaProvider>


  <View style={{ height: 145 }} >
    <Block card row marginHorizontal={sizes.sm} marginVertical={sizes.xs}>
      <Image
        resizeMode="contain"
        source={assets?.card1}
        style={{ height: 114 }}
      />
      <Block row flex={1} padding={sizes.s} justify="space-between" align="center">
        <Text h4 semibold>Venues</Text>
        <TouchableOpacity onPress={() => navigation.navigate('SupplierList')}>
          <Image
            source={assets.arrow}
            color={colors.link}
            style={{ width: sizes.sm, height: sizes.sm }}
          />
        </TouchableOpacity>
      </Block>
    </Block>
  </View>

  <View style={{ height: 145 }}>
    <Block card row marginHorizontal={sizes.sm} marginVertical={sizes.xs}>
      <Image
        resizeMode="contain"
        source={assets?.card1}
        style={{ height: 114 }}
      />
      <Block row flex={1} padding={sizes.s} justify="space-between" align="center">
        <Text h4 semibold>Caterings</Text>
        <TouchableOpacity onPress={() => navigation.navigate('SupplierList')}>
          <Image
            source={assets.arrow}
            color={colors.link}
            style={{ width: sizes.sm, height: sizes.sm }}
          />
        </TouchableOpacity>
      </Block>
    </Block>
  </View>

  <View style={{ height: 145 }}>
    <Block card row marginHorizontal={sizes.sm} marginVertical={sizes.xs}>
      <Image
        resizeMode="contain"
        source={assets?.card1}
        style={{ height: 114 }}
      />
      <Block row flex={1} padding={sizes.s} justify="space-between" align="center">
        <Text h4 semibold>Decoration</Text>
        <TouchableOpacity onPress={() => navigation.navigate('SupplierList')}>
          <Image
            source={assets.arrow}
            color={colors.link}
            style={{ width: sizes.sm, height: sizes.sm }}
          />
        </TouchableOpacity>
      </Block>
    </Block>
  </View>




      {/* <Card mode="elevated" style={{ margin: 5 }} elevation={5}>
        <Card.Title title="Venue" right={rightButton} />
      </Card>
      <Card mode="elevated" style={{ margin: 5 }} elevation={5}>
        <Card.Title title="Catering" right={rightButton} />
      </Card>
      <Card mode="elevated" style={{ margin: 5 }} elevation={5}>
        <Card.Title title="Decoration" right={rightButton} />
      </Card>
      <Card mode="elevated" style={{ margin: 5 }} elevation={5}>
        <Card.Title title="Photography" right={rightButton} />
      </Card>
      <Card mode="elevated" style={{ margin: 5 }} elevation={5}>
        <Card.Title title="Videography" right={rightButton} />
      </Card> */}
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 20,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 350,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  label: {
    fontSize: 16,
    marginLeft: 10,
  },
});

export default Checklist;
