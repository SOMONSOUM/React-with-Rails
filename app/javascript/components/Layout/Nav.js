import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Nav extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg fixed-top scrolling-navbar">
          <div className="container">
            <div className="theme-header clearfix">

              <div className="navbar-header">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main-navbar" aria-controls="main-navbar" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                  <span className="lni-menu"></span>
                  <span className="lni-menu"></span>
                  <span className="lni-menu"></span>
                </button>
                <Link to="/" className="navbar-brand"> <img src="assets/img/logo.png"/></Link>
              </div>
              <div className="collapse navbar-collapse" id="main-navbar">
                <ul className="navbar-nav mr-auto w-100 justify-content-end">
                  <li className="nav-item active">
                    <Link to="/" className="nav-link">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/posts">
                      Posts
                    </Link>
                  </li>
                  <li className="button-group">
                    <Link to="/" className="button btn btn-common">Post a Job</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </React.Fragment>
    )
  }
}

export default Nav
