var Indicator = React.createClass({displayName: "Indicator",
  propTypes: {
    value: React.PropTypes.number
  },
  render: function () {
    var cls;
    var value = this.props.value;

    if ( value > 10 ) {
      cls = "ind ind-good";
    } else if ( value > 5 ) {
      cls = "ind ind-medium";
    } else {
      cls = "ind ind-bad";
    }

    return React.createElement("div", {className: cls})
  }
});

