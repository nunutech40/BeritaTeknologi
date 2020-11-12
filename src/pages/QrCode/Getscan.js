import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const Getscan = ({navigation}) => {
  return (
    <View
      style={{
        justifyContent: "center",
        flex: 1,
        alignItems: "center",
        paddingHorizontal: 20,
      }}
    >
      <TouchableOpacity
        style={{
          height: 50,
          backgroundColor: "#7f7f7f",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
        onPress={() => navigation.navigate('QrCode')}
      >
        <Text>Scan QR Code</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Getscan

const styles = StyleSheet.create({})
