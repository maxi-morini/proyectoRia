import React, { Fragment } from 'react';
import Titulo from './Titulo'
import { BrowserRouter, Route, Switch, Link, withRouter} from 'react-router-dom';
import LogInRegistro from './LoginRegistro';

class LogIn extends React.Component {
	constructor(props){
		super(props);
		this.state={"user":'',
					"logiName":'',
					"pass":'',
					"jugadores":'',
					"validado":false
	};
	};

	async componentDidMount(){
		const url = "/api/jugadores";
		const response = await fetch(url);
		const data= await response.json();
		this.setState({jugadores : data});
	}
	

	onSubmit = (e)=>{        
		e.preventDefault();
		 if(this.state.validado){
			this.props.history.push(`/panel:${this.state.user}`)
		}
    }
    onchange = e=>{     
		let form = document.getElementById("in");
		let coso = document.getElementById("hijo");
		if(coso!== null){
			form.removeChild(coso);
		}   
        this.setState({
            [e.target.name] : e.target.value
	})
	}	
	onClick = e =>{
		let form = document.getElementById("in");
		const data = this.state.jugadores;
		let i = 0;
		while ((i <data.length)&& (this.state.logiName != data[i].logiName)){
			i++;
		}
		if (i <data.length) {
			if(data[i].pass!==this.state.pass){
				const node = document.createElement("h1");
				const text = document.createTextNode("Pass incorrecto");
				node.setAttribute("id","hijo")
				node.appendChild(text);
				form.appendChild(node);
			}else{
				this.setState({validado : true,
								user: data[i].user});}}
		else{
			const node = document.createElement("h1");
			const text = document.createTextNode("Login name incorrecto");
			node.setAttribute("id","hijo")
			node.appendChild(text);
			form.appendChild(node);
		}
	}

	render() {
		return (
			<Fragment>
			<Titulo text={"GameQuiz"}/>
			<form id="in" onSubmit={this.onSubmit} >
            <input type="text"
            name="logiName" 
            placeholder="Login Name" 
            onChange={this.onchange} 
            value ={this.state.logiName}/><br></br>
			<input   type="password" 
			placeholder="Constraseña"
            name="pass" 
            onChange={this.onchange} 
            value ={this.state.pass}/>
            <br/>
			<input  type="submit" onClick={this.onClick} value="Ingresar"/>
        	</form>
			<Link to="/registrar">Registrarse</Link>
			</Fragment>
		);
	}

} export default withRouter(LogIn);