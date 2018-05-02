import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Image } from 'react-native';
import MapView from 'react-native-maps';
import Modal from 'react-native-modal';
import axios from 'axios';
import $ from 'jquery';

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
        latitudeDelta: 0.3,
        longitudeDelta: 0.3 * aspectRatio,
      }

      this.setState({ position });
      this.addMarker({latitude: lat, longitude: long}, currentLocationImage, true);
      hikesToBeAdded.forEach((hike) => {
        this.addMarker(hike.coordinates, hiker, false, hike.name, hike.description, true);
      })
      this.forceUpdate();
    },
    (error) => alert(JSON.stringify(error)),
    { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 });
  }

  addMarker = (coordinate, image, currentLocationMarker, title, description, hike) => {
    if (currentLocationMarker) {
      style = { width: 16, height: 16 };
    } else if (hike) {
      style = { width: 35, height: 35 };
    } else {
      style = { width: 20, height: 20 };
    } 
    this.state.markers.push( {coordinate, image, style, title, description} );
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
      </View>
        {this.renderButton('Create marker', this.submitMarker, null, true)}
    </View>
  );

  render () {
    let reactMarkers = this.state.markers.map((marker) => (
      <MapView.Marker coordinate={marker.coordinate}>
        <Image
          source={marker.image}
          style={marker.style}
        />
      </MapView.Marker>
    ));
    return (
      <View style={styles.containerStyle}>
        <MapView
          style={styles.mapStyle}
          region={this.state.position}
          onRegionChange={ (position) => this.setState({position}) }
          onLongPress={this.handleLongPress}
        >
          {this.state.markers.map((marker) => (
            <MapView.Marker coordinate={marker.coordinate} title={marker.title}>
              <Image
                source={marker.image}
                style={marker.style}
              />
            </MapView.Marker>
          ))}
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

hikesToBeAdded = [
  {
    name: 'Runyon Canyon',
    average_rating: 0,
    num_of_raters: 0,
    coordinates: { latitude: 34.113738, longitude: -118.350094 },
    description: 'An exercisers paradise in the Hollywood Hills, Runyons the ' +
      'spot for views of the toned bodies and even tonier homes endemic to this ' +
      'part of L.A. The packed dirt path leads hikers, runners, yoga enthusiasts ' +
      'and roving weightlifters on a loop around the canyon, guaranteeing ' +
      'countless moments to pause and utter "This is so L.A."—particularly ' +
      'during the after-work rush hour, when people-watching reaches its ' +
      'frenzied peak.',
    image_url: 'https://scng-dash.digitalfirstmedia.com/wp-content/uploads/2018/01/2018_0130_runyon_canyon_02.jpg'
  },

  {
    name: 'Baldwin Hills Scenic Overlook',
    average_rating: 0,
    num_of_raters: 0,
    coordinates: { latitude: 34.017903, longitude: -118.384081 },
    description: 'An oil-rig studded hill on the edge of Culver Citys industrial' +
                    'zone is an odd place for a state park. But thats all part ' +
                    'of this urban overlooks understated charm. A destination ' +
                    'for exercisers south of the 10 freeway, the parks main draw' +
                    'is the steps: more than 260 stone slabs that deliver ' +
                    'hikers—breathless, aching—to the top in under 20 minutes.',
    image_url: 'https://media.timeout.com/images/100519645/1024/768/image.jpg'
  },

  {
    name: 'Echo Mountain',
    average_rating: 0,
    num_of_raters: 0,
    coordinates: { latitude: 34.213089, longitude: -118.120071 },
    description: '"A quiet refuge from people and wild life forever," declares ' +
        'a sign at the entrance to the Sam Merrill Trail. While ' +
        ' youll only linger here for a few hours, forever wouldnt ' +
        'be too long. This hike feels more like a weekend destination ' +
        'than an after-work jaunt, unless you live in the ' +
        'neighborhood. And based on the hydration packs and hiking ' +
        'poles youll see, its a bit more serious hiking, than ' +
        'say, at Griffith, but that doesnt mean its too challenging for a novice.',
    image_url: 'https://media.timeout.com/images/100521773/1024/768/image.jpg'
  }
]