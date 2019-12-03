import React from 'react';
import CardProdutoHome from './CardProdutoHome';
import { connect } from 'react-redux';
import { loadProdutos, setLoadProduto } from '../reduxStore/actions';
import Utils from '../Utils';

class Home extends React.Component {

    componentDidMount() {
        this.props.setLoadProduto(true);
        this.props.loadProdutos();
    }

    initCarousel = () => {
        window.$('.carousel').carousel({
            fullWidth: true,
            indicators: true
        })
    }

    render() {

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
                            this.props.produtos.slice(0, 5).map((item, key) => {
                                return (
                                    <a className="carousel-item" key={key} style={styles.sliderA}>
                                        <img alt="" src={item.imagem} style={styles.sliderImg} />
                                    </a>
                                );
                            })
                        }
                    </div>
                </div>

                <div className="row" style={styles.homeRow}>
                    {
                        this.props.produtos.map((item, key) => {
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
    Utils.bindMapDispatchToProps({ loadProdutos, setLoadProduto })
)(Home)