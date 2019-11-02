import React from 'react';
import CardProdutoHome from './CardProdutoHome';
import { connect } from 'react-redux';
import Utils from '../Utils';


class Cart extends React.Component {
    render() {
        return (
            <>
                {
                    this.props.itens.length > 0 ?
                        this.props.itens.map((item, key) => {
                            return (
                                <CardProdutoHome
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
    Utils.bindMapDispatchToProps({ })
)(Cart);