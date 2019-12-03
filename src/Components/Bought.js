import React from 'react';
import CardProdutoCart from './CardProdutoCart';
import { connect } from 'react-redux';
import Utils from '../Utils';


class Bought extends React.Component {

    constructor(props) {
        super(props)

        this.finalizeCart = this.finalizeCart.bind(this);
    }

    componentDidMount() {
        window.$('.modal').modal();
        window.$('select').formSelect();

        // window.$('#modalCart').modal('open');
    }

    finalizeCart() {
        
        window.$('#loaderFinish').show()
        window.$('#finished').hide()
        
        window.$('#modalCartFinish').modal('open');
        setTimeout(() => {
            

            window.$('#loaderFinish').hide()
            window.$('#finished').show()


            setTimeout(() => {
            
                window.location.href = '/';
    
            }, 500)

        }, 1000)
    }

    render() {
        return (
            <>
                <div class="white-text">
                    <span> <i class="material-icons">attach_money</i>R$ {this.props.total}</span>
                    <h3>Itens no carrinho: {this.props.itensCounter}</h3>
                </div>
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
                <div class="row center">
                    <a class="waves-effect waves-light btn modal-trigger" href="#modalCart"><i class="material-icons left">attach_money</i>Finalizar</a>
                </div>

                <div id="modalCart" class="modal modal-fixed-footer">
                    <div class="modal-content">
                        <h4 class="center">Checks finais</h4>
                        <br />
                        <p><b>Numero de itens:</b> {this.props.itensCounter}</p>
                        <p>
                            <br />
                            <table>
                                <thead>
                                    <tr>
                                        <th>Nome</th>
                                        <th>Preço</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {
                                        this.props.itens.map((item, key) => {
                                            return (

                                                <tr>
                                                    <td>{item.nome}</td>
                                                    <td>R$ {item.preco}</td>
                                                </tr>
                                            );
                                        })
                                    }
                                </tbody>
                            </table>
                        </p>
                        <br />
                        <div>
                            <div class="input-field col s12">
                                <select>
                                    <option value="2">Boleto</option>
                                    <option value="3">Saldo em conta: R$ 20,00</option>
                                    <option value="1">Cartão: xxxx xxxx xxxx 1234</option>
                                </select>
                                <label>Método de pagamento</label>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <a class="modal-close waves-effect waves-light btn" onClick={() => this.finalizeCart()}>Finalizar compra</a>
                    </div>
                </div>

                <div id="modalCartFinish" class="modal">
                    <div class="modal-content center">

                        <div style={{ marginTop: '100px', marginBottom: '100px' }}>

                            <div id="loaderFinish" class="preloader-wrapper big active">
                                <div class="spinner-layer spinner-green-only">
                                    <div class="circle-clipper left">
                                        <div class="circle"></div>
                                    </div><div class="gap-patch">
                                        <div class="circle"></div>
                                    </div><div class="circle-clipper right">
                                        <div class="circle"></div>
                                    </div>
                                </div>
                            </div>

                            <div id="finished" class="green darken-1" style={{ width: '84px', height: '84px', margin: 'auto', borderRadius: '50%' }}>
                                <i class="material-icons large">check</i>
                            </div>

                        </div>

                    </div>
                </div>
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
)(Bought);