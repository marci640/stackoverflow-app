import React from 'react';
import GoogleMap from './GoogleMap';
import MapMarkers from './MapMarkers';
import List from './List';

class ParisApp extends React.Component {
  state = {
    places: [],
  };

  getList = ({ commit }) => {
    axios.get('my-json-server.typicode.com').then((response) => {
      commit('setPlaces', { response.data })
    }, (err) => {
      console.log(err)
    })
  },

  setPlaces = (json) => {
    this.setState(() => ({places: json }));
  },

  render() {
    return (
      <div>
        <GoogleMap places={this.state.places} />
        <List places={this.state.places}/>
      </div>
    );
  }
}

export default ParisApp;