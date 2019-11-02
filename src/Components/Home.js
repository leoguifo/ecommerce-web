import React from 'react';
import CardProdutoHome from './CardProdutoHome';
import { connect } from 'react-redux';
import Utils from '../Utils';


class Home extends React.Component {
    render() {
        return (
            <>
                {this.props.produtos.map((item, key) => {
                    return (
                        <CardProdutoHome
                            key={key}
                            produto={item}
                        />
                    );
                })}
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    ...state.produtoState
});

export default connect(
    mapStateToProps,
    Utils.bindMapDispatchToProps({ })
)(Home)