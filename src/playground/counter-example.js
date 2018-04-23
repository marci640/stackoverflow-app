// class Counter extends React.Component {
//   constructor(props) {
//     super(props);
//     this.addOne = this.addOne.bind(this);
//     this.handleAnswers = this.handleAnswers.bind(this);
//     this.state = {
//       count: 0
//     }
//   }

//   addOne() {
//     this.setState((prevState) => {
//       return {
//         count: prevState.count + 1
//       };
//     });
//   }

//   handleAnswers(e) {
//     e.preventDefault();  
//     const answer = e.target.elements.answer1.value.trim();
//     if (answer) {
//       this.addOne(); 
//     }
//   }


//   render(){
    
//     return (
//       <div>
//         <h1>Score: {this.state.count}</h1>
//         <form onSubmit={this.handleAnswers}>
//         <div>
//           Question 1: <input type="checkbox" name="answer1" />
//         </div>
//         <div>
//           Question 2: <input type="checkbox" name="answer2" />
//         </div>
//           <button> Submit </button>
//         </form>
//       </div>
//     );
//   }
// }

// ReactDOM.render(<Counter />, document.getElementById('app'));


class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.addOne = this.addOne.bind(this);
    this.minusOne = this.minusOne.bind(this);
    this.reset = this.reset.bind(this);
    this.state = {
      count: 0
    }
  }

  componentDidMount() {
    const stringCount = localStorage.getItem('count');
    const count = parseInt(stringCount, 10);
    if (!isNaN(count)) {
      this.setState(() => ({count: count}));
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      localStorage.setItem('count', this.state.count);
    }
  }

  addOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      };
    });
  }

  minusOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1
      };
    });
  }

  reset() {
    this.setState((prevState) => {
      return {
        count: 0
      };
    });
  }

  render(){
    
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.addOne}>+1</button>
        <button onClick={this.minusOne}>-1</button>
        <button onClick={this.reset}>reset</button>
      </div>
    );
  }
}

// Counter.defaultProps = {
//   count: 0
// };

ReactDOM.render(<Counter/>, document.getElementById('app'));


// let count = 7;


// const addOne = () => {
//   count++ 
//   renderCounterApp();
// };

// const minusOne = () => {
//   count--
//   renderCounterApp();
// };

// const reset = () => {
//   count = 0;
//   renderCounterApp();
// };

// const appRoot = document.getElementById('app');


// const renderCounterApp = () => {
//   const templateTwo = (
//   <div>
//     <h1> Count: {count} </h1>
//     <button id="my-id" onClick={addOne}> +1 </button>
//     <button id="my-id" onClick={minusOne}> -1 </button>
//     <button id="my-id" onClick={reset}> reset </button>
//   </div>
//   );

//   ReactDOM.render(templateTwo, appRoot);
// }

// renderCounterApp();