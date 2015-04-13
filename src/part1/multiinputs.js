var MultiInput = React.createClass({
  getInitialState: function() {
    return { text: "hello" }
  },

  setText: function(text) {
    this.setState({text: text});
  },

  render: function() {
    return (
        <div>
          <Input text={this.state.text} onChange={this.setText} />
          <Input text={this.state.text} onChange={this.setText} />
          <Input text={this.state.text} onChange={this.setText} />
          <Input text={this.state.text} onChange={this.setText} />
          <Input text={this.state.text} onChange={this.setText} />
          <Input text={this.state.text} onChange={this.setText} />
        </div>
      )
  }
});

var Input = React.createClass({
  changed: function(e) {
    var newText = e.target.value;
    this.props.onChange(newText);
  },

  render: function() {
    return <input value={this.props.text} onChange={this.changed} />
  }
});













