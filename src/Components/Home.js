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
        return (
            <>
                {
                    this.props.onLoad ?
                        <div class="progress">
                            <div class="indeterminate"></div>
                        </div>
                        :
                        this.props.produtos.map((item, key) => {
                            return (
                                <CardProdutoHome
                                    key={key}
                                    produto={item}
                                />
                            );
                        })
                }
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    ...state.produtoState
});

export default connect(
    mapStateToProps,
    Utils.bindMapDispatchToProps({ loadProdutos, setLoadProduto })
)(Home)