import React from 'react';

export default class FullCenter extends React.Component {
    render() {
        return (
            <div style={styles.outer}>
                <div style={styles.middle}>
                    <div style={styles.inner}>
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    outer: {
        display: "table",
        position: "absolute",
        top: "0",
        left: "0",
        height: "100%",
        width: "100%",
        zIndex:"10000"
    },
    middle: {
        display: "table-cell",
        verticalAlign: "middle"
    },
    inner: {
        marginLeft: "auto",
        marginRight: "auto",
        width: "fit-content"
    }
}