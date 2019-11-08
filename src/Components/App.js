import React from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Home from './Home';
import Teste from './Teste';
import MyAccount from './MyAccount';
import Login from './Login';
import Cart from './Cart';
import Utils from '../Utils';

class App extends React.Component {

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
          <nav className="indigo" style={{zIndex: "2"}}>
            <div className="nav-wrapper">
              <a data-target="mobile-demo" className="sidenav-trigger" style={{ cursor: "pointer", display: "block" }}><i className="material-icons">menu</i></a>
              <Link to="/" className="brand-logo center" style={styles.logoNav}> <i className="material-icons">cloud</i> DigiGames</Link>
            </div>
          </nav>

          <ul className="sidenav" id="mobile-demo">
            <li><Link to="/" onClick={this.closeSideNav}>Inicio</Link></li>
            <li><Link to="/teste" onClick={this.closeSideNav}>Teste</Link></li>
            <li><Link to="/Login" onClick={this.closeSideNav}>Login</Link></li>
            <li><Link to="/MyAccount" onClick={this.closeSideNav}>Minha Conta</Link></li>
            <li><Link to="/Cart" onClick={this.closeSideNav}>Cart ({this.props.itensOnCart})</Link></li>
          </ul>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/teste" component={Teste} />
            <Route path="/MyAccount" component={MyAccount} />
            <Route path="/Login" component={Login} />
            <Route path="/Cart" component={Cart} />
            <Route path="/" component={Home} />
            
          </Switch>
        </div>
      </Router>
    );
  }
}

const styles = {
  logoNav: {
    fontSize: "20px"
  }
}

const mapStateToProps = (state) => ({
    itensOnCart: state.cartState.itensCounter
});

export default connect(
    mapStateToProps,
    Utils.bindMapDispatchToProps({ })
)(App)