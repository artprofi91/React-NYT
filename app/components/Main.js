var React = require("react");
var Link = require("react-router").Link;
var Main = React.createClass({

  render: function() {

    return (
      <div className="main-container">
        <div className="container">
          <nav className="navbar navbar-default" role="navigation">
            <div className="container-fluid">
              <div className="navbar-header">
                <button
                  type="button"
                  className="navbar-toggle"
                  data-toggle="collapse"
                  data-target=".navbar-ex1-collapse"
                >
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <Link className="navbar-brand" to="/">NYT-React</Link>
              </div>

              <div className="collapse navbar-collapse navbar-ex1-collapse">
                <ul className="nav navbar-nav navbar-right">
                  <li><Link to="/search">Search</Link></li>
                  <li><Link to="/saved">Saved Articles</Link></li>
                </ul>
              </div>
            </div>
          </nav>

          <div class="jumbotron text-center">
            <div class="overlay">
            </div>
            <div class="background-image">
            </div>
            <div class="caption">
              <h1>Mongo Scraper</h1>
              <p>New York Times Edition</p>
            </div>
          </div>
          {this.props.children}

          <footer class="footer">
          <div class="container">
            <p>New York Times Mongo Scraper</p>
          </div>
        </footer>
        </div>
      </div>
    );
  }
});

module.exports = Main;
