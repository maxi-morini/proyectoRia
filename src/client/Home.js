import React, { Fragment } from 'react';
import Titulo from "./Titulo"
import { Link, withRouter } from 'react-router-dom';

//import Jugar from "./Jugar2/Jugar.js"
import Jugar from "./Jugar.js"

class Home extends React.Component {

	constructor(props) {
		super(props);
		this.state = { text: "Game Quiz" }
	}



	render() {

		return (
			<div className="columna" style={{ height: "100vh" }}>
				<Titulo text={this.state.text} />
				<Link to="/jugar" className="bloque">Jugar</Link>
				<Link to="/login" className="bloque">Crear Juego</Link>
			</div>

		);
	}

} export default withRouter(Home);