import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Image } from 'react-native';
import MapView from 'react-native-maps';
import Modal from 'react-native-modal';
import axios from 'axios';

import currentLocationImage from '../resources/current-location.png';
import viewpoint from '../resources/sight.png';
import warning from '../resources/warning.png';
import trailhead from '../resources/trail-head.png';
import hiker from '../resources/hiker.png';

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
      markers: [],
      creatingMarker: false,
      markerInCreation: {},
      currentMarkerType: 1,
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
      this.addMarker({latitude: lat, longitude: long}, currentLocationImage, true);
      this.forceUpdate();
    },
    (error) => alert(JSON.stringify(error)),
    { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 });
  }

  addMarker = (coordinate, image, currentLocationMarker) => {
    if (currentLocationMarker) {
      style = { width: 16, height: 16 };
    } else {
      style = { width: 25, height: 25 };
    } 
    this.state.markers.push( {coordinate, image, style} );
    this.forceUpdate();
  }
  
  handleLongPress = (coordinate) => {
    this.setState({ markerInCreation: { coordinate: coordinate.nativeEvent.coordinate, image: trailhead}, currentMarkerType: 1});
    this.setState( {'creatingMarker': true} );
  }

  submitMarker = () => {
    this.addMarker(this.state.markerInCreation.coordinate, this.state.markerInCreation.image);
    this.setState({creatingMarker: false, markerInCreation: {}});
    this.forceUpdate();
  }

  renderButton = (text, onPress, number, submitButton) => (
    <TouchableOpacity onPress={onPress}>
      <View style={submitButton ? styles.submitButton : (this.state.currentMarkerType === number ? styles.highlightedButton : styles.button)}>
        <Text>{text}</Text>
      </View>
    </TouchableOpacity>
  );

  renderModalContent = () => (
    <View style={styles.modalContent}>
      <Text>Marker Type:</Text>
      <View style={{ flexDirection: "row" }}>
        {this.renderButton(<Image source={trailhead} style={{width: 40, height: 40}} />, () => { this.state.markerInCreation.image = trailhead; this.setState({ currentMarkerType: 1 }) }, 1)}
        {this.renderButton(<Image source={warning} style={{ width: 40, height: 40 }} />, () => { this.state.markerInCreation.image = warning; this.setState({ currentMarkerType: 2 }) }, 2)}
        {this.renderButton(<Image source={viewpoint} style={{ width: 40, height: 40 }} />, () => { this.state.markerInCreation.image = viewpoint; this.setState({ currentMarkerType: 3 }) }, 3)}
        {this.renderButton(<Image source={hiker} style={{ width: 40, height: 40 }} />, () => { this.state.markerInCreation.image = hiker; this.setState({ currentMarkerType: 4 }) }, 4)}
      </View>
        {this.renderButton('Create marker', this.submitMarker, null, true)}
    </View>
  );

  render () {
    return (
      <View style={styles.containerStyle}>
        <MapView
          style={styles.mapStyle}
          region={this.state.position}
          onRegionChange={ (position) => this.setState({position}) }
          onLongPress={this.handleLongPress}
        >
          {this.state.markers.map((marker) => (
            <MapView.Marker coordinate={marker.coordinate}>
              <Image
                source={marker.image}
                style={marker.style}
              />
            </MapView.Marker>
          ))};
        </MapView>
        <Modal isVisible={this.state.creatingMarker === true} style={styles.bottomModal}>
          {this.renderModalContent()}
        </Modal>
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
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'lightgrey',
    padding: 12,
    margin: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  highlightedButton: {
    backgroundColor: 'lightgreen',
    padding: 12,
    margin: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  submitButton: {
    backgroundColor: 'lightblue',
    padding: 12,
    margin: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  bottomModal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
});