import React from 'react';
import FullCenter from './FullCenter';
import Register from './Register';
import {
  Link,
} from "react-router-dom";
import firebase from '../Firebase/index'

export default class Login extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            senha: ''
        };

        this.login = this.login.bind(this);
    }

    login = () => {

        firebase.auth()
            .signInWithEmailAndPassword(this.state.email, this.state.senha)
            .then((usuario) => {
                console.log(usuario);
            })
            .catch((err) => {
                console.error(err);
            });
    }

    render() {
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
                        <div className =" col s8 center">
                            <form>
                                <label>
                                    <input placeholder="E-mail" type="text" value={this.state.email} onChange={(e) => this.setState({email: e.target.value})}/>
                                </label>
                                <label>
                                    <input placeholder="Senha" type="password" value={this.state.senha} onChange={(e) => this.setState({ senha: e.target.value })}/>
                                </label>
                                <button type="button" style={styles.send} className="waves-effect waves-light btn-small" onClick={this.login}>Enviar</button>
                            </form>
                            <div style={styles.bot}>
                                <a href="/Register">
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
    bot:{
        marginTop: '1rem',
    },
    send:{
        marginTop: '1rem',
        width: '100%',
        color: 'white',
        backgroundColor: '#3f51b5',
        borderRadius: '12px',
    },
}