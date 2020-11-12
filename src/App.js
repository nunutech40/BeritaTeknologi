import { StatusBar } from 'expo-status-bar';
import React, {useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Home } from './pages';

export default function App() {
  
  useEffect(() => {
    console.log('test debug')
  }, )

  return (
    <View style={styles.container}>
      <StatusBar style="auto" backgroundColor="blue" />
      <Home/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
