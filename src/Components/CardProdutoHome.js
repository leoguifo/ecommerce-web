import React from 'react';
import { connect } from 'react-redux';
import Utils from '../Utils';
import { addItemToCart, loadProdutos } from '../reduxStore/actions'

class CardProdutoHome extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col s12 m7">
                    <div className="card small">
                        <div className="card-image">
                            <img alt="" src={this.props.produto.imagem} />
                            <span className="card-title">{this.props.produto.nome}</span>
                        </div>
                        <div className="card-content">
                            <p>{this.props.produto.descricao}</p>
                        </div>
                        <div className="card-action">
                            <a href="#" style={{ cursor: "pointer" }} onClick={() => this.props.addItemToCart(this.props.produto)} >Adicionar ao carrinho</a>
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
    Utils.bindMapDispatchToProps({ addItemToCart })
)(CardProdutoHome)