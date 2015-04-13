var RateIt = React.createClass({
  getInitialState: function() {
    return { rating: 0 }
  },
  componentDidMount: function() {
    var el = React.findDOMNode(this.refs.rate);
    $(el).rateYo({
      onSet: function(newVal) {
        this.setState({rating: newVal});
      }.bind(this)
    });
  },

  render: function () {
    return (
      <div>
        <div ref="rate"></div>
        <p>You chose rating: {this.state.rating}</p>
      </div>
    )
  }
});

