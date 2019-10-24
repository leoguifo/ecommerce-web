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
        height: "100%",
        width: "100%"
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