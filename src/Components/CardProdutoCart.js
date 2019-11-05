import React from 'react';
import { connect } from 'react-redux';
import Utils from '../Utils';
import { removeCartItem } from '../reduxStore/actions'

class CardProdutoCart extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col s12 m7">
                    <div className="card small">
                        <div className="card-image">
                            <img alt="" src="https://materializecss.com/images/sample-1.jpg" />
                            <span className="card-title">{this.props.produto.nome}</span>
                        </div>
                        <div className="card-content">
                            <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
                        </div>
                        <div className="card-action">
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