import React from 'react';
import { View } from 'react-native';
import { TabNavigator } from 'react-navigation';
import SearchBar from './components/SearchBar';
import AppHeader from './components/AppHeader';
import MapViews from './components/MapViews';

const API_KEY = 'AIzaSyAmsdTMY6U_Ac5i21bYQaPRpesyG7o4cpY';

class SearchScreen extends React.Component {
  onPressSearch = term => {
    console.log(term);
  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#ddd' }}>
        <AppHeader
          headerText = "Trailze"
        />
        <SearchBar
          onPressSearch={this.onPressSearch}
        />
      </View>
    );
  }
}

class MapScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#ddd' }}>
        <AppHeader
          headerText = "Trailze"
        />
        <MapViews/>
      </View>
    );
  }
}

export default TabNavigator({
  Search: { screen: SearchScreen },
  Map: { screen: MapScreen },
});
