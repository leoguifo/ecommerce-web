import React from 'react';
import CardProdutoHome from './CardProdutoHome';
import { connect } from 'react-redux';
import { loadProdutos, setLoadProduto, addItemToCart } from '../reduxStore/actions';
import Utils from '../Utils';

class Home extends React.Component {

    componentDidMount() {
        this.props.setLoadProduto(true);
        this.props.loadProdutos();
        setTimeout(() => {
            window.$(`.modal`).modal();
        }, 1000)
    }

    initCarousel = () => {
        window.$('.carousel').carousel({
            fullWidth: true,
            indicators: true
        })
    }

    filterItensByCategory = item => {
        if (!this.props.categoria) return item;
        if (item.categoria === this.props.categoria) return item;
    }

    render() {

        let listModalRender = [];

        if (this.props.onLoad) return (
            <div className="progress">
                <div className="indeterminate"></div>
            </div>
        );

        return (
            <>
                <div style={styles.topSlider}>
                    <div className="carousel carousel-slider" style={styles.slider} onLoad={this.initCarousel}>
                        {
                            this.props.produtos.slice(0, 5)
                                .filter(this.filterItensByCategory)
                                .map((item, key) => {

                                    listModalRender.push(
                                        <div id={"modalCar" + key} className="modal grey darken-3">
                                            <div className="modal-content white-text">
                                                <img alt="" src={item.imagem} width="100%" />
                                                <h4>{item.nome}</h4>
                                                <p><b>Descrição: </b>{item.descricao}</p>
                                                <p><b>Preço: </b>R$ {item.preco}</p>
                                                <p><b>Plataformas: </b>PC / Console</p>
                                            </div>
                                            <div className="modal-footer grey darken-4">
                                                <a href="#!" className="modal-close waves-effect waves-green btn-flat white-text">Fechar</a>
                                                <a href="#!" className="modal-close waves-effect waves-green btn-flat white-text" onClick={() => this.props.addItemToCart(item)}>Adicionar</a>
                                            </div>
                                        </div>
                                    );

                                    return (
                                        <>
                                            <a className="carousel-item modal-trigger" href={"#modalCar" + key} key={key} style={styles.sliderA}>
                                                <img alt="" src={item.imagem} style={styles.sliderImg} />
                                            </a>
                                        </>
                                    );
                                })
                        }
                    </div>
                </div>

                <div className="row" style={styles.homeRow}>
                    {
                        this.props.produtos
                            .filter(this.filterItensByCategory)
                            .map((item, key) => {
                                return (
                                    <CardProdutoHome
                                        key={key}
                                        produto={item}
                                        id={item.sku}
                                    />
                                );
                            })
                    }
                </div>

                {
                    listModalRender.map((item) => {
                        return(item);
                    })
                }

            </>
        )
    }
}

const styles = {
    homeRow: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        flex: "1",
        padding: "10px",
    },
    topSlider: {
        padding: "10px",
    },
    slider: {
        height: "250px",
        borderRadius: "10px"
    },
    sliderA: {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
    },
    sliderImg: {
        height: "inherit",
        objectFit: "cover"
    }
}

const mapStateToProps = (state) => ({
    ...state.produtoState
});

export default connect(
    mapStateToProps,
    Utils.bindMapDispatchToProps({ loadProdutos, setLoadProduto, addItemToCart })
)(Home)