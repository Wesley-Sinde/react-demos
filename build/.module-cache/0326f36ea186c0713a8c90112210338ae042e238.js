var Indicator = React.createClass({displayName: "Indicator",
  propTypes: {
    val: React.PropTypes.number.isRequired
  },
  render: function () {
    var val = this.props.val;
    var cls = "ind ";

    if ( val > 10 ) {
      cls += "ind-good";
    } else if ( val > 5 ) {
      cls += "ind-medium";
    } else {
      cls += "ind-bad";
    }


  }
});

