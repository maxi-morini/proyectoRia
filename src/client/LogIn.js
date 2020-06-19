import React, { Fragment } from 'react';
import Titulo from './Titulo'
import { BrowserRouter, Route, Switch, Link, withRouter} from 'react-router-dom';
//import LogInHTML from 'login.html';

class LogIn extends React.Component {
	constructor(props){
		super(props);
		this.state={"user":'',
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
			this.props.history.push("/")
		}
    }
    onchange = e=>{        
        this.setState({
            [e.target.name] : e.target.value
	})
	}	
	onClick = e =>{
		let form = document.getElementById("in");
		let coso = document.getElementById("hijo");
		if(coso!== null){
			form.removeChild(coso);
		}
		const data = this.state.jugadores;
		for( let i = 0; i <data.length; i++){
			const name = data[i].logiName;
			if(name===this.state.user){
				if(data[i].pass!==this.state.pass){
					const node = document.createElement("h1");
					const text = document.createTextNode("Pass incorrecto");
					node.setAttribute("id","hijo")
					node.appendChild(text);
					form.appendChild(node);
				}else{
					this.setState({validado : true});
					
				}
			}
		}
	}

	render() {
		return (
			<Fragment>
			<Titulo text={"GameQuiz"}/>
			<form id="in" onSubmit={this.onSubmit} >
            <input type="text"
            name="user" 
            placeholder="Usuario" 
            onChange={this.onchange} 
            value ={this.state.user}/><br></br>
			<input   type="password" 
			placeholder="Constraseña"
            name="pass" 
            onChange={this.onchange} 
            value ={this.state.pass}/>
            <br/>
			<input  type="submit" onClick={this.onClick} value="Ingresar"/>
        	</form>
			</Fragment>
		);
	}

} export default withRouter(LogIn);