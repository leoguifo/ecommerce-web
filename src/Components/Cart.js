import React from 'react';
import CardProdutoCart from './CardProdutoCart';
import { connect } from 'react-redux';
import Utils from '../Utils';


class Cart extends React.Component {
    render() {
        return (
            <>
                <h3>Preço total do carrinho: {this.props.total}</h3>
                <h3>Itens no carrinho: {this.props.itensCounter}</h3>
                {
                    this.props.itens.length > 0 ?
                        this.props.itens.map((item, key) => {
                            return (
                                <CardProdutoCart
                                    key={key}
                                    produto={item}
                                />
                            );
                        })
                        :
                        <h1>Não há itens</h1>
                }
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    ...state.cartState
});

export default connect(
    mapStateToProps,
    Utils.bindMapDispatchToProps({})
)(Cart);