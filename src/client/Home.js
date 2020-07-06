import React, { Fragment } from 'react';
import Titulo from "./Titulo"
import { Link , withRouter} from 'react-router-dom';
class Home extends React.Component {

	constructor(props){
        super(props);
        this.state= {text : "Game Quiz"}
    }


	render() {
		
		return (
			<div className="columna">
				<Titulo text={this.state.text}/>
            	<Link to="/jugar"  className="bloque">Jugar</Link>
				<Link to="/login"  className="bloque">Crear Juego</Link>
			</div>
		);
	}

} export default withRouter(Home);