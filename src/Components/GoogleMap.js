import React from "react";

//This map courtesy of: @react-google-maps/api 
import {
    GoogleMap,
    useLoadScript,
    Marker,
    InfoWindow,
  } from "@react-google-maps/api";
//   import usePlacesAutocomplete, {
//     getGeocode,
//     getLatLng,
//   } from "use-places-autocomplete";
//   import {
//     Combobox,
//     ComboboxInput,
//     ComboboxPopover,
//     ComboboxList,
//     ComboboxOption,
//   } from "@reach/combobox";
 import { formatRelative } from "date-fns";

//SCSS styles
import "./googlemap.scss"  
//Map styles
import mapStyles from "./mapStyles"

//Icons
import bear from '../resources/icons/bear.svg'
import carrot from '../resources/icons/carrot.svg'
import broccoli from '../resources/icons/broccoli.svg'
import banana from '../resources/icons/banana.svg'



//Variables
const libraries = ["places"]
const mapContainerStyle = {
    // width: `100vw`,
    // height: `100vh`,
    // Fill container in this case ".map" the top-level div
    width: `100%`,
    height: `100%`,
}
const center = {
    lat: 40.730610,
    lng: -73.935242,
}

const options = {
    styles: mapStyles,
    disableDefaultUI: true,
    zoomControl: true,
}

const Map = (props) => {
    //if user is logged in this sets the center coordinates on the user's home address
    // if (props.currentUser && props.currentUser.user.logged_in) {
    //     const userData = props.currentUser.user
    //     center.lat = userData.latitude
    //     center.lgn = userData.longitude
    // }

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_KEY,
        libraries,
    })
    const [markers, setMarkers] = React.useState([])
    const [selected, setSelected] = React.useState(null)
    const onMapClick = React.useCallback((event) => {
        console.log(event)
        setMarkers(current => [...current, {
            lat: event.latLng.lat(),
            lng: event.latLng.lng(),
            time: new Date(),
        }] )
    }, [])

    const mapRef = React.useRef();
    const onMapLoad = React.useCallback((map) => {
        mapRef.current = map
    }, [])


    if (loadError) return "Error loading maps"
    if (!isLoaded) return "Loading maps..."

    return (
        <div className="map" style={{
            width: `100%`,
            height: `100%`,
            boxShadow: `0 0.8rem 1.6rem rgba(0,0,0, .6), 0 .2rem .3rem rgba(0,0,0,1)`,
        }}>
            <GoogleMap 
                mapContainerStyle={mapContainerStyle} 
                zoom={13} 
                center={center}
                options={options}
                onClick={onMapClick}
>
                {markers.map(marker => (
                    <Marker
                        key={marker.time.toISOString()}
                        position={{ lat: marker.lat, lng: marker.lng }}
                        icon={{
                            // url: bear,
                            url: carrot,
                            scaledSize: new window.google.maps.Size(30, 30),
                            origin: new window.google.maps.Point(0, 0),
                            anchor: new window.google.maps.Point(15, 15),
                        }}
                        onLoad={onMapLoad}
                        onClick={() => {
                            setSelected(marker)
                        }}
                    />   
                ))}    

                {selected ? (
                    <InfoWindow position={{ lat: selected.lat, lng: selected.lng }}>
                        <div>
                            <h2>Bear Spotted!</h2>
                            <p>Time: {formatRelative(selected.time, new Date())}</p>
                        </div>
                    </InfoWindow>
                ) : null}   

            </GoogleMap>
        </div>
    )
}

export default Map