import React from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import Utils from '../Utils';

class MyAccount extends React.Component {

    render() {
        console.log(this.props.user)
        return (
            <div>
                <div className="col s12 m8 offset-m2 l6 offset-l3" style={styles.aligns}>
                    <div className="card-panel z-depth-3" style={styles.card}>
                        <div className="row valign-wrapper">
                            <div className="col s10">
                                <h3 className="white-text">
                                    {this.props.user.displayName}
                                </h3>
                                <h6 class="white-text">
                                    {this.props.user.email}
                                </h6>
                            </div>
                            <div className="col s2">
                                <img src="" alt="" className="circle responsive-img"></img>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col s12 m8 center">
                    <div className="card-panel z-depth-3" style={styles.user}>
                        <div style={styles.collection}>
                            <ul>
                                <li className="collection">
                                    <a style={styles.fonts}>
                                        Meus endereços de cobrança
                                    </a>
                                </li>
                                <div style={styles.iten}>
                                    <Fab color="primary" aria-label="add" size="small">
                                        <AddIcon onClick={() => Utils.showPopUp()} />
                                    </Fab>
                                    <Fab disabled aria-label="delete" size="small">
                                        <DeleteIcon onClick={() => Utils.showPopUp()} />
                                    </Fab>
                                    <Fab color="secondary" aria-label="edit" size="small">
                                        <EditIcon onClick={() => Utils.showPopUp()} />
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
                    <div className="card-panel z-depth-3" style={styles.user}>
                        <div style={styles.collection}>
                            <a className="waves-effect btn-small navigation in-post w-100" style={styles.btt} onClick={() => Utils.showPopUp()} >Editar meus dados cadastrais</a>
                        </div>
                    </div>
                </div>
                <div className="col s12 m8 center">
                    <div className="card-panel z-depth-3" style={styles.user}>
                        <div style={styles.collection}>
                            <Link className="waves-effect btn-small navigation in-post w-100" style={styles.btt} to="/">Voltar</Link>
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
        backgroundColor: 'transparent',
    },
    collection: {
        margin: '5px',
        border: '3px',
        alignitems: 'stretch',
    },
    fonts: {
        color: 'white',
    },
    btt: {
        width: '100%',
        color: 'white',
        backgroundColor: '#3f51b5',
        borderRadius: '12px',
    },
    iten: {
        display: 'flex',
        justifyContent: 'space-evenly',
    },
    card: {
        backgroundColor: 'transparent',
    }

}

const mapStateToProps = (state) => ({
    ...state.loginState
});

export default connect(
    mapStateToProps,
    Utils.bindMapDispatchToProps({})
)(MyAccount)