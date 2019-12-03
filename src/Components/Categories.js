import React from 'react'
import { connect } from 'react-redux';
import { setCategory } from '../reduxStore/actions';
import Utils from '../Utils';
import { Link } from "react-router-dom";


class Categories extends React.Component {

    render() {
        return (
            <div className="col s12 ">
                <div className="col-sm-12 col-lg-6 offset-l3">
                    <ul class="w3-border w3-ul " style={styles.ul} >
                        <Link to="/" className="waves-effect waves-light btn-small grey darken-2" type="button" style={styles.cat} onClick={ (e) => this.props.setCategory("ação") }> Ação </Link>
                        <Link to="/" className="waves-effect waves-light btn-small grey darken-2" type="button" style={styles.cat} onClick={ (e) => this.props.setCategory("ação") }>Aventura</Link>
                        <Link to="/" className="waves-effect waves-light btn-small grey darken-2" type="button" style={styles.cat} onClick={ (e) => this.props.setCategory("ação") }>RPG</Link>
                        <Link to="/" className="waves-effect waves-light btn-small grey darken-2" type="button" style={styles.cat} onClick={ (e) => this.props.setCategory("ação") }>Ação</Link>
                        <Link to="/" className="waves-effect waves-light btn-small grey darken-2" type="button" style={styles.cat} onClick={ (e) => this.props.setCategory("ação") }>Aventura</Link>
                        <Link to="/" className="waves-effect waves-light btn-small grey darken-2" type="button" style={styles.cat} onClick={ (e) => this.props.setCategory("ação") }>RPG</Link>
                        <Link to="/" className="waves-effect waves-light btn-small grey darken-2" type="button" style={styles.cat} onClick={ (e) => this.props.setCategory("ação") }>Ação</Link>
                        <Link to="/" className="waves-effect waves-light btn-small grey darken-2" type="button" style={styles.cat} onClick={ (e) => this.props.setCategory("ação") }>Aventura</Link>
                        <Link to="/" className="waves-effect waves-light btn-small grey darken-2" type="button" style={styles.cat} onClick={ (e) => this.props.setCategory("ação") }>RPG</Link>
                    </ul>
                </div>
            </div>
        )
    }
}

const styles = {
    cat:{
        margin: '2px',
        borderStyle: 'ridge',
        height: '45px',
        width: "90%",
        marginBottom: "10px"
    },
    ul:{
        textAlign: '-webkit-center',
    },
}

const mapStateToProps = (state) => ({
    ...state.cartState
});

export default connect(
    mapStateToProps,
    Utils.bindMapDispatchToProps({ setCategory })
)(Categories);