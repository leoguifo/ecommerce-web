import React from 'react';
import { connect } from 'react-redux';
import Utils from '../Utils';
import { removeCartItem } from '../reduxStore/actions'

class CardProdutoCart extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col s12 m7">
                    <div className="card small grey darken-3">
                        <div className="card-image white-text">
                            <img alt="" src={this.props.produto.imagem} />
                            <span className="card-title">{this.props.produto.nome}</span>
                        </div>
                        <div className="card-content white-text">
                            <p>{this.props.produto.descricao}</p>
                        </div>
                        <div className="card-action white-text">
                            <a href="#" style={{ cursor: "pointer" }} onClick={() => this.props.removeCartItem(this.props.key)} >Remover do carrinho</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => (null);

export default connect(
    null,
    Utils.bindMapDispatchToProps({ removeCartItem })
)(CardProdutoCart)