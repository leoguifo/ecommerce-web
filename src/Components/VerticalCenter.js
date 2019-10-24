import React from 'react';

export default class VerticalCenter extends React.Component {
    render() {
        return (
            <div style={styles.outer}>
                <div style={styles.middle}>
                    {this.props.children}
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
    }
}