import React from 'react';
import { Header } from 'react-native-elements';

const AppHeader = ({ headerText }) => (
  <Header
    leftComponent={{ icon: 'menu', color: '#fff' }}
    centerComponent={{ text: headerText, style: {color: 'white'} }}
    outerContainerStyles={{ backgroundColor: '#cdaf95' }}
    rightComponent={{ icon: 'map', color: '#fff' }}
  />
);

export default AppHeader;
