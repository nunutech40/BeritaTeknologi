import { StatusBar } from 'expo-status-bar';
import React, {useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Home, HomeAxios, TestPost, TextPostAxios } from './pages';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" backgroundColor="blue" />
      <TextPostAxios/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
