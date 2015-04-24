var Msg = React.createClass({displayName: "Msg",
  render: function() {
    return React.createElement("h1", null, "Hello World")
  },

  componentDidMount: function() {
    console.log(this);
  }
});

React.render(React.createElement(Msg, {foo: "bar"}), document.getElementById('container'));

