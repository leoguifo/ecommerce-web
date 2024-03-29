import React from 'react';
import { connect } from 'react-redux';
import FullCenter from './FullCenter';
import Register from './Register';
import {
    Link,
} from "react-router-dom";
import firebase from '../Firebase/index';
import { setLogged } from '../reduxStore/actions';
import Utils from '../Utils';

class Login extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            senha: '',
            onRegister: false
        };

        this.login = this.login.bind(this);
    }

    login = () => {
        let that = this;
        firebase.auth()
            .signInWithEmailAndPassword(this.state.email, this.state.senha)
            .then((usuario) => {
                console.log(usuario);
                that.props.setLogged(true);
            })
            .catch((err) => {
                if (err.code === "auth/invalid-email") {
                    window.M.toast({ html: 'Email inválido!' });
                }

                if (err.code === "auth/wrong-password") {
                    window.M.toast({ html: 'Senha inválida!' });
                }

                if (err.code === "auth/user-not-found") {
                    window.M.toast({ html: 'Usuário não encontrado!' });
                }
                console.error(err);
            });
    }

    render() {
        if (this.state.onRegister) return (<Register />);
        return (
            <div className="col s12 ">
                <div className="col-sm-12 col-lg-6 offset-l3" style={styles.aligns}>
                    <div className="lighten-5 z-depth-4 " style={styles.top}>
                        <div className="row s12">
                            <p className="center">
                                DIGIGAMES
                            </p>
                        </div>
                        <div className="col s8 center margin-5">
                            <img src="/Images/logo.png" />
                        </div>
                        <div className=" col s8 center">
                            <form>
                                <label>
                                    <input placeholder="E-mail" type="text" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} />
                                </label>
                                <label>
                                    <input placeholder="Senha" type="password" value={this.state.senha} onChange={(e) => this.setState({ senha: e.target.value })} />
                                </label>
                                <button type="button" style={styles.send} className="waves-effect waves-light btn-small" onClick={this.login}>Enviar</button>
                            </form>
                            <div style={styles.bot}>
                                <a style={{ cursor: 'pointer' }} onClick={() => this.setState({ onRegister: true })}>
                                    Cadastrar-se
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const styles = {
    aligns: {
        flexDirection: 'row-reverse',
        height: '80%',
        width: '90%',
        margin: 'auto',
        marginTop: '1rem',
    },
    top: {
        marginTop: '12px',
        padding: '15px',
        height: '480px',
        verticalAlign: 'center',
        color: 'white',
    },
    bot: {
        marginTop: '1rem',
    },
    send: {
        marginTop: '1rem',
        width: '100%',
        color: 'white',
        backgroundColor: '#3f51b5',
        borderRadius: '12px',
    },
}

const mapStateToProps = (state) => ({

});

export default connect(
    null,
    Utils.bindMapDispatchToProps({ setLogged })
)(Login)