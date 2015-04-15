var Msg = React.createClass({
  render: function() {
    return <h1>Hello World</h1>
  },

  componentDidMount: function() {
    console.log(this);
  }
});

React.render(<Msg foo="bar" />, document.getElementById('container'));

