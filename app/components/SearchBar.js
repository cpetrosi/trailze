import React from 'react';
import { View, TextInput } from 'react-native';
import { Button } from 'react-native-elements';

export default class SearchBar extends React.Component {
  state = { term: '' };

  render () {
    const {
      containerStyle,
      searchTextStyle,
      buttonStyle
    } = styles;

    return (
      <View style={containerStyle}>
        <TextInput
          style={searchTextStyle}
          onChangeText={term => this.setState({ term })}
          value={this.state.term}
        />
        <Button
          buttonStyle={buttonStyle}
          title="Search"
          onPress={() => this.props.onPressSearch(this.state.term)}
        />
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    flexDirection: 'row',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10
  },

  searchTextStyle: {
    flex: 1
  },

  buttonStyle: {
    height: 30,
    marginBottom: 8
  }
};
