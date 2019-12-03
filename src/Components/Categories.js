import React from 'react';
import {Link} from "react-router-dom";
import Home from './Home';


export default class Categories extends React.Component {

    render() {
        return (
            <div className="col s12 ">
                <div className="col-sm-12 col-lg-6 offset-l3">
                    <ul class="w3-border w3-ul " style={styles.ul} >
                        <li className="waves-effect waves-light btn-small" type="button" style={styles.cat}>Ação</li>
                        <li className="waves-effect waves-light btn-small" type="button" style={styles.cat}>Aventura</li>
                        <li className="waves-effect waves-light btn-small" type="button" style={styles.cat}>RPG</li>
                        <li className="waves-effect waves-light btn-small" type="button" style={styles.cat}>Ação</li>
                        <li className="waves-effect waves-light btn-small" type="button" style={styles.cat}>Aventura</li>
                        <li className="waves-effect waves-light btn-small" type="button" style={styles.cat}>RPG</li>
                        <li className="waves-effect waves-light btn-small" type="button" style={styles.cat}>Ação</li>
                        <li className="waves-effect waves-light btn-small" type="button" style={styles.cat}>Aventura</li>
                        <li className="waves-effect waves-light btn-small" type="button" style={styles.cat}>RPG</li>
                    </ul>
                    <div>
                    <Link className="waves-effect waves-light btn-small " style={styles.cat} to="/Home">Voltar</Link>
                    </div>
                </div>
            </div>
        )
    }
}
const styles = {
    cat:{
        margin: '2px',
        borderStyle: 'ridge',
        width: '95%',
        backgroundColor: 'black',
        height: '45px',
    },
    ul:{
        textAlign: '-webkit-center',
    },
}