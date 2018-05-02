import React from 'react';
import { View, Image } from 'react-native';
import { Header } from 'react-native-elements';
import ListView from './components/ListView';
import MapView from './components/MapView';

import map from './resources/map.png';

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      page: 'map'
    }
  }
  
  renderHeader = () => (
    <Header
      leftComponent={{ icon: 'menu', color: 'white', onPress: () => this.setState({ page: 'list' })}}
      centerComponent={{ text: 'trailze', style: { color: 'white', fontSize: 30, fontFamily: 'System', bottom: -10 } }}
      rightComponent={{ icon: 'home', color: 'white', onPress: () => this.setState({ page: 'map' })}}
      outerContainerStyles={{ backgroundColor: '#4b8b3b', flex: 1 }}
    />
  );
  
  render() {
    if (this.state.page === 'list') {
      return (
      <View style={{ flex: 1, backgroundColor: '#ddd' }}>
          <View style={{ flex: 0.1 }}>
            {this.renderHeader('map')}
          </View>
          <View style={{ flex: 0.9 }}>
            <ListView />
          </View>
      </View>
      )
    } else if (this.state.page === 'map') {
      return (
        <View style={{ flex: 1 }}>
          <View style={{ flex: 0.1 }}>
            {this.renderHeader('list')}
          </View>
          <View style={{ flex: 0.9 }}>
            <MapView/>
          </View>
      </View>
      )
    }
  }
}