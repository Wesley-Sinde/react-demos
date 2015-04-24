
var MultiInput = React.createClass({displayName: "MultiInput",
  getInitialState: function() {
    return { text: 'type something here...' };
  },

  setText: function(e) {
    this.setState({ text: e.target.value });
  },

  render: function() {
    return (
      React.createElement("div", {className: "multi-input"}, 
        React.createElement(CapsOnlyInput, {value: this.state.text, onChange: this.setText}), 
        React.createElement("input", {type: "text", value: this.state.text, onChange: this.setText}), 
        React.createElement("input", {type: "text", value: this.state.text, onChange: this.setText}), 
        React.createElement("input", {type: "text", value: this.state.text, onChange: this.setText}), 
        React.createElement("input", {type: "text", value: this.state.text, onChange: this.setText}), 
        React.createElement("input", {type: "text", value: this.state.text, onChange: this.setText})
      )
    )
  }

});