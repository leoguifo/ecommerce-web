import React from 'react';
import CardProdutoHome from './CardProdutoHome';
import { connect } from 'react-redux';
import { loadProdutos, setLoadProduto } from '../reduxStore/actions';
import Utils from '../Utils';
import Slider from "react-slick";


class Home extends React.Component {

    componentDidMount() {
        this.props.setLoadProduto(true);
        this.props.loadProdutos()
    }

    render() {

        if (this.props.onLoad) return (
            <div className="progress">
                <div className="indeterminate"></div>
            </div>
        );

        return (
            <>
                <div className="row" style={styles.homeRow}>
                    {
                        this.props.produtos.map((item, key) => {
                            return (
                                <CardProdutoHome
                                    key={key}
                                    produto={item}
                                />
                            );
                        })
                    }
                </div>
                <div>
                    <h2> Single Item</h2>
                    <Slider {...slideSettings}>
                        <div>
                            <h3>1</h3>
                        </div>
                        <div>
                            <h3>2</h3>
                        </div>
                        <div>
                            <h3>3</h3>
                        </div>
                        <div>
                            <h3>4</h3>
                        </div>
                        <div>
                            <h3>5</h3>
                        </div>
                        <div>
                            <h3>6</h3>
                        </div>
                    </Slider>
                </div>

            </>
        )
    }
}

const slideSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
};

const styles = {
    homeRow: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        flex: "1",
        padding: "10px"
    }
}

const mapStateToProps = (state) => ({
    ...state.produtoState
});

export default connect(
    mapStateToProps,
    Utils.bindMapDispatchToProps({ loadProdutos, setLoadProduto })
)(Home)