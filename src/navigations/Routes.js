import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

// import bottom tabs
import BottomTabs from './BottomTabs';

const Routes = () => {
  return (
    <NavigationContainer>
      <BottomTabs />
    </NavigationContainer>
  );
};

export default Routes;
