import React from 'react';
import VerticalCenter from './VerticalCenter';
import HorizontalCenter from './HorizontalCenter'

export default class FullCenter extends React.Component {

    // this.props.height: string css
    // this.props.hover: true or false
    render() {
        return (
            <VerticalCenter style={this.props.style} hover={this.props.hover} height={this.props.height}>
                <HorizontalCenter>
                    {this.props.children}
                </HorizontalCenter>
            </VerticalCenter>
        );
    }
}