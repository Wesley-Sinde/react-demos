var MultiInput = React.createClass({displayName: "MultiInput",
  getInitialState: function() {
    return { text: "hello" }
  },

  render: function() {
    return (
        React.createElement("div", null, 
          React.createElement(Input, {text: text}), 
          React.createElement(Input, {text: text}), 
          React.createElement(Input, {text: text}), 
          React.createElement(Input, {text: text}), 
          React.createElement(Input, {text: text}), 
          React.createElement(Input, {text: text})
        )
      )
  }
});

var Input = React.createClass({displayName: "Input",
  render: function() {
    return React.createElement("input", {value: this.props.text})
  }
});
