import React from 'react';
import AddOption from './AddOption';
import Option from './Option';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal'

class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined
  };

  deleteOptions = () => {
    this.setState(() => ({ options: [] }));
  };

  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option)
    }));
  };

  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length)
    const option = this.state.options[randomNum]
    this.setState(() => ({
      selectedOption: option
    }))
  };

  clearSelectedOption = () => {
    this.setState(() => ({
      selectedOption: undefined
    }))
  };

  addOption = (option) => {
    if (!option) {
      return 'Enter valid value to add item'
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists'
    }

    this.setState((prevState) => ({ options: prevState.options.concat(option) }));
  };

  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({ options: options }));
      }
    } catch (e) {
      // Do nothing at all
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  render() {
    const subtitle = "Let the computer decide"

    return (
      <div>
        <Header subtitle={subtitle} />
        <div className="container">
          <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick}/>
          <div className="widget">
            <Options 
              options={this.state.options} 
              deleteOptions={this.deleteOptions}
              handleDeleteOption={this.handleDeleteOption}
            />
          <AddOption addOption={this.addOption} />
          </div>
        </div>
        <OptionModal 
          selectedOption={this.state.selectedOption}
          clearSelectedOption={this.clearSelectedOption}
        />
      </div>
    );
  }
}

IndecisionApp.defaultProps = {
  options: []
};

export default IndecisionApp; 