var HelloWorld = React.createClass({displayName: "HelloWorld",
  render: function() {
    return (
      React.createElement("div", null, 
        React.createElement("h1", null, " Hello React "), 
        React.createElement("p", null, "JSX transform")
      )
    )
  }
});

React.render(React.createElement(HelloWorld, null), document.getElementById('container'));

