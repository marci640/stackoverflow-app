import React, { Component } from 'react';

class List extends Component {
  constructor() {
    super();
    this.state = {
      fakeClinics: []
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/non_clinics').then(results => {
        return results.json();
    }).then(data => {
      let fakeClinics = data.map((clinic) => {
        return(
          <div key={clinic.id}>
            <p> {clinic.name} </p> 
          </div>
          )
      })
      this.setState({fakeClinics: fakeClinics});
      console.log("state", this.state.fakeClinics);
    })
  }

  render() {
    return (
      <div>
        {this.state.fakeClinics}
      </div>
    )
  }


}


export default List