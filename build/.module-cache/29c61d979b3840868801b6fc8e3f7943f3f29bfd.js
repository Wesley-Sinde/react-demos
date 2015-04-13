var CitySelect = React.createClass({displayName: "CitySelect",
  propTypes: {
    cities: React.PropTypes.array.isRequired
  },
  render: function () {
    var res = [];
    for ( var i=0; i < this.props.cities.length; i++ ) {
      var cityName = this.props.cities[i];
      res.push(React.createElement("option", {value: cityName}, cityName));
    }

    return (
      React.createElement("select", null, 
      res
      )
    )
  }
});

