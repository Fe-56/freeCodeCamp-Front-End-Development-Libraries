class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
  }
  // Add handleChange() and submitMessage() methods here

  handleChange(event){
    this.setState(() => ({
      input: event.target.value,
      messages: this.state.messages
    }));
  }

  submitMessage(){
    this.setState((state, props) => ({
      input: "",
      messages: state.messages.concat(this.state.input)
    }));
  }

  handleChange = this.handleChange.bind(this);
  submitMessage = this.submitMessage.bind(this);

  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        { /* Render an input, button, and ul below this line */ }
        <input onChange={this.handleChange} value={this.state.input} />
        <button onClick={this.submitMessage}>Submit</button>
        <ul>{this.state.messages.map((message, index) => {
          return <li key={index}>{message}</li>
        })}</ul>
        { /* Change code above this line */ }
      </div>
    );
  }
};