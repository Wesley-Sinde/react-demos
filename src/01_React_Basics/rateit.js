var Container = React.createClass({
  getInitialState: function() {
    return { rate: 0 }
  },
  setValue: function(val) {
    this.setState({ rate: val });
  },
  render: function() {
    return <div>
        <RateIt onChange={this.setValue} />
        <p>Container rate = {this.state.rate}</p>
      </div>
  }
});

var RateIt = React.createClass({
  getInitialState: function() {
    return { rating: 0 }
  },
  componentDidMount: function() {
    var el = React.findDOMNode(this.refs.rate);
    $(el).rateYo({
      onSet: function(newVal) {
        this.setState({rating: newVal});
        if ( typeof(this.props.onChange) === 'function' ) {
          this.props.onChange(newVal);
        }
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

