import React from 'react';
import { View } from 'react-native';
import SearchBar from './components/SearchBar';
import AppHeader from './components/AppHeader';

export default class App extends React.Component {
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
