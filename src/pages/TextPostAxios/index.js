import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

const InputText = ({placeholder ,...rest}) => {
    return(
        <TextInput
            style={{borderWidth: 1, borderColor: 'blue', height: 40, color: 'black'}}
            placeholder={placeholder}
            {...rest}
        />
    )
}
const TestPostAxios = () => {
  const [dataKaryawan, setDataKaryawan] = useState({
      
  });
  const [bodyUser, setBodyUser] = useState({
    name: "",
    job: "",
  });

  const onInputChange =(value, input) => {
    setBodyUser({
        ...bodyUser,
        [input]: value
    })
  }

  const getData = () => {
    Axios.post('https://reqres.in/api/users', bodyUser)
    .then(result => {
        setDataKaryawan(result.data)
    })
    .catch(err => console.log('errornya? ', err.toString()))
      console.log("post response datakaryawan: ", dataKaryawan);
  };

  
  return (
    <View style={{ flex: 1, marginTop: 20, paddingHorizontal: 20 }}>
     <Text>Create Data Karyawan</Text>
        <InputText
            placeholder="Full name"
            onChangeText={(value) => onInputChange(value, "name")}
        />
        <InputText
            placeholder="Pekerjaan"
            onChangeText={(value) => onInputChange(value, "job")}
        />
        <TouchableOpacity style={{ backgroundColor: "blue", width: 300 }}
            onPress={()=>getData()}
        >
          <Text style={{ textAlign: "center", color: "black" }}>
            Create Data
          </Text>
        </TouchableOpacity>
        <Text>Nama Karyawan: {dataKaryawan.name}</Text>
        <Text>Nama Pekerjaan: {dataKaryawan.job}</Text>
    </View>
  );
};

export default TestPostAxios;

const styles = StyleSheet.create({})
