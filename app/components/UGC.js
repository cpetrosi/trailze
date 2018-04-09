import React from 'react';
import { View, TouchableHighlight, Image } from 'react-native';

export default class UGC extends React.Component {
  onPress = term => {
    console.log(term);
  }

  render() {
    return (
      <TouchableHighlight>
        <Image
          style={styles.button}
          resizeMode='contain'
          source={require('./resources/closed-trail.png')}
          onPress={this.onPress}
        />
      </TouchableHighlight>
      <TouchableHighlight>
        <Image
          style={styles.button}
          resizeMode='contain'
          source={require('./resources/trail-condition.png')}
          onPress={this.onPress}
        />
      </TouchableHighlight>
      <TouchableHighlight>
        <Image
          style={styles.button}
          resizeMode='contain'
          source={require('./resources/wildlife.png')}
          onPress={this.onPress}
        />
      </TouchableHighlight>
      <TouchableHighlight>
        <Image
          style={styles.button}
          resizeMode='contain'
          source={require('./resources/plants.png')}
          onPress={this.onPress}
        />
      </TouchableHighlight>
      <TouchableHighlight>
        <Image
          style={styles.button}
          resizeMode='contain'
          source={require('./resources/tree-falling.png')}
          onPress={this.onPress}
        />
      </TouchableHighlight>
      <TouchableHighlight>
        <Image
          style={styles.button}
          resizeMode='contain'
          source={require('./resources/waterfall.png')}
          onPress={this.onPress}
        />
      </TouchableHighlight>
      <TouchableHighlight>
        <Image
          style={styles.button}
          resizeMode='contain'
          source={require('./resources/icey.png')}
          onPress={this.onPress}
        />
      </TouchableHighlight>
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
