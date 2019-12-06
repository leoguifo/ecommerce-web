import React from 'react';
import { connect } from 'react-redux';
import Utils from '../Utils';
import { registerLogin } from '../reduxStore/actions'
import { Link } from 'react-router-dom';
import firebase from '../Firebase/index'


class Register extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            nome: '',
            email: '',
            senha: '',
            senhaConfirmar: ''
        };

        this.register = this.register.bind(this);
    }

    register = () => {

        if (this.state.senha !== this.state.senhaConfirmar) {
            window.M.toast({ html: 'Senhas não são iguais!' });
            return;
        }

        let that = this;

        firebase.auth()
            .createUserWithEmailAndPassword(this.state.email, this.state.senha)
            .then((usuario) => {
                usuario.user.updateProfile({
                    displayName: that.state.nome
                });
                console.log(usuario);
            }).catch((err) => {
                if (err.code === "auth/invalid-email") {
                    window.M.toast({ html: 'Email inválido!' });
                }

                if (err.code === "auth/wrong-password") {
                    window.M.toast({ html: 'Email já em uso!' });
                }

                if (err.code === "auth/weak-password") {
                    window.M.toast({ html: 'Senha fraca!' });
                }
                console.error(err);
            });
    }

    render() {
        return (
            <div className="col s12 white-text">
                <div className="col-sm-12 col-lg-7 offset-l3" style={styles.aligns}>
                    <div className="lighten-5 z-depth-4 " style={styles.top}>
                        <div>
                            <p className="center flow-text">
                                <h5>Cadastre-se</h5>
                            </p>
                            <form>
                                <div style={styles.prin} >
                                    <label>
                                        <input placeholder="Usuario" type="text" value={this.state.nome} onChange={(e) => this.setState({ nome: e.target.value })} />
                                    </label>
                                    <label>
                                        <input placeholder="Senha" type="password" value={this.state.senha} onChange={(e) => this.setState({ senha: e.target.value })}/>
                                    </label>
                                    <label>
                                        <input placeholder="Confirmar Senha" type="password" value={this.state.senhaConfirmar} onChange={(e) => this.setState({ senhaConfirmar: e.target.value })} />
                                    </label>
                                    <label>
                                        <input placeholder="E-mail" type="text" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} />
                                    </label>
                                </div>
                                <div style={styles.ula}>
                                    <button type="button" className="waves-effect waves-light btn-small" onClick={this.register} style={styles.cat} to="/Login">Enviar</button>
                                 </div>
                            </form>
                            <p className="red-text"><b>{this.props.loginError}</b></p>
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
        verticalAlign: 'center',
    },
    prin: {
        width: '100%',

    },
    cat:{
        margin: '2px',
        width: '95%',
        backgroundColor: '#3f51b5',
        borderRadius: '12px',

    },
    ula:{
        textAlign: '-webkit-center',
        marginBottom: 36,
        marginTop: '1rem',
    },

}

const mapStateToProps = (state) => ({
    ...state.loginState
});

export default connect(
    mapStateToProps,
    Utils.bindMapDispatchToProps({ registerLogin })
)(Register)