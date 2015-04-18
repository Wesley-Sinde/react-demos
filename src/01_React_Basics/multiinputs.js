
var MultiInput = React.createClass({
  getInitialState: function() {
    return { text: 'type something here...' };
  },

  setText: function(e) {
    this.setState({ text: e.target.value });
  },

  render: function() {
    return (
      <div className="multi-input" >
        <CapsOnlyInput value={this.state.text} onChange={this.setText} />
        <input type="text" value={this.state.text} onChange={this.setText} />
        <input type="text" value={this.state.text} onChange={this.setText} />
        <input type="text" value={this.state.text} onChange={this.setText} />
        <input type="text" value={this.state.text} onChange={this.setText} />
        <input type="text" value={this.state.text} onChange={this.setText} />
      </div>
    )
  }

});