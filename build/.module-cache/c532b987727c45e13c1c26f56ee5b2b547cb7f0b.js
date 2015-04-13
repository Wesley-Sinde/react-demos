var HelloWorld = React.createClass({displayName: "HelloWorld",
  render: function() {
    return React.createElement("h1", null, "Hello React")
  }
});

React.render(React.createElement(HelloWorld, null), document.getElementById('container'));

