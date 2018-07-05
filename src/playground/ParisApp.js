import React from 'react';
import ClinicMap from './GoogleMap';
import MapMarkers from './MapMarkers';
import List from './List';

class ParisApp extends React.Component {
  state = {
    markers: ["hello", "goodbye"],
    isOpen: false
  };

  onToggleOpen = () => {
    this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
    console.log(this.state.isOpen);
  };

  render() {
    return (
      <div>
        <ClinicMap 
          markers={this.state.markers}
          onToggleOpen={this.onToggleOpen}
          isOpen={this.state.isOpen}
        />
        <List/>
      </div>
    );
  }
}

export default ParisApp;