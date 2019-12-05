import React from 'react';
import { connect } from 'react-redux';
import Utils from '../Utils';
import { registerLogin } from '../reduxStore/actions'
import {Link} from "react-router-dom";

class Register extends React.Component {

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
                                        <input placeholder="Usuario" type="text" name="name" />
                                    </label>
                                    <label>
                                        <input placeholder="Senha" type="password" name="password" />
                                    </label>
                                    <label>
                                        <input placeholder="Confirmar Senha" type="password" name="password" />
                                    </label>
                                    <label>
                                        <input placeholder="E-mail" type="text" name="name" />
                                    </label>
                                </div>
                                <div style={styles.ula}>
                                    <Link className="waves-effect waves-light btn-small" value="Enviar" onClick={ () => this.props.registerLogin({ email: window.$("emailR").val(), password: window.$("passR").val() }) } style={styles.cat} to="/Login">Enviar</Link>
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