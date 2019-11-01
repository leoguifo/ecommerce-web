import { bindActionCreators } from 'redux';

let Utils = {
    bindMapDispatchToProps: (actions) => {
        return (dispatch) => bindActionCreators(actions, dispatch);
    }
}

export default Utils;