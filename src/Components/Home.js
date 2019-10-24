import React from 'react';
import Loader from './Loader';
import FullCenter from './FullCenter';

export default class Home extends React.Component {

    render() {
        return (
            <FullCenter>
                <Loader size="big" />
            </FullCenter>
        )
    }
}