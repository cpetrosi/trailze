import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import MapView from 'react-native-maps';
import Marker from 'react-native-maps';
import Modal from 'react-native-modal';
import axios from 'axios';

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
      ],
      creatingMarker: false,
      markerInCreation: {}
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
      axios.get(`/api/express-test`)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    (error) => alert(JSON.stringify(error)),
    { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 });
  }

  longPressOnMap = (coordinate) => {
    this.setState( {creatingMarker: true} );
    // this.setState({markerInCreation: {coordinate}})
  }

  addMarker = (coordinate, type) => {
    this.state.markers.push({coordinate: coordinate.nativeEvent.coordinate});
    this.forceUpdate();
  }

  renderButton = (text, onPress) => (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text>{text}</Text>
      </View>
    </TouchableOpacity>
  );

  renderModalContent = () => (
    <View style={styles.modalContent}>
      <Text>Marker Type:</Text>
      {this.renderButton('Close', () => this.setState({ creatingMarker: false }))}
    </View>
  );

  loadHikes = () => {
  }

  render () {
    return (
      <View style={styles.containerStyle}>
        <MapView
          style={styles.mapStyle}
          region={this.state.position}
          onRegionChange={ (position) => this.setState({position}) }
          onLongPress={this.longPressOnMap}
        >
          {this.state.markers.map((marker) => (
            <MapView.Marker
              coordinate={marker.coordinate}
            />
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