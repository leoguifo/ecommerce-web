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
                <div className="col-sm-12 col-lg-6 offset-l3">
                    <ul class="w3-border w3-ul " style={styles.ul} >
                        {this.props.categorias.map((categoria) => {
                            return (
                                <Link to="/" className="waves-effect waves-light btn-small grey darken-3" style={styles.cat} onClick={() => this.props.setCategory(categoria)}>{categoria}</Link>
                            );
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}

const styles = {
    cat: {
        marginBottom: '10px',
        width: '95%',
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
    ...state.produtoState
});

export default connect(
    mapStateToProps,
    Utils.bindMapDispatchToProps({ loadProdutos, setCategory })
)(Categories);