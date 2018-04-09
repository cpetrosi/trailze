import React from 'react';
import { View, TouchableHighlight, Image } from 'react-native';

export default class UGC extends React.Component {
  onPress = term => {
    console.log(term);
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#ddd' }}>
      <TouchableHighlight>
        <Image
          style={styles.button}
          resizeMode='contain'
          source={require('./closed-trail.png')}
          onPress={this.onPress}
        />
      </TouchableHighlight>
      <TouchableHighlight>
        <Image
          style={styles.button}
          resizeMode='contain'
          source={require('./trail-condition.png')}
          onPress={this.onPress}
        />
      </TouchableHighlight>
      <TouchableHighlight>
        <Image
          style={styles.button}
          resizeMode='contain'
          source={require('./wildlife.png')}
          onPress={this.onPress}
        />
      </TouchableHighlight>
      <TouchableHighlight>
        <Image
          style={styles.button}
          resizeMode='contain'
          source={require('./plants.png')}
          onPress={this.onPress}
        />
      </TouchableHighlight>
      <TouchableHighlight>
        <Image
          style={styles.button}
          resizeMode='contain'
          source={require('./tree-falling.png')}
          onPress={this.onPress}
        />
      </TouchableHighlight>
      <TouchableHighlight>
        <Image
          style={styles.button}
          resizeMode='contain'
          source={require('./waterfall.png')}
          onPress={this.onPress}
        />
      </TouchableHighlight>
      <TouchableHighlight>
        <Image
          style={styles.button}
          resizeMode='contain'
          source={require('./icey.png')}
          onPress={this.onPress}
        />
      </TouchableHighlight>
      </View>
    );
  }
}

const styles = {
  button: {
    alignItems: 'center',
    alignSelf: 'center',
    width: 100,
    height: 80
  }
};
