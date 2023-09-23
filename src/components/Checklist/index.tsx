import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Checkbox } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

interface CheckboxProps {
  label: string;
}

function CustomCheckbox({ label }: CheckboxProps) {
  const [checked, setChecked] = useState(false);

  return (
    <View style={styles.checkboxContainer}>
      <Checkbox.Android
        status={checked ? 'checked' : 'unchecked'}
        onPress={() => {
          setChecked(!checked);
        }}
      />
      <Text style={styles.label}>{label}</Text>
    </View>
  );
}

function Checklist() {
  return (
    <SafeAreaProvider style={styles.container}>
      <CustomCheckbox label="Venue" />
      <CustomCheckbox label="Catering" />
      <CustomCheckbox label="Stylist" />
      <CustomCheckbox label="Photography" />
      <CustomCheckbox label="Videography" />
    </SafeAreaProvider>
  );
}

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
