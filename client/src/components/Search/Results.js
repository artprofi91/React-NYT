import React, { Component } from 'react'
import helpers from "../../utils/helpers";

class Results extends Component {
  state = {
    title: "",
    url: "",
    pubdate: ""
  }

  // search term to search Component
  handleClick = (item) => {
    helpers.postSaved(item.headline.main, item.pub_date, item.web_url).then(function() {

    });
  }

  renderArticles = () => {
    return this.props.results.docs.map((article, index) => {
      return (
        <div key={index}>
          <li className="list-group-item">
            <h3>
              <span>
                <em>{article.headline.main}</em>
              </span>
              <span className="btn-group pull-right">
                <a href={article.web_url} rel="noopener noreferrer" target="_blank">
                  <button className="btn btn-default ">View Article</button>
                </a>
                <button className="btn btn-primary" onClick={() => { this.handleClick(article)}}>Save</button>
              </span>
            </h3>
            <p>Date Published: {article.pub_date}</p>

          </li>

        </div>
      );

    });

  }

  // render container to hold articles
  renderContainer = () => {
    return (
      <div className="main-container">
        <div className="row">
          <div className="col-lg-12">
            <div className="panel panel-primary">
              <div className="panel-heading">
                <h1 className="panel-title">
                  <strong>
                    <i className="fa fa-list-alt"></i>
                    Results
                  </strong>
                </h1>
              </div>
              <div className="panel-body">
                <ul className="list-group">
                  {this.renderArticles()}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  render() {
    if (!this.props.results.docs) {
      return (
        <li className="list-group-item">
          <h3>
            <span>
              <em>Enter search terms, please.</em>
            </span>
          </h3>
        </li>
      );
    }
    return this.renderContainer();
  }
};
export default Results;