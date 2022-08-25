import React from 'react';
import { View, StyleSheet, Image} from 'react-native';
import InsetShadow from 'react-native-inset-shadow';
import { ComingSoon } from '../../assets/icons';
import HeadBar from '../../components/HeadBar';

const JadwalScreen = () => {

  return (
      <View style={{...styles.container}}>
        <InsetShadow
          shadowColor="rgb(70, 219, 195)"
          elevation={50}
          shadowRadius={250}
          containerStyle={{...styles.shadows}}
          >
          <HeadBar title="Jadwal Sholat" />
          <View style={[styles.contentImg, {width:400, justifyContent:'center'}]}>
            <Image
              style={styles.imgComing}
              source={ComingSoon}
            />
          </View>
        </InsetShadow>
      </View>
  );
};

export default JadwalScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column"
  },
  shadows: {
    backgroundColor: "none"
  },
  contentImg: {
    justifyContent: "center",
    alignItems: 'center',
    marginVertical: 100
  },
  imgComing: {
  }
});
