var CitySelect = React.createClass({
  propTypes: {
    cities: React.PropTypes.array.isRequired
  },
  render: function () {

    return (
      <select>
      {this.props.cities.map(function(cityName) {
        return (<option value={cityName}>{cityName}</option>);
      })}
      </select>
    )
  }
});

