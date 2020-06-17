import React, { Fragment } from 'react';
import Titulo from '../Titulo';
import Juego from '../Juego/Juego'
class LogInRegistro extends React.Component {
	// handler=(e)=>{
	// 	e.preventDefault();
	// }
	render() {
		return (
			<Fragment>
			<Titulo text={"GameQuiz"}/>
			<div className="contenedor"> 
            <form action={<Juego/>} method="post">
                <input type="text" placeholder="Nombre"/>
                <input type="date" placeholder="Fecha de nacimiento"/>
                <input type="text" placeholder="Login Name"/>
                <input type="pasword" placeholder="Password"/>
                <input type="submit" value="Ingresar" />
            </form>
            </div>
			</Fragment>
		);
	}

} export default LogInRegistro;