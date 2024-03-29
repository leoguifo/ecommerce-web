import React from 'react';
import CardProdutoCart from './CardProdutoCart';
import { connect } from 'react-redux';
import Utils from '../Utils';


class Cart extends React.Component {

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
        window.$('.finished').hide()

        window.$('#modalCartFinish').modal('open');
        setTimeout(() => {


            window.$('#loaderFinish').hide()
            window.$('.finished').show()


            setTimeout(() => {

                //window.location.href = '/';

            }, 500)

        }, 1000)
    }

    generateRamdomKey() {

        return `${makeid(5)}-${makeid(5)}-${makeid(5)}-${makeid(5)}`;


        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            return result;
        }
    }

    render() {
        return (
            <>

                <div className="col s12 m8 offset-m2 l6 offset-l3" style={styles.aligns}>
                    <div className="card-panel z-depth-3" style={styles.card}>
                        <div class="white-text">
                            <div>
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
                                        <h5 className="center" >SEM PRODUTOS NO CARRINHO!</h5>
                                }
                            </div>
                            <div style={styles.flex}>
                                <h5>ITENS NO CARRINHO:</h5>
                                <span style={styles.text}>{this.props.itensCounter}</span>
                            </div>
                            <div style={styles.flex}>
                                <i class="material-icons">VALOR TOTAL</i>
                                <span style={styles.text}>R$ {this.props.total}</span>
                            </div>
                            <div style={styles.div}>
                                <a class="waves-effect waves-light btn-small modal-trigger" style={styles.cat} href="#modalCart"><i class="material-icons left">attach_money</i>Finalizar</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Abaixo fica a finalização da compra */}
                <div id="modalCart" class="modal modal-fixed-footer grey darken-3 white-text">
                    <div class="modal-content white-text">
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
                            <div class="input-field col s12 white-text">
                                <select class="white-text">
                                    <option value="2">Boleto</option>
                                    <option value="3">Saldo em conta: R$ 20,00</option>
                                    <option value="1">Cartão: xxxx xxxx xxxx 5438</option>
                                </select>
                                <label class="white-text">Método de pagamento</label>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer grey darken-4 white-text">
                        <a class="modal-close waves-effect waves-light btn-flat white-text" onClick={() => this.finalizeCart()}>Finalizar compra</a>
                    </div>
                </div>

                <div id="modalCartFinish" class="modal grey darken-3 white-text">
                    <div class="modal-content center white-text">

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

                            <div class="green darken-1 finished" style={{ width: '84px', height: '84px', margin: 'auto', borderRadius: '50%' }}>
                                <i class="material-icons large">check</i>
                            </div>

                            <div className="finished white-text">
                                <p>
                                    <br />
                                    <b>Suas Keys:</b>
                                    {
                                        this.props.itens.map((item, key) => {
                                            return (
                                                <>
                                                    <table>
                                                        <thead>
                                                            <tr>
                                                                <td><b>{item.nome}</b></td>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>{this.generateRamdomKey()}</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <br />
                                                </>
                                            );
                                        })
                                    }
                                </p>
                            </div>

                            <div className="finished white-text" style={{ marginTop: '20px' }}>
                                <p>
                                    Suas keys também serão enviadas para seu e-mail: {this.props.user.email}
                                </p>
                            </div>

                        </div>

                        <div class="modal-footer finished grey darken-3 white-text">
                            <a class="waves-effect waves-green btn-flat white-text" onClick={() => window.location.href = '/'}>Fechar</a>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    ...state.cartState,
    ...state.loginState
});

const styles = {
    aligns: {
        flexDirection: 'row-reverse',
        width: '95%',
        margin: 'auto',
        marginTop: '1rem',
        color: '#3f51b5 !important',
    },
    text: {
        fontSize: 'x-large',
        alignSelf: 'center',
    },
    cat: {
        width: '75%',
        backgroundColor: '#3f51b5',
        borderRadius: '12px',
        paddingTop: '5px',
        paddingBottom: '5px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        justifySelf: 'center',
        marginTop: '10px',
    },
    div: {
        display: 'grid',
    },
    flex: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    card: {
        backgroundColor: 'transparent',
    },
};

export default connect(
    mapStateToProps,
    Utils.bindMapDispatchToProps({})
)(Cart);