import React from 'react';
import ClinicMap from './GoogleMap';
import MapMarkers from './MapMarkers';
import List from './List';

class ParisApp extends React.Component {
  state = {
    isOpen: false,
    fakeClinics: [],
    infoIndex: ""
  };

  toggleInfo = (a) => {
    this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
    this.setState({infoIndex: a})
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/non_clinics').then(results => {
        return results.json();
    }).then(data => {
      let fakeClinics = data;
      this.setState({fakeClinics: fakeClinics});
    })
  }

  render() {
    return (
      <div>
        <ClinicMap 
          isOpen={this.state.isOpen}
          fakeClinics={this.state.fakeClinics}
          infoIndex={this.state.infoIndex}
          toggleInfo={this.toggleInfo}
        />
      </div>
    );
  }
}

export default ParisApp;