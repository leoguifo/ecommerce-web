import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Home from './Home';
import HomeApp from './HomeApp';

export default class App extends React.Component {

  componentDidMount() {
    window.$(document).ready(function () {
      window.$('.sidenav').sidenav();
    });
  }

  closeSideNav() {
    window.$('.sidenav').sidenav('close')
  }

  render() {
    return (
      <Router>
        <div>
          <nav className="indigo">
            <div className="nav-wrapper">
              <Link to="/" className="brand-logo" style={styles.logoNav}> <i className="material-icons">cloud</i> DigiGames</Link>
              <a data-target="mobile-demo" className="sidenav-trigger" style={{ cursor: "pointer" }}><i className="material-icons">menu</i></a>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a href="sass.html"></a></li>
              </ul>
            </div>
          </nav>

          <ul className="sidenav" id="mobile-demo">
            <li><Link to="/homeapp" onClick={this.closeSideNav}>HomeApp</Link></li>
            <li><Link to="/home" onClick={this.closeSideNav}>Home</Link></li>
          </ul>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/homeapp" component={HomeApp} />
            <Route path="/home" component={Home} />
          </Switch>
        </div>
      </Router>
    );
  }
}

const styles = {
  logoNav: {
    marginLeft: "15px",
    fontSize: "20px"
  }
}
