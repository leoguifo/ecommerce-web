import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

export default class MyAccount extends React.Component {

    render() {
        return (
            <div>
                <div className="col s12 m8 offset-m2 l6 offset-l3" style={styles.aligns}>
                    <div className="card-panel grey lighten-5 z-depth-3">
                        <div className="row valign-wrapper">
                            <div className="col s10">
                                <span className="black-text">
                                    This is a square image. Add the "circle" class to it to make it appear circular.
                        </span>
                            </div>
                            <div className="col s2">
                                <img src="" alt="" className="circle responsive-img"></img>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col s12 m8 center">
                    <div className="card-panel grey lighten-5 z-depth-3" style={styles.user}>
                        <div style={styles.collection} >
                            <ul>
                                <li className="collection">
                                    <a style={styles.fonts}>
                                        usuario@hotmail.com
                                    </a>
                                </li>
                                <li className="collection">
                                    <a style={styles.fonts}>
                                        *********
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col s12 m8 center">
                    <div className="card-panel grey lighten-5 z-depth-3" style={styles.user}>
                        <div style={styles.collection}>
                            <ul>
                                <li className="collection">
                                    <a style={styles.fonts}>
                                        Meus endereços de cobrança
                            </a>
                                </li>
                                <div style={styles.iten}>
                                    <Fab color="primary" aria-label="add" size="small">
                                        <AddIcon />
                                    </Fab>
                                    <Fab disabled aria-label="delete" size="small">
                                        <DeleteIcon />
                                    </Fab>
                                    <Fab color="secondary" aria-label="edit" size="small">
                                        <EditIcon />
                                    </Fab>
                                </div>
                                <li className="collection">
                                    <a style="mt-1" style={styles.fonts}>
                                        MasterCard com Final 5438
                            </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col s12 m8 center">
                    <div className="card-panel grey lighten-5 z-depth-3" style={styles.user}>
                        <div style={styles.collection}>
                            <a class="waves-effect btn-small navigation in-post w-100" style={styles.btt}>Editar meus dados cadastrais</a>
                        </div>
                    </div>
                </div>
                <div className="col s12 m8 center">
                    <div className="card-panel grey lighten-5 z-depth-3" style={styles.user}>
                        <div style={styles.collection}>
                            <Link class="waves-effect btn-small navigation in-post w-100 mb-2" style={styles.btt} to="/Home">Voltar</Link>
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
        width: '90%',
        margin: 'auto',
        marginTop: '1rem',
    },
    user: {
        width: '90%',
        margin: 'auto',
        marginTop: '1.5rem',
        padding: '10px',
    },
    collection: {
        margin: '5px',
        border: '3px',
        alignitems: 'stretch',
    },
    fonts: {
        color: '#000',
    },
    btt: {
        width: '100%',
        color: 'white',
    },
    iten: {
        display: 'flex',
        justifyContent: 'space-evenly',
    },
}
