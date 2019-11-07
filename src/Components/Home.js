import React from 'react';
import CardProdutoHome from './CardProdutoHome';
import { connect } from 'react-redux';
import { loadProdutos, setLoadProduto } from '../reduxStore/actions';
import Utils from '../Utils';


class Home extends React.Component {

    componentDidMount() {
        this.props.setLoadProduto(true);
        this.props.loadProdutos()
    }

    render() {

        if (this.props.onLoad) return (
            <div className="progress">
                <div className="indeterminate"></div>
            </div>
        );

        return (
            <div className="row" style={styles.homeRow}>
                {
                    this.props.produtos.map((item, key) => {
                        return (
                            <CardProdutoHome
                                key={key}
                                produto={item}
                            />
                        );
                    })
                }
            </ div>
        )
    }
}

const styles = {
    homeRow: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        flex: "1",
        padding: "10px"
    }
}

const mapStateToProps = (state) => ({
    ...state.produtoState
});

export default connect(
    mapStateToProps,
    Utils.bindMapDispatchToProps({ loadProdutos, setLoadProduto })
)(Home)