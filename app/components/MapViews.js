import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import MapView from 'react-native-maps';
import Marker from 'react-native-maps';

const { width, height } = Dimensions.get('window');
const aspectRatio = width / height;

export default class MapViews extends React.Component {
  constructor() {
    super()
    this.state = {
      position: {
        latitude: undefined,
        longitude: undefined,
        latitudeDelta: undefined,
        longitudeDelta: undefined,
      },
      markers: [
        {
          coordinate: {
            latitude: 34.0735579,
            longitude: -117.8373475
          },
          title: "the stuff",
          description: "testing this shit"
        }
      ]
    }
  }
  componentDidMount() {
    navigator.geolocation.getCurrentPosition((position) => {
      var lat = parseFloat(position.coords.latitude);
      var long = parseFloat(position.coords.longitude);

      var position = {
        latitude: lat,
        longitude: long,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0922 * aspectRatio,
      }

      this.setState({ position });
      this.forceUpdate();
    },
    (error) => alert(JSON.stringify(error)),
    { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 });
  }

  addFeatureToMap = (coordinate, position) => {
    this.state.markers.push({coordinate: coordinate.nativeEvent.coordinate});
    this.forceUpdate();
  }

  render () {
    return (
      <View style={styles.containerStyle}>
        <MapView
          style={styles.mapStyle}
          region={this.state.position}
          onRegionChange={ (position) => this.setState({position}) }
          onLongPress={this.addFeatureToMap}
        >
          {this.state.markers.map((marker) => (
            <MapView.Marker
              coordinate={marker.coordinate}
            />
          ))};
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