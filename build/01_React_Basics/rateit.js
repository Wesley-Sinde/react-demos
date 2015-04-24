var Container = React.createClass({displayName: "Container",
  getInitialState: function() {
    return { rate: 0 }
  },
  setValue: function(val) {
    this.setState({ rate: val });
  },
  render: function() {
    return React.createElement("div", null, 
        React.createElement(RateIt, {onChange: this.setValue}), 
        React.createElement("p", null, "Container rate = ", this.state.rate)
      )
  }
});

var RateIt = React.createClass({displayName: "RateIt",
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
      React.createElement("div", null, 
        React.createElement("div", {ref: "rate"}), 
        React.createElement("p", null, "You chose rating: ", this.state.rating)
      )
    )
  }
});

