import React from 'react';



export default class Categories extends React.Component {

    render() {
        return (
            <div className="col s12 ">
                <div className="col-sm-12 col-lg-6 offset-l3">
                    <ul class="w3-border w3-ul " style={styles.ul} >
                        <li type="button" style={styles.cat}>Ação</li>
                        <li type="button" style={styles.cat}>Aventura</li>
                        <li type="button" style={styles.cat}>RPG</li>
                        <li type="button" style={styles.cat}>Ação</li>
                        <li type="button" style={styles.cat}>Aventura</li>
                        <li type="button" style={styles.cat}>RPG</li>
                        <li type="button" style={styles.cat}>Ação</li>
                        <li type="button" style={styles.cat}>Aventura</li>
                        <li type="button" style={styles.cat}>RPG</li>
                    </ul>
                </div>
            </div>
        )
    }
}
const styles = {
    cat:{
        margin: '5px',
        borderStyle: 'ridge',
        width: '75%',
        backgroundColor: 'white',
        height: '30px',
    },
    ul:{
        textAlign: '-webkit-center',
    },
}