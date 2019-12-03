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
    }

    render() {
        return (
            <>
                <div style={styles.cardFlex}>
                    <div className="card small blue-grey darken-4" style={styles.card}>
                        <div className="card-image">
                            <img alt="" src={this.props.produto.imagem} style={styles.image} />
                        </div>
                        <div className="card-content" style={styles.cardContent1}>
                            <div>
                                <div style={{ display: "inline-block" }}>
                                    <span className="card-title" style={styles.cardTitle}>{this.props.produto.nome}</span>
                                </div>
                                <div className="blue lighten-2" style={styles.price}>
                                    R$ {this.props.produto.preco}
                                </div>
                            </div>
                            <div>
                                <div style={styles.imageIcons}>
                                    <i className="material-icons grey-text">desktop_windows</i>
                                    <i className="material-icons grey-text">videogame_asset</i>
                                </div>
                                <div style={styles.addCart}>
                                    <a className="waves-effect waves-light modal-trigger" href={"#" + this.modalKey}><i className="material-icons">add_shopping_cart</i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id={this.modalKey} className="modal grey darken-3">
                    <div className="modal-content white-text">
                        <img alt="" src={this.props.produto.imagem} width="100%" />
                        <h4>{this.props.produto.nome}</h4>
                        <p><b>Descrição: </b>{this.props.produto.descricao}</p>
                        <p><b>Preço: </b>R$ {this.props.produto.preco}</p>
                        <p><b>Plataformas: </b>Windows / Xbox</p>
                    </div>
                    <div className="modal-footer grey darken-4">
                        <a href="#!" className="modal-close waves-effect waves-green btn-flat white-text">Fechar</a>
                        <a href="#!" className="modal-close waves-effect waves-green btn-flat white-text" onClick={() => this.props.addItemToCart(this.props.produto)}>Adicionar</a>
                    </div>
                </div>
            </>
        )
    }
}

const styles = {
    image: {
        height: "115px",
        borderRadius: "10px"
    },
    cardFlex: {
        display: "flex",
        flex: "1",
        justifyContent: "center",
    },
    card: {
        width: "145px",
        height: "180px",
        margin: "5px",
        padding: "5px",
        borderRadius: "10px"
    },
    cardTitle: {
        width: "fit-content",
        height: "fit-content",
        padding: "5px",
        fontSize: "12px",
        color: "#ffffff",
        position: "absolute",
        left: "5px",
        bottom: "22px",
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
        fontWeight: "bold",
        display: "inline-block",
        position: "absolute",
        right: "5px",
        bottom: "35px"
    },
    addCart: {
        width: "fit-content",
        height: "fit-content",
        padding: "5px",
        position: "absolute",
        right: "5px",
        bottom: "-5px"
    },
    imageIcons: {
        position: "absolute",
        left: "5px",
        bottom: "-2px",
        paddingLeft: "5px"
    }
}

export default connect(
    null,
    Utils.bindMapDispatchToProps({ addItemToCart })
)(CardProdutoHome)