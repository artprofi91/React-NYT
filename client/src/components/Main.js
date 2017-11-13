import React, { Component } from 'react';
import { Link } from "react-router";

class Main extends Component {

  render() {

    return (
      <div className="main-container">
        <div className="container">
          <nav className="navbar navbar-default">
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
                <Link className="navbar-brand" to="/">React-NYT</Link>
              </div>

              <div className="collapse navbar-collapse navbar-ex1-collapse">
                <ul className="nav navbar-nav navbar-right">
                  <li><Link to="/search">Search</Link></li>
                  <li><Link to="/saved">Saved Articles</Link></li>
                </ul>
              </div>
            </div>
          </nav>

          <div className="jumbotron">
            <h2 className="text-center"><strong>React - New York Times Article Scrubber</strong></h2>
          </div>
          {this.props.children}
        </div>
      </div>
    );
  }
};

export default Main;