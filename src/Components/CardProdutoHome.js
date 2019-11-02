import React from 'react';
import { connect } from 'react-redux';
import Utils from '../Utils';
import { addItemToCart } from '../reduxStore/actions'

class CardProdutoHome extends React.Component {
    render() {
        return (
            <div class="row">
                <div class="col s12 m7">
                    <div class="card small">
                        <div class="card-image">
                            <img src="https://materializecss.com/images/sample-1.jpg" />
                            <span class="card-title">{this.props.produto.nome}</span>
                        </div>
                        <div class="card-content">
                            <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
                        </div>
                        <div class="card-action">
                            <a style={{ cursor: "pointer" }} onClick={() => this.props.addItemToCart(this.props.produto)} >Adicionar ao carrinho</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => (null);

export default connect(
    mapStateToProps,
    Utils.bindMapDispatchToProps({ addItemToCart })
)(CardProdutoHome)