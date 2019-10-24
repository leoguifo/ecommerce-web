import React from 'react';

export default class HorizontalCenter extends React.Component {

    render() {
        return (
            <div style={styles.inner}>
                {this.props.children}
            </div>
        );
    }
}

const styles = {
    inner: {
        marginLeft: "auto",
        marginRight: "auto",
        width: "fit-content"
    }
}