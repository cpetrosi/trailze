import React from 'react';
import { Header } from 'react-native-elements';

const AppHeader = (props) => (
  <Header
    leftComponent={{ icon: 'menu', color: 'white', onPress: () => console.log('pressed') }}
    centerComponent={{text: 'trailze', style: { color: 'white', fontSize: 30, fontFamily: 'System', bottom: -10 }}}
    outerContainerStyles={{ backgroundColor: '#4b8b3b', flex: 1 }}
  />
);

export default AppHeader;
