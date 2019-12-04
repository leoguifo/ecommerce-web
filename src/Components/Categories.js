import React from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import Utils from '../Utils';
import { loadProdutos, setCategory } from '../reduxStore/actions';


class Categories extends React.Component {

    componentDidMount() {
        this.props.loadProdutos();
    }

    render() {
        return (
            <div className="col s12 ">
                <div className="col-sm-12 col-lg-6 offset-l3" style={styles.grid}>
                    <ul class="w3-border w3-ul " style={styles.ul} >
                        {this.props.categorias.map((categoria) => {
                            return (
                                <Link to="/" className="waves-effect waves-light btn-small grey darken-3" style={styles.cat} onClick={() => this.props.setCategory(categoria)}>{categoria}</Link>
                            );
                        })}
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
    grid: {
        minHeight: 'calc(100vh - 56px)',
        display: 'flex',
        flexDirection: 'column'
    },
    cat:{
        width: '75%',
        backgroundColor: '#3f51b5',
        borderRadius: '12px',
        paddingTop: '5px',
        paddingBottom: '5px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        justifySelf: 'center'
    },
    ul:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        flex: '1',
        justifyContent: 'space-evenly'
    },
    ula:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end',
        flex: '1',
        paddingBottom: '15px'
    },
}

const mapStateToProps = (state) => ({
    ...state.produtoState
});

export default connect(
    mapStateToProps,
    Utils.bindMapDispatchToProps({ loadProdutos, setCategory })
)(Categories);