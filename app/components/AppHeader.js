import React from 'react';
import { Header } from 'react-native-elements';

const AppHeader = ({ headerText }) => (
  <Header
    centerComponent={{ text: headerText, style: {color: 'white'} }}
    outerContainerStyles={{ backgroundColor: '#cdaf95' }}
  />
);

export default AppHeader;
