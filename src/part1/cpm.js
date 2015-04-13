var CPM = React.createClass({
  componentDidMount: function() {
    this.clock = setInterval(function() {
      this.setState({ticks: this.state.ticks + 1});
    }.bind(this), 1000);
  },

  componentWillUnmount: function() {
    clearInterval(this.clock);
  },

  getInitialState: function() {
    return { count: 0, ticks: 1 }
  },
  clicked: function() {
    this.setState({count: this.state.count + 1});
  },
  render: function () {
    var cpm = (this.state.count / this.state.ticks).toFixed(2);
    return (
      <div>
        <p>You clicked: {cpm} times</p>
        <button onClick={this.clicked}>Click Me</button>
        <Indicator val={cpm} />
      </div>
    )
  }
});



