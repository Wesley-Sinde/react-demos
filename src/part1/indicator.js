var Indicator = React.createClass({
  propTypes: {
    val: React.PropTypes.number.isRequired
  },
  render: function () {
    var val = this.props.val;
    var cls = "ind ";

    if ( val > 5 ) {
      cls += "ind-good";
    } else if ( val > 2 ) {
      cls += "ind-medium";
    } else {
      cls += "ind-bad";
    }

    return <div className={cls}></div>
  }
});

