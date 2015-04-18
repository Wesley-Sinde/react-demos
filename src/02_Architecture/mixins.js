function Counter(delta) {
  return {
    getInitialState: function() {
      return { count: 0 };
    },

    inc: function() {
      this.setState({count: this.state.count + delta});
    }
  };
}


var Clicker = React.createClass({
  mixins: [Counter(4)],
  getInitialState: function() {
    return { text: "Hello!" };
  },
  render: function() {
    return (
        <div>
          <p>Count: {this.state.count}</p>
          <button onClick={this.inc} >Click Me</button>
        </div>
      )
  }
});


