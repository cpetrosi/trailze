import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps';

export default class MapViews extends React.Component {
  render () {
    return (
      <View style={styles.containerStyle}>
        <MapView
          style={styles.mapStyle}
          initialRegion={{
            latitude: 34.052235,
            longitude: -118.243683,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },

  mapStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  }
});
