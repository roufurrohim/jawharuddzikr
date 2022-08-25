import React, {useState} from 'react';
import {
  Text,
  View,
  ScrollView,
  FlatList,
  // SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import HeadBar from '../../components/HeadBar';
import Colors from '../../components/Colors';
import { windowWidth } from '../../components/Dimentions';
// import {bg_num} from '../../assets';

// import {Box, Circle, Col, Line, Padder, Row, ScaledText} from 'urip-rn-kit';

const HomeScreen = props => {
  const datas = [
    {
      id: '١',
      name: 'Dzikrul Ghafilin',
      title: 'ذِكْرُالغَافِلِيْنَ',
    },
    {
      id: '٢',
      name: 'Dzikrul Ghafilin',
      title: 'ذِكْرُالغَافِلِيْنَ',
    },
    {
      id: '٣',
      name: 'Dzikrul Ghafilin',
      title: 'ذِكْرُالغَافِلِيْنَ',
    },
    {
      id: '٤',
      name: 'Dzikrul Ghafilin',
      title: 'ذِكْرُالغَافِلِيْنَ',
    },
    {
      id: '٥',
      name: 'Dzikrul Ghafilin',
      title: 'ذِكْرُالغَافِلِيْنَ',
    },
    {
      id: '٦',
      name: 'Dzikrul Ghafilin',
      title: 'ذِكْرُالغَافِلِيْنَ',
    },
    {
      id: '٧',
      name: 'Dzikrul Ghafilin',
      title: 'ذِكْرُالغَافِلِيْنَ',
    },
    {
      id: '٨',
      name: 'Dzikrul Ghafilin',
      title: 'ذِكْرُالغَافِلِيْنَ',
    },
    {
      id: '٩',
      name: 'Dzikrul Ghafilin',
      title: 'ذِكْرُالغَافِلِيْنَ',
    },
    {
      id: '١٠',
      name: 'Dzikrul Ghafilin',
      title: 'ذِكْرُالغَافِلِيْنَ',
    },
  ];

  const [selectedId, setSelectedId] = useState(null);

  const Item = ({item, onPress, backgroundColor, textColor}) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
      <ScrollView>
        <View style={styles.card}>
          <Text style={[styles.title, textColor]}>{item.id}</Text>
          <View>
            <Text style={[styles.title, textColor]}>{item.title}</Text>
          </View>
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
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{backgroundColor}}
        textColor={{color}}
      />
    );
  };
  return (
    <View style={styles.container}>
      <HeadBar title="جَوْهَرُالذِّكْرِ" />
      <FlatList
        data={datas}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
        scrollEnabled={true}
        style={styles.flat}
      />
    </View>
  );
};

const styles = StyleSheet.create({
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
    height: 70,
    width: '100%',
  },
  item: {
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 30,
    paddingRight: 30,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 50,
    borderStyle: 'solid',
    borderColor: Colors.primary,
    borderWidth: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: '400',
  },
});

export default HomeScreen;
