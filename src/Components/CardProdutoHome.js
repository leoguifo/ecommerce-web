import React from 'react';

export default class CardProdutoHome extends React.Component {
    render() {
        return (
            <div class="row">
                <div class="col s12 m7">
                    <div class="card small" style={styles.cardSize}>
                        <div class="card-image">
                            <img src="https://materializecss.com/images/sample-1.jpg" />
                            <span class="card-title">Card Title</span>
                        </div>
                        <div class="card-content">
                            <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
                        </div>
                        <div class="card-action">
                            <a href="#">This is a link</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const styles = {
    cardSize: {
    }
}