(function(Router) {
  /**
   * React Router Example.
   * For more information refer to the overview guide:
   * https://github.com/rackt/react-router/blob/master/docs/guides/overview.md
   */

  var Route = Router.Route;
  var RouteHandler = Router.RouteHandler;
  var Link = Router.Link;
  var DefaultRoute = Router.DefaultRoute;

  var Layout = React.createClass({
    render: function() {
      return (
        <div>
          <h1>My React App</h1>
          <ul>
            <li>
              <Link to="/">Home Page</Link>
            </li>
            <li>
              <Link to="/about">About Page</Link>
            </li>
          </ul>

          <RouteHandler routeParams={this.props.routeParams} />
        </div>
      )
    }
  });

  var Product = React.createClass({
    render: function() {
      var id = this.props.routeParams.id;
      var item = ProductsStore.getItem(id);

      return (
        <div>
          <p>Name: {item.name} </p>
          <p>Description: {item.description}</p>
        </div>
      )
    }
  });

  var Home = React.createClass({
    render: function() {
      return (
        <div>
          <p>
            Home Page
          </p>
          <ul>
          {ProductsStore.items.map(function(item) {
            return <li><Link to={"/product/" + item.id}>{item.name}</Link></li>
          })}
          </ul>
        </div>
      )
    }
  });

  var About = React.createClass({
    render: function() {
      return (
        <p>
          About Page
          <Link to="/">Back Home</Link>
        </p>
      )
    }
  });

  var routes = (
    <Route name="app" path="/" handler={Layout}>
      <Route name="about" handler={About} />
      <Route name="product" path="product/:id" handler={Product} />
      <DefaultRoute handler={Home}/>
    </Route>
  );

  Router.run(routes, function(Handler, state) {
    var params = state.params;
    React.render(<Handler routeParams={params} />, document.getElementById('main'));
  });

}(ReactRouter));


