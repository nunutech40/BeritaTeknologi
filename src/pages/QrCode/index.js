import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons'

const QrCode = ({navigation}) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [statCenter, setStatCenter] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-end",
      }}
    >
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      <TouchableOpacity
        style={{
          height: 70,
          width: 70,
          borderRadius: 70 / 2,
          backgroundColor: "rgba(1,1,1, 0.4)",
          position: "absolute",
          bottom: 65,
          right: 50,
          justifyContent: 'center',
          alignItems: 'center'
        }}
        onPress={()=> navigation.goBack()}
      >
        <IconMCI name="close-circle" size={35} color="white" />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          height: 70,
          width: 70,
          borderRadius: 70 / 2,
          backgroundColor: "rgba(1,1,1, 0.4)",
          position: "absolute",
          bottom: 65,
          left: 50,
          justifyContent: 'center',
          alignItems: 'center'
        }}
        onPress={() => setStatCenter(!statCenter)}
      >
          {statCenter == true ? (
          <IconMCI name="flashlight" size={35} color="white" />
        ) : (
          <IconMCI name="flashlight-off" size={27} color="white" />
        )}
        
      </TouchableOpacity>
      {scanned && (
        <Button title={"Tap to Scan Again"} onPress={() => setScanned(false)} />
      )}
    </View>
  );
};

export default QrCode;

const styles = StyleSheet.create({})
