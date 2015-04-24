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


var Clicker = React.createClass({displayName: "Clicker",
  mixins: [Counter(4)],
  getInitialState: function() {
    return { text: "Hello!" };
  },
  render: function() {
    return (
        React.createElement("div", null, 
          React.createElement("p", null, "Count: ", this.state.count), 
          React.createElement("button", {onClick: this.inc}, "Click Me")
        )
      )
  }
});


