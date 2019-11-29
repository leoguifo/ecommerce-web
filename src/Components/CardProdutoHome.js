import React from 'react';
import { connect } from 'react-redux';
import Utils from '../Utils';
import { addItemToCart } from '../reduxStore/actions'

class CardProdutoHome extends React.Component {

    constructor(props) {
        super(props);

        this.modalKey = 'modal_' + props.id;
    }

    componentDidMount() {
        window.$('#' + this.modalKey).modal();
        console.log(this.props.produto)
    }

    render() {
        return (
            <>
                <div style={styles.cardFlex}>
                    <div className="card small blue-grey darken-4" style={styles.card}>
                        <div className="card-image">
                            <img alt="" src={this.props.produto.imagem} style={styles.image} />
                            <span className="card-title" style={styles.cardTitle}>{this.props.produto.nome}</span>
                        </div>
                        <div className="card-content" style={styles.cardContent1}>
                            <div className="blue lighten-2" style={styles.price}>
                                R$ {this.props.produto.preco}
                            </div>
                            <div>
                                <i className="material-icons grey-text">desktop_windows</i>
                                <i className="material-icons grey-text">videogame_asset</i>
                            </div>
                            <div style={styles.addCart}>
                                <a class="waves-effect waves-light modal-trigger" href={"#" + this.modalKey}><i className="material-icons">add_shopping_cart</i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div id={this.modalKey} class="modal grey darken-3">
                    <div class="modal-content white-text">
                        <img alt="" src={this.props.produto.imagem} width="100%"/>
                        <h4>{this.props.produto.nome}</h4>
                        <p><b>Descrição: </b>{this.props.produto.descricao}</p>
                        <p><b>Preço: </b>R$ {this.props.produto.preco}</p>
                        <p><b>Plataformas: </b>Windows / Xbox</p>
                    </div>
                    <div class="modal-footer grey darken-4">
                        <a href="#!" class="modal-close waves-effect waves-green btn-flat white-text">Fechar</a>
                        <a href="#!" class="modal-close waves-effect waves-green btn-flat white-text" onClick={() => this.props.addItemToCart(this.props.produto)}>Adicionar</a>
                    </div>
                </div>
            </>
        )
    }
}

const styles = {
    image: {
        height: "115px"
    },
    cardFlex: {
        display: "flex",
        flex: "1",
        justifyContent: "center"
    },
    card: {
        width: "145px",
        height: "180px",
        margin: "5px",
        padding: "5px"
    },
    cardTitle: {
        fontSize: "15px"
    },
    cardContent1: {
        height: "90px",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
    },
    price: {
        width: "fit-content",
        height: "fit-content",
        padding: "5px",
        borderRadius: "10px",
        fontWeight: "bold"
    },
    addCart: {
        width: "fit-content",
        height: "fit-content",
        padding: "5px",
        position: "absolute",
        right: "5px",
        bottom: "5px"
    }
}

export default connect(
    null,
    Utils.bindMapDispatchToProps({ addItemToCart })
)(CardProdutoHome)