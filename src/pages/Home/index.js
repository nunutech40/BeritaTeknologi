import React, { useEffect, useState } from 'react'
import { FlatList, ScrollView, Dimensions, StyleSheet, Text, View, Image, Linking } from 'react-native'

const devwidth = Dimensions.get('window').width;


const HeaderBerita =() => {
    return(
        <View>
            <Text style={{fontSize: 30, fontWeight: 'bold', textAlign: 'center', paddingVertical: 20}}>Berita Teknologi Terupdate</Text>
            <View style={{height: 15, backgroundColor: '#efefefef'}}></View>
        </View>
    )
}
const CellBerita = ({ item }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", paddingHorizontal: 30 }}>
      <Image
        style={{
          height: devwidth / 2,
          width: devwidth,
          marginTop: 20,
          marginBottom: 15,
        }}
        source={{ uri: item.poster }}
      />
      <View style={{ width: "110%" }}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>{item.judul}</Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text
            style={{ fontSize: 18, color: "blue" }}
            onPress={() => Linking.openURL(item.link)}
          >
            Lihat Berita
          </Text>
          <Text style={{ textAlign: "right" }}>{item.waktu}</Text>
        </View>
      </View>
    </View>
  );
};
const Home = () => {
  var TempData = [];
  const [dataBerita, setDataBerita] = useState([{
      judul:'',
      link: '',
      poster: '',
      tipe: '',
      waktu: ''
  }])
  useEffect(() => {
    //call API method GET
    fetch("https://www.news.developeridn.com/teknologi")
      .then((response) => response.json())
      .then(json => {
          setDataBerita(json.data)
          console.log(dataBerita)
      });
  }, []);
  return (
    <View style={{ flex: 1, marginTop: 20 }}>
      <FlatList
        style={{ backgroundColor: "white" }}
        data={dataBerita}
        keyExtractor={(item, index) => item.index}
        renderItem={({ item }) => <CellBerita item={item} />}
        ListHeaderComponent={HeaderBerita}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({})
