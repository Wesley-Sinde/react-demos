// indicator.js

var Indicator = React.createClass({displayName: "Indicator",
  propTypes: {
    val: React.PropTypes.number.isRequired
  },
  getClassfor: function(val) {
    var cls = "ind ";

    if ( val > 5 ) {
      cls += "ind-good";
    } else if ( val > 2 ) {
      cls += "ind-ok";
    } else {
      cls += "ind-bad";
    }

    return cls;
  },

  render: function() {
    var cls = this.getClassfor(this.props.val);
    return React.createElement("div", {className: cls})


  }
});
