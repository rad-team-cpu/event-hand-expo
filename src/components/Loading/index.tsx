import React from 'react';
import { View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

const Loading = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <ActivityIndicator animating={true} size={100} color={'#CB0C9F'} />
    </View>
  );
};

export default Loading;
