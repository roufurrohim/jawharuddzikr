/* eslint-disable no-unused-vars */
import React, {useEffect, useRef} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon, {Icons} from '../components/Icons';
import Colors from '../components/Colors';
import * as Animatable from 'react-native-animatable';

// import screens
import HomeScreen from '../screens/home';
import InfoScreen from '../screens/informations';
import JadwalScreen from '../screens/jadwalSholat';

const Tab = createBottomTabNavigator();

const animate1 = {
  0: {scale: 0.5, translateY: 7},
  1: {scale: 1.2, translateY: -14},
};
const animate2 = {
  0: {scale: 1.2, translateY: -14},
  1: {scale: 1, translateY: 7},
};

const circle1 = {
  0: {scale: 0},
  1: {scale: 1},
};
const circle2 = {0: {scale: 1}, 1: {scale: 0}};

const TabArr = [
  {
    route: 'Informations',
    label: 'info',
    type: Icons.Feather,
    icons: 'info',
    component: InfoScreen,
  },
  {
    route: 'Home',
    label: 'Home',
    type: Icons.Feather,
    icons: 'home',
    component: HomeScreen,
  },
  {
    route: 'JadwalSholat',
    label: 'Jadwal',
    type: Icons.Feather,
    icons: 'clock',
    component: JadwalScreen,
  },
];

const TabButton = props => {
  const {item, onPress, accessibilityState} = props;
  const focused = accessibilityState.selected;
  const viewRef = useRef(null);
  const circleRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    if (focused) {
      viewRef.current.animate(animate1);
      circleRef.current.animate(circle1);
      textRef.current.transitionTo({scale: 1});
    } else {
      viewRef.current.animate(animate2);
      circleRef.current.animate(circle2);
      textRef.current.transitionTo({scale: 0});
    }
  }, [focused]);

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={styles.container}>
      <Animatable.View ref={viewRef} duration={300} style={styles.container}>
        <View style={styles.btn}>
          <Animatable.View
            ref={circleRef}
            duration={300}
            style={styles.circle}
          />
          <Icon
            type={item.type}
            name={item.icons}
            color={focused ? Colors.white : Colors.primary}
          />
        </View>
        <Animatable.Text ref={textRef} duration={300} style={styles.text}>
          {item.label}
        </Animatable.Text>
      </Animatable.View>
    </TouchableOpacity>
  );
};

const BottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 60,
          position: 'absolute',
          bottom: 16,
          right: 60,
          left: 60,
          borderRadius: 16,
        },
        unmountOnBlur: false,
      }}>
      {TabArr.map((item, index) => {
        return (
          <Tab.Screen
            key={index}
            name={item.route}
            component={item.component}
            options={{
              tabBarShowLabel: false,
              tabBarButton: props => <TabButton {...props} item={item} />,
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
};

export default BottomTabs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
  },
  tabBar: {
    height: 70,
    position: 'absolute',
    bottom: 16,
    right: 16,
    left: 16,
    borderRadius: 16,
  },
  btn: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 4,
    borderColor: Colors.white,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primary,
    borderRadius: 25,
  },
  text: {
    fontSize: 10,
    textAlign: 'center',
    color: Colors.primary,
  },
});
