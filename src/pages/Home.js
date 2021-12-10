/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';

export function Home() {
  return (
    <>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 25,
          }}>
          React Native
        </Text>
        <Text
          style={{
            color: 'white',
            fontSize: 25,
          }}>
          Ignite
        </Text>
      </View>
    </>
  );
}
