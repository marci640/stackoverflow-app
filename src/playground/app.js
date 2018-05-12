class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.deleteOptions = this.deleteOptions.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.addOption = this.addOption.bind(this);
    this.state = {
      options: props.options
    };
  }

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

  deleteOptions() {
    this.setState(() => ({ options: [] }));
  }

  handleDeleteOption(optionToRemove) {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option)
    }));
  }

  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length)
    const option = this.state.options[randomNum]
    alert(option);
  }

  addOption(option){
    if (!option) {
      return 'Enter valid value to add item'
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists'
    }

    this.setState((prevState) => ({ options: prevState.options.concat(option) }));
  }

  render() {
    const subtitle = "Let the computer decide"

    return (
      <div>
        <Header subtitle={subtitle} />
        <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick}/>
        <Options 
          options={this.state.options} 
          deleteOptions={this.deleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption addOption={this.addOption} />
      </div>
    );
  }
}

IndecisionApp.defaultProps = {
  options: []
};

const Header = (props) => {
  return (
    <div>
      <h1> {props.title} </h1>
      {props.subtitle && <h2> {props.subtitle} </h2>}
    </div>
  );
};

Header.defaultProps = {
  title: 'Indecision'
};

const Action = (props) => {
  return (
    <div>
      <button disabled={!props.hasOptions} onClick={props.handlePick}> What should I do? </button>
    </div>
  );
};

const Options = (props) => {
  return (
    <div>
      <button onClick={props.deleteOptions}> Remove Options </button>
      {props.options.length === 0 && <p>Please add an option to get started!</p>}
      { 
        props.options.map((option) => (
          <Option 
            key={option} 
            optionText={option}
            handleDeleteOption={props.handleDeleteOption}
            />
        ))
      }
      <Option />
    </div>
  );
};

const Option = (props) => {
  return (
    <div>
      {props.optionText}
      <button 
        onClick={(e) => {
          props.handleDeleteOption(props.optionText);
        }}
      > 
      remove 
      </button>
    </div>
  );
};

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.addOption = this.addOption.bind(this);
    this.state = {
      error: undefined
    };
  }

  addOption(e) {
    e.preventDefault();  

    const option = e.target.elements.option.value.trim();
    const error = this.props.addOption(option);

    this.setState(() => ({ error: error }));

    if (!error) {
      e.target.elements.option.value = '';
    }
  }

  render() {
    return (
      <form onSubmit={this.addOption}>
      {this.state.error && <p> {this.state.error} </p>}
        <input type="text" name="option" />
        <button> Add Option </button>
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


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));



