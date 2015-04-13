var MultiInput = React.createClass({displayName: "MultiInput",
  getInitialState: function() {
    return { text: "hello" }
  },

  setText: function(text) {
    this.setState({text: text});
  },

  render: function() {
    return (
        React.createElement("div", null, 
          React.createElement(Input, {text: this.state.text, onChange: this.setText}), 
          React.createElement(Input, {text: this.state.text, onChange: this.setText}), 
          React.createElement(Input, {text: this.state.text, onChange: this.setText}), 
          React.createElement(Input, {text: this.state.text, onChange: this.setText}), 
          React.createElement(Input, {text: this.state.text, onChange: this.setText}), 
          React.createElement(Input, {text: this.state.text, onChange: this.setText})
        )
      )
  }
});

var Input = React.createClass({displayName: "Input",
  changed: function(e) {
    var newText = e.target.value;
    this.props.onChange(newText);
  },

  render: function() {
    return React.createElement("input", {value: this.props.text, onChange: this.changed})
  }
});













