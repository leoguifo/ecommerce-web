import React from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import Utils from '../Utils';


class Categories extends React.Component {

    render() {
        return (
            <div className="col s12 ">
                <div className="col-sm-12 col-lg-6 offset-l3">
                    <ul class="w3-border w3-ul " style={styles.ul} >
                        {this.props.categorias.map((categoria) => {
                            return (
                                <li className="waves-effect waves-light btn-small" style={styles.cat}>{categoria}</li>
                            );
                        })}

                        <li className="waves-effect waves-light btn-small" style={styles.cat}>Aventura</li>
                        <li className="waves-effect waves-light btn-small" style={styles.cat}>RPG</li>
                        <li className="waves-effect waves-light btn-small" style={styles.cat}>Ação</li>
                        <li className="waves-effect waves-light btn-small" style={styles.cat}>Aventura</li>
                        <li className="waves-effect waves-light btn-small" style={styles.cat}>RPG</li>
                        <li className="waves-effect waves-light btn-small" style={styles.cat}>Ação</li>
                        <li className="waves-effect waves-light btn-small" style={styles.cat}>Aventura</li>
                        <li className="waves-effect waves-light btn-small" style={styles.cat}>RPG</li>
                    </ul>
                    <div style={styles.ula}>
                        <Link className="waves-effect waves-light btn-small " style={styles.cat} to="/Home">Voltar</Link>
                    </div>
                </div>
            </div>
        )
    }
}

const styles = {
    cat: {
        margin: '2px',
        width: '95%',
        backgroundColor: 'black',
        height: '45px',
        borderRadius: '12px',
        paddingTop: '5px',
        paddingBottom: '5px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    ul: {
        textAlign: '-webkit-center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    ula: {
        textAlign: '-webkit-center',
        marginBottom: 36,
    },
}

const mapStateToProps = (state) => ({
    ...state.prodotoState
});

export default connect(
    mapStateToProps,
    Utils.bindMapDispatchToProps({})
)(Categories);