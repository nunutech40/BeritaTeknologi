import { StatusBar } from 'expo-status-bar';
import React, {useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Home, TestPost } from './pages';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" backgroundColor="blue" />
      <TestPost/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
