import React from 'react';

export default class VerticalCenter extends React.Component {
    // this.props.height: string css
    // this.props.hover: true or false
    constructor(props) {
        super(props);

        this.height = this.props.height;

        if (this.props.height === undefined) {
            this.height = "100%"
        }
        if (this.props.hover) {
            this.hover = {
                top: "0",
                left: "0",
                zIndex: "9999"
            }
        }
    }

    render() {
        return (
            <div style={{ ...this.props.style, ...styles.outer, height: this.height, ...this.hover }}>
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
        width: "100%"
    },
    middle: {
        display: "table-cell",
        verticalAlign: "middle"
    },
}