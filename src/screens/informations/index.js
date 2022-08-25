import React, { useState } from 'react';
import {Text, View, StyleSheet, ScrollView, Dimensions, FlatList, TouchableOpacity, Image, Linking} from 'react-native';
import InsetShadow from 'react-native-inset-shadow';
import Colors from '../../components/Colors';
import { WebIcon, Ig, Yt, Fb } from '../../assets/icons';
import HeadBar from '../../components/HeadBar';
import { windowWidth } from '../../components/Dimentions';

const InfoScreen = () => {
  const datas = [
      {
        id: '1',
        icon: WebIcon,
        title: 'darulhudamayak.net',
        url: "https://darulhudamayak.net/",
      },
      {
        id: '2',
        icon: Ig,
        title: '@darulhudamayak',
        url: "https://instagram.com/darulhudamayak?igshid=YmMyMTA2M2Y=",
        // url: "instagram://profile/darulhudamayak"
      },
      {
        id: '3',
        icon: Yt,
        title: 'Darul Huda Mayak',
        url: "vnd.youtube://www.youtube.com/c/DarulHudaMayak007/featured",
      },
      {
        id: '4',
        icon: Fb,
        title: 'Darul Huda Mayak Ponorogo',
        // url: "https://bit.ly/fbDh",
        url: 'fb://profile=DarulHudaMayak'
      },
  ]
  const [selectedId, setSelectedId] = useState(null);

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const Item = ({item, onPress, backgroundColor, textColor}) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
      <ScrollView>
        <View style={styles.card}>
          <View>
            <Text style={[styles.title, textColor]}>{item.title}</Text>
          </View>
          <Image 
            source={item.icon}
            style={{
              width: 50,
              height: 50
            }}
          />
        </View>
      </ScrollView>
    </TouchableOpacity>
  );

  const renderItem = ({item}) => {
    const backgroundColor =
      item.id === selectedId ? Colors.primary : Colors.white;
    const color = item.id === selectedId ? 'white' : 'black';
    return (
      <Item
        item={item}
        onPress={() => {
          Linking.openURL(item.url)
          setSelectedId(item.id)
        }}
        backgroundColor={{backgroundColor}}
        textColor={{color}}
      />
    );
  };


  return (
    <View style={{...styles.container}}>
      <InsetShadow
        shadowColor={"rgb(70, 219, 195)"}
        elevation={80}
        containerStyle={{...styles.shadows, windowHeight, windowWidth}}
        >
        <HeadBar title="Informasi" />
        <FlatList
          data={datas}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          extraData={selectedId}
          scrollEnabled={true}
          style={styles.flat}
        />
      </InsetShadow>
    </View>
  );
};

export default InfoScreen;

const styles = StyleSheet.create({
  shadows: {
    backgroundColor: '#ffffff',
  },
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  flat: {
    textAlign: 'center',
    right: 25,
    left: 25,
    marginTop: 30,
    width: windowWidth - 50,
    marginBottom: 80,
  },
  card: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 80,
    width: '100%',
  },
  item: {
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 20,
    paddingRight: 20,
    marginVertical: 25,
    marginHorizontal: 16,
    borderRadius: 15,
    borderStyle: 'solid',
    borderColor: Colors.primary,
    borderWidth: 1,
  },
  title: {
    fontSize: 14,
    fontWeight: '400',
  },

});
