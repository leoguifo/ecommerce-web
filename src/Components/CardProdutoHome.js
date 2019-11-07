import React from 'react';
import { connect } from 'react-redux';
import Utils from '../Utils';
import { addItemToCart } from '../reduxStore/actions'

class CardProdutoHome extends React.Component {
    render() {
        return (
            <div style={styles.cardFlex}>
                <div className="card small" style={styles.card}>
                <div className="card-image">
                    <img alt="" src={this.props.produto.imagem} style={styles.image} />
                    <span className="card-title" style={styles.cardTitle}>{this.props.produto.nome}</span>
                </div>
                <div className="card-content" style={styles.cardContent1}>
                    <div className="blue lighten-2" style={styles.price}>
                        R$ {this.props.produto.preco}
                    </div>
                    <div>
                        <i class="material-icons grey-text">desktop_windows</i>
                    </div>
                    <div style={styles.addCart} onClick={() => this.props.addItemToCart(this.props.produto)} >
                        <i class="material-icons">add_shopping_cart</i>
                    </div>
                </div>
            </div>
            </div>
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
        margin: "5px"
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