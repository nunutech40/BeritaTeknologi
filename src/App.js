import { StatusBar } from 'expo-status-bar';
import React, {useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Home, HomeAxios, QrCode, TestPost, TextPostAxios } from './pages';
import Route from './Route';
import { NavigationContainer } from '@react-navigation/native'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style='dark' backgroundColor="white" />
      <NavigationContainer>
        <Route />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
