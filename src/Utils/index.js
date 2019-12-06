import { bindActionCreators } from 'redux';

let Utils = {
    bindMapDispatchToProps: (actions) => {
        return (dispatch) => bindActionCreators(actions, dispatch);
    },
    toast: (msg) => {
        window.M.toast({ classes: "rounded", html: msg })
    },
    showPopUp: () => {
        window.$('#modalPopUp').modal().modal('open')
    }
}

export default Utils;