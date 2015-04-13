var ClickCounter = React.createClass({displayName: "ClickCounter",
  getInitialState: function() {
    return { count: 0 }
  },
  render: function () {
    return (
      React.createElement("div", null, 
        React.createElement("p", null, "You clicked: ", this.state.count, " times")
      )
    )
  }
});

