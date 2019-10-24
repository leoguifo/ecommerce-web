import React from 'react';

export default class VerticalCenter extends React.Component {
    render() {
        return (
            <div style={styles.outer}>
                <div style={styles.middle}>
                    teste
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
    }
}