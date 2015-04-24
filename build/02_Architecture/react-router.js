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

  var Layout = React.createClass({displayName: "Layout",
    render: function() {
      return (
        React.createElement("div", null, 
          React.createElement("h1", null, "My React App"), 
          React.createElement("ul", null, 
            React.createElement("li", null, 
              React.createElement(Link, {to: "/"}, "Home Page")
            ), 
            React.createElement("li", null, 
              React.createElement(Link, {to: "/about"}, "About Page")
            )
          ), 

          React.createElement(RouteHandler, {routeParams: this.props.routeParams})
        )
      )
    }
  });

  var Product = React.createClass({displayName: "Product",
    render: function() {
      var id = this.props.routeParams.id;
      var item = ProductsStore.getItem(id);

      return (
        React.createElement("div", null, 
          React.createElement("p", null, "Name: ", item.name, " "), 
          React.createElement("p", null, "Description: ", item.description)
        )
      )
    }
  });

  var Home = React.createClass({displayName: "Home",
    render: function() {
      return (
        React.createElement("div", null, 
          React.createElement("p", null, 
            "Home Page"
          ), 
          React.createElement("ul", null, 
          ProductsStore.items.map(function(item) {
            return React.createElement("li", null, React.createElement(Link, {to: "/product/" + item.id}, item.name))
          })
          )
        )
      )
    }
  });

  var About = React.createClass({displayName: "About",
    render: function() {
      return (
        React.createElement("p", null, 
          "About Page", 
          React.createElement(Link, {to: "/"}, "Back Home")
        )
      )
    }
  });

  var routes = (
    React.createElement(Route, {name: "app", path: "/", handler: Layout}, 
      React.createElement(Route, {name: "about", handler: About}), 
      React.createElement(Route, {name: "product", path: "product/:id", handler: Product}), 
      React.createElement(DefaultRoute, {handler: Home})
    )
  );

  Router.run(routes, function(Handler, state) {
    var params = state.params;
    React.render(React.createElement(Handler, {routeParams: params}), document.getElementById('main'));
  });

}(ReactRouter));


