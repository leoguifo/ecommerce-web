import React from 'react';

export default class HorizontalCenter extends React.Component {

    // condense: true or false
    render() {
        let condenseStyle = {};

        if (this.props.condense) {
            condenseStyle.width = "fit-content";
        }

        return (
            <div style={{ ...styles.inner, ...condenseStyle }}>
                {this.props.children}
            </div>
        );
    }
}

const styles = {
    inner: {
        marginLeft: "auto",
        marginRight: "auto",
    }
}