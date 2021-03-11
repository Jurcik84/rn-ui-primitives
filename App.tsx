
import React, { useEffect, useRef, useState } from 'react';
import { Text, SafeAreaView } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import Geolocation from '@react-native-community/geolocation';



type ILocation = {
  latitude: number,
  longitude: number
}


function useGeolocation() {
  const [locations, setCoords] = useState<Array<ILocation>>([]);
  const [mapError, setMapError] = useState<null | string>(null);
  let _watchMapId:unknown = null;

  const watchConfig = {
    enableHighAccuracy: true,
    distanceFilter: 100,
    interval: 5000,
    fastestInterval: 2000
  };


  // ok handler
  const geoWatchSuccHandler = ({ coords }) => {
    const list = [...locations, coords]
    setCoords(list);
  };

  // error handler
  const geoWatchErrorHandler = ({ message = "" }) => {
    setMapError(message)
  };

  // geo watch handler
  const clearGeoWatch = (_watchMapId: unknown) => Geolocation.clearWatch(Number(_watchMapId));


  useEffect(() => {
    _watchMapId = Geolocation.watchPosition(geoWatchSuccHandler, geoWatchErrorHandler,
      watchConfig
    );
  }, [locations]);

  useEffect(() => {
    return () => {
      if (_watchMapId !== null) {
        clearGeoWatch(_watchMapId)
      }
    }
  }, [])

  return {
    locations
  }
}



function App() {
  const [region, setRegion] = useState({})
  const { locations = [] } = useGeolocation();


  return (
    <SafeAreaView style={{
      flex: 1
    }} >
  
      {
        locations && locations.length > 0 && <MapView
          style={{
            flex: 1,
            borderWidth: 1
          }}
          region={{
            latitude: locations[0].latitude,
            longitude: locations[0].longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}

          showsUserLocation={ true } 

        // //   onRegionChange={ region => {
        // //     //console.log("Region Changed");
        // //     //this.setState({region});
        // //  } }
        //  onRegionChangeComplete={ region => {
        //     console.log("Region change complete");
        //     setRegion({region});
        //  } }
    
        >
          {
            locations?.map((location: ILocation, index: number) => {
              return <Marker key={index}
                coordinate={{
                  latitude: location?.latitude,
                  longitude: location?.longitude
                }}
                title="Hello"
                description="This is marker"
              />
            })
          }
        </MapView>
      }
    </SafeAreaView>
  );
};


export default App;
