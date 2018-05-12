import React from 'react';

const GoogleMap = (props) => (
  <div>
    {props.places}
  </div>

  props.places.map((place) => (
    <Place />
  ))
);


export default GoogleMap