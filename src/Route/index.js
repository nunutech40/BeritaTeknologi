import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { Getscan, QrCode } from '../pages';

const RouteStack = createStackNavigator();

const Route = () => {
  return (
    <RouteStack.Navigator
        initialRouteName="Getscan"
    >
      <RouteStack.Screen name="Getscan" component={Getscan}
        options={{headerShown: false}}
      />
      <RouteStack.Screen name="QrCode" component={QrCode}
      options={{headerShown: false}}
      />
    </RouteStack.Navigator>
  );
};

export default Route;

const styles = StyleSheet.create({})
