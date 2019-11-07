import React from 'react';
import FullCenter from './FullCenter';


export default class Login extends React.Component {

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
                            <p>
                                Aqui ficará a imagem
                            </p>
                        </div>
                        <div className =" col s8 center">
                            <form>
                            <label>
                                Nome:
                                <input type="text" name="name" />
                            </label>
                            <input type="submit" value="Enviar" />
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

}