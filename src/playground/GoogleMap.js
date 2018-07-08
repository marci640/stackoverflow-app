import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import InfoBox from "react-google-maps/lib/components/addons/InfoBox";

class ClinicMap extends Component {

  render() {
 
    const GoogleMapExample = withGoogleMap(props => (
      <GoogleMap
        defaultCenter = { { lat: 30.6878086, lng: -88.17402109999999 } }
        defaultZoom = { 13 }
      >
        {this.props.fakeClinics.map(clinic => (
          <Marker
            key={clinic.id}
            position= {{lat: parseFloat(clinic.lat), lng: parseFloat(clinic.long)}}
            onClick={() => this.props.onToggleOpen()}
          >

          {this.props.isOpen && <InfoBox
            // text={clinic.name}
            onCloseClick={props.onToggleOpen}
            // options={{ closeBoxURL: ``, enableEventPropagation: true }}
          >
            <div style={{ backgroundColor: `yellow`, opacity: 0.75, padding: `12px` }}>
              <div style={{ fontSize: `16px`, fontColor: `#08233B` }}>
              </div>
              Some text
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