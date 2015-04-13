var CitySelect = React.createClass({displayName: "CitySelect",
  propTypes: {
    cities: React.PropTypes.array.isRequired
  },
  render: function () {

    return (
      React.createElement("select", null, 
      this.props.cities.map(function(cityName) {
        return (React.createElement("option", {value: cityName}, cityName));
      })
      )
    )
  }
});

