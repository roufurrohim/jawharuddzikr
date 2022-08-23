import React from 'react';
import {Text, View, StyleSheet, Dimensions} from 'react-native';
import InsetShadow from 'react-native-inset-shadow';
// import {Home} from 'react-native-feather';

const InfoScreen = () => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  return (
    <View style={styles.container}>
      <InsetShadow
        shadowRadius={5}
        shadowColor="rgb(70, 219, 195)"
        containerStyle={styles.shadows}>
        <Text>
          ffbsdfkjsdgjdbgdsgbdfngmbfdngbgfmmdgrjhgdfsghdfjgdjhkfkgjfjdgkldfsjgklfdjgkdfjglkdfsjklgjfggdgfdhhffsfgshtions
        </Text>
      </InsetShadow>
    </View>
  );
};

export default InfoScreen;

const styles = StyleSheet.create({
  container: {
    padding: 1,
    backgroundColor: '#ffffff',
  },
  shadows: {
    backgroundColor: 'none',
  },
});
