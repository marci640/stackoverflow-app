import React from 'react';

export default class AddOption extends React.Component {
  state = {
    error: undefined
  };
  // constructor(props) {
  //   super(props);
  //   this.addOption = this.addOption.bind(this);
    
  // }

  addOption = (e) => {
    e.preventDefault();  
    const option = e.target.elements.option.value.trim();
    const error = this.props.addOption(option);

    this.setState(() => ({ error: error }));

    if (!error) {
      e.target.elements.option.value = '';
    }
  };

  render() {
    return (
      <form className="add-option"onSubmit={this.addOption}>
      {this.state.error && <p className="add-option-error"> {this.state.error} </p>}
        <input className="add-option__input" type="text" name="option" />
        <button className="button"> Add Option </button>
      </form>
    );
  }
}

// const User = (props) => {
//   return (
//     <div>
//       <p> Name: {props.name} </p>
//       <p> Age: {props.age} </p>
//     </div>
//   );
// };

