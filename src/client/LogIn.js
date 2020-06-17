import React, { Fragment } from 'react';
import Titulo from './Titulo'
import { BrowserRouter, Route, Switch, Link} from 'react-router-dom';
//import LogInHTML from 'login.html';

class LogIn extends React.Component {
	constructor(props){
		super(props);
		this.state={"text":"Registrarse",
					"user":'',
					"pass":''
	};
	};


	

	render() {
		return (
			<Fragment>
			<Titulo text={"GameQuiz"}/>
			<div className="container"> 
				<form noValidate>
                <input id="user" type="text" placeholder="Usuario" />
                <input id="pass" type="pasword" placeholder="Contraseña" />
                <button >Ingresar</button>
				</form>
            </div>
			<Link to="/registrar">Registrarse</Link>
			</Fragment>

		);
	}

} export default LogIn;