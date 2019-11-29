import React from 'react';

export default class Register extends React.Component {

    render() {
        return (
            <div className="col s12 white-text">
                <div className="col-sm-12 col-lg-6 offset-l3" style={styles.aligns}>
                    <div className="lighten-5 z-depth-4 " style={styles.top}>
                        <div>
                            <p className="center flow-text">
                                <h5>REGISTRO</h5>
                            </p>
                            <form>
                                <div style={styles.prin} >
                                    <label>
                                        E-mail:
                                    <input id="emailR" type="text" name="email" class="white-text" />
                                    </label>
                                    <label>
                                        Senha:
                                    <input id="passR" type="password" name="password" class="white-text" />
                                    </label>
                                </div>
                                <div className="center" style={{ marginTop: '1rem' }}>
                                    <input className="waves-effect waves-light btn" value="Enviar" onClick={ () => this.props.registerLogin({ email: window.$("emailR").val(), password: window.$("passR").val() }) } />
                                </div>
                            </form>
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
    },
    prin: {
        width: '100%',

    },

}