var CPM = React.createClass({displayName: "CPM",
  getInitialState: function() {
    return { count: 0 }
  },
  clicked: function() {
    this.setState({count: this.state.count + 1});
  },
  render: function () {
    return (
      React.createElement("div", null, 
        React.createElement("p", null, "You clicked: ", this.state.count, " times"), 
        React.createElement("button", {onClick: this.clicked}, "Click Me")
      )
    )
  }
});



