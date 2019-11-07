import React from 'react';
import { connect } from 'react-redux';
import Utils from '../Utils';

class Modals extends React.Component {

    componentDidMount() {
        window.M.AutoInit();
    }

    render() {
        return (<>
        </>);
    }
}

const styles = {
    logoNav: {
        fontSize: "20px"
    }
}

const mapStateToProps = (state) => ({
});

export default connect(
    mapStateToProps,
    Utils.bindMapDispatchToProps({})
)(Modals)