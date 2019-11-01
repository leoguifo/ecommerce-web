import React from 'react';
import FullCenter from './FullCenter';
import Loader from './Loader';

export default class OverBlockLoader extends React.Component {
    render() {
        return (
            <FullCenter style={styles.background} hover={true}>
            <Loader size="big" />
            </FullCenter>
        );
    }
}

const styles = {
    background: {
        backgroundColor: "rgba(0, 0, 0, 0.4)"
    }
}