import React from 'react';
import ClinicMap from './GoogleMap';
import MapMarkers from './MapMarkers';
import List from './List';

class ParisApp extends React.Component {
  state = {
    words: ["hello", "goodbye"],
    isOpen: false,
    fakeClinics: []
  };

  onToggleOpen = () => {
    this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
    console.log(this.state.isOpen);
  };

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/non_clinics').then(results => {
        return results.json();
    }).then(data => {
      let fakeClinics = data;
      this.setState({fakeClinics: fakeClinics});
      console.log("state", this.state.fakeClinics);
    })
  }

  render() {
    return (
      <div>
        <ClinicMap 
          onToggleOpen={this.onToggleOpen}
          isOpen={this.state.isOpen}
          fakeClinics={this.state.fakeClinics}
        />
        <List/>
      </div>
    );
  }
}

export default ParisApp;