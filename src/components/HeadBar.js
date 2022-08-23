import React, {useState} from 'react';
import {View, StyleSheet, TextInput, StatusBar, Text} from 'react-native';
import Color from './Colors';
import Icon, {Icons} from './Icons';
import {windowWidth} from './Dimentions';

const HeadBar = ({...rest}) => {
  const [state, setState] = useState({
    search: false,
  });

  const handleOpenSearch = () => {
    setState({
      search: !state.search,
    });
  };
  return (
    <View style={styles.searchBarContainer}>
      <StatusBar
        animated={true}
        backgroundColor={Color.primary}
        showHideTransition="none"
      />
      <View style={styles.HeadBarStyle}>
        <Text style={styles.title}>جَوْهَرُالذِّكْرِ</Text>
        {/* <Icon
          type={Icons.Feather}
          name={'search'}
          color={Color.white}
          style={styles.searchIcon}
          onPress={handleOpenSearch}
        /> */}
        {/* <Icon
          type={Icons.Feather}
          name={'x'}
          color={Color.white}
          style={styles.searchIcon}
        /> */}
      </View>
      {state.search ? (
        <View style={styles.searchBar}>
          <Icon
            type={Icons.Feather}
            name={'X'}
            color={Color.primary}
            style={styles.searchIcon}
          />
          <TextInput
            style={styles.searchBarInput}
            {...rest}
            placeholder="Dzikrul Ghafiliin"
          />
        </View>
      ) : null}
    </View>
  );
};

export default HeadBar;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  HeadBarStyle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  title: {
    color: Color.white,
    fontSize: 34,
    fontWeight: 'bold',
  },
  searchBarContainer: {
    height: 70,
    // height: 130,
    width: '100%',
    backgroundColor: Color.primary,
    justifyContent: 'center',
    padding: 10,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  searchBar: {
    flexDirection: 'row',
    backgroundColor: Color.white,
    borderRadius: 15,
    paddingHorizontal: 20,
    alignItems: 'center',
    marginTop: 20,
  },
  searchIcon: {
    position: 'absolute',
    right: 10,
    textAlign: 'right',
  },
  searchBarInput: {
    fontSize: 16,
    width: windowWidth - 100,
  },
});
