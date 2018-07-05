import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, InfoWindow, Marker } from 'react-google-maps';
import InfoBox from "react-google-maps/lib/components/addons/InfoBox";

class ClinicMap extends Component {
  render() {
 
   
    const GoogleMapExample = withGoogleMap(props => (
      <GoogleMap
        defaultCenter = { { lat: 40.756795, lng: -73.954298 } }
        defaultZoom = { 13 }
      >
        {this.props.markers.map(marker => (
          <Marker
            key={marker.id}
            position= {{lat: 40.756795, lng: -73.954298}}
            onClick={() => this.props.onToggleOpen(marker)}
          >

          {this.props.isOpen && <InfoBox
            onCloseClick={props.onToggleOpen}
            // options={{ closeBoxURL: ``, enableEventPropagation: true }}
          >
            <div style={{ backgroundColor: `yellow`, opacity: 0.75, padding: `12px` }}>
              <div style={{ fontSize: `16px`, fontColor: `#08233B` }}>
                Hello, Kaohsiung!
              </div>
            </div>
          </InfoBox>}

          </Marker>
        ))}

      </GoogleMap>
    ));

    return(
      <div className="map-wrapper">
        <GoogleMapExample
          containerElement={ <div style={{ height: `500px`, width: '500px' }} /> }
          mapElement={ <div style={{ height: `100%` }} /> }
        />
      </div>
    );

   }
};

export default ClinicMap;