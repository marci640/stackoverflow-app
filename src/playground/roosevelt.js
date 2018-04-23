class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.toggleVisibility = this.toggleVisibility.bind(this)
    this.state = {
      visibility: false
    }
  }

  toggleVisibility() {
    this.setState((prevState) => {
      return {
        visibility: prevState.visibility = !prevState.visibility
      }
    })
  }

  render(){
    return (
      <div> 
        <h1> Ask Eleanor Roosevelt </h1> 
        <div>
          <button onClick={this.toggleVisibility}>What quality in your husband do you think was most responsible for his success?</button>
          {this.state.visibility && (
            <div>
              <p>His patience and his ability to look at things historically. By that I mean that his vision was not limited by the immediate situation, but he was able to see the background and the future of whatever was under consideration. When he made a decision he could patiently wait for the outcome; and if it was wrong or partially wrong, he had the patience to begin again.</p>
            </div>
          )}
        </div>
        <div>
          <button onClick={this.toggleVisibility}>What quality in your husband do you think was most responsible for his success?</button>
          {this.state.visibility && (
            <div>
              <p>His patience and his ability to look at things historically. By that I mean that his vision was not limited by the immediate situation, but he was able to see the background and the future of whatever was under consideration. When he made a decision he could patiently wait for the outcome; and if it was wrong or partially wrong, he had the patience to begin again.</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}


ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

