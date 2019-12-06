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
import Register from './Register';
import Categories from './Categories';
import { setLogged } from '../reduxStore/actions';
import firebase from '../Firebase';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            userVerified: false,
            user: null,
            interval: null
        }
    }

    componentDidMount() {
        window.$(document).ready(function () {
            window.$('.sidenav').sidenav();
        });

        let that = this;

        firebase.auth().onAuthStateChanged(function (user) {
            that.setState({ user, userVerified: true })
        });
        
        let interval = setInterval(() => {
           that.props.setLogged(that.state.user);
        }, 100);

        this.setState({ interval });
    }

    componentWillUnmount() {
        if(this.state.interval) clearInterval(this.state.interval);
    }

    closeSideNav() {
        window.$('.sidenav').sidenav('close')
    }

    render() {

        if (!this.state.userVerified) return (
            <div className="progress">
                <div className="indeterminate"></div>
            </div>
        );

        if (!this.props.is_logged) return (<Login />);

        return (
            <Router>
                <div>
                    <div className="indigo mobileStatusBar" style={{ width: "100%" }}></div>
                    <nav className="indigo" style={{ zIndex: "2" }}>
                        <div className="nav-wrapper">
                            <a data-target="mobile-demo" className="sidenav-trigger" style={{ cursor: "pointer", display: "block" }}><i className="material-icons">menu</i></a>
                            <a href="/" className="brand-logo center" style={styles.logoNav}> <i className="material-icons">cloud</i> DigiGames</a>
                        </div>
                    </nav>

                    <ul className="sidenav" id="mobile-demo">
                        <div class="mobileStatusBar" style={{ width: "100%" }}></div>
                        <li><Link to="/" onClick={this.closeSideNav}>Inicio</Link></li>
                        <li><Link to="/Categories" onClick={this.closeSideNav}>Categories</Link></li>
                        <li><Link to="/MyAccount" onClick={this.closeSideNav}>My Account</Link></li>
                        <li><Link to="/Cart" onClick={this.closeSideNav}>Cart ({this.props.itensOnCart})</Link></li>
                    </ul>

                    {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                    <Switch>
                        <Route path="/teste" component={Teste} />
                        <Route path="/Categories" component={Categories} />
                        <Route path="/MyAccount" component={MyAccount} />
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
    itensOnCart: state.cartState.itensCounter,
    ...state.loginState
});

export default connect(
    mapStateToProps,
    Utils.bindMapDispatchToProps({ setLogged })
)(App)