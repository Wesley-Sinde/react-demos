var ClickCounter = React.createClass({
  getInitialState: function() {
    return { count: 0 }
  },
  clicked: function() {
    this.setState({count: this.state.count + 1});
  },
  render: function () {
    return (
      <div>
        <p>You clicked: {this.state.count} times</p>
        <button onClick={this.clicked}>Click Me</button>
      </div>
    )
  }
});

