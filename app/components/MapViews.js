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

// import React from 'react';
// import { StyleSheet, Text, View, Dimensions } from 'react-native';
// import MapView from 'react-native-maps';
//
// const {width, height} = Dimensions.get('window')
// const SCREEN_HEIGHT = height
// const SCREEN_WIDTH = width
// const ASPECT_RATIO = width / height
// const LATITUDE_DELTA = 0.0922
// const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO
//
// export default class App extends React.Component {
//   constructor(props) {
//     super(props)
//
//     this.state = {
//       initialPosition: {
//         latitude: 0,
//         longitude: 0,
//         latitudeDelta: 0,
//         longitudeDelta: 0
//       },
//       markerPosition: {
//         latitude: 0,
//         longitude: 0
//       }
//     }
//   }
//
//   watchID: ?number = null
//   componentMounted () {
//     navigator.geolocation.getCurrentPosition((position) => {
//       var lat = parseFloat(position.coords.latitude)
//       var long = parseFloat(position.coords.longitude)
//
//       var initialRegion = {
//         latitude: lat,
//         longitude: long,
//         latitudeDelta: LATITUDE_DELTA,
//         longitudeDelta: LONGITUDE_DELTA
//       }
//
//       this.setState({initialPosition: initialRegion})
//       this.setState({markerPosition: initialRegion})
//     },
//     (error) => alert(JSON.stringify(error)),
//     {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000})
//
//     this.watchID = navigator.geolocation.watchPosition((position) => {
//       var lat = parseFloat(position.coords.latitude)
//       var long = parseFloat(position.coords.longitude)
//
//       var lastRegion = {
//         latitude: lat,
//         longitude: long,
//         latitudeDelta: LATITUDE_DELTA,
//         longitudeDelta: LONGITUDE_DELTA
//       }
//
//       this.setState({initialPosition: lastRegion})
//       this.setState({markerPosition: lastRegion})
//     })
//   }
//
//   componentUnmounted () {
//     navigator.geolocation.clearWatch(this.watchID)
//   }
//
//   render () {
//     return (
//       <View style={styles.containerStyle}>
//         <MapView
//           style={styles.mapStyle}
//           region={this.state.initialPosition}>
//           <MapView.Marker
//             coordinate={this.state.markerPosition}>
//             <View style={styles.radius}>
//               <View style={styles.marker}>
//               </View>
//             </View>
//           </MapView.Marker>
//         </MapView>
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   containerStyle: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//
//   mapStyle: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     bottom: 0,
//     right: 0
//   },
//
//   radius: {
//     height: 50,
//     width: 50,
//     borderRadius: 50 / 2,
//     overflow: 'hidden',
//     backgroundColor: 'rgba(0, 122, 255, 0.1)',
//     borderWidth: 1,
//     borderColor: 'rgba(0, 112, 255, 0.3)',
//     alignItems: 'center',
//     justifyContent: 'center'
//   },
//
//   marker: {
//     height: 20,
//     width: 20,
//     borderWidth: 3,
//     borderColor: 'white',
//     borderRadius: 20 / 2,
//     overflow: 'hidden',
//     backgroundColor: '#007AFF'
//   }
// });
//