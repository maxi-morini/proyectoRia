import React, { Component, Fragment } from 'react'

export default class FormElegir extends Component {

	constructor(props) {
		super(props);
		this.state = {
			seleccionCodigo: {
				link: "",
				password: ""
			}
		}
	};

	// constructor(props){
	//     super(props);
	//     this.state={link:"",
	//                 pass:""}
	// };

	// onChange = e =>{

	//     this.setState({
	//         [e.target.name] : e.targe.value,
	//     })
	// }onChange={this.onChange} value={this.state.link}//onChange={this.onChange} value={this.state.pass}
	onChange(e) {
		this.setState(prevState => ({
			seleccionCodigo: {
				...prevState.seleccionCodigo,
				[e.target.name]: e.target.value
			}
		}));
	}

	render() {
		return (

			<Fragment>
				<input style={{ width: "100vw" }} type="text"
					name="link"
					value={this.state.seleccionCodigo.link}
					placeholder="Join game (link)" />
				<input style={{ width: "40%", alignSelf: "flex-end" }} type="password"
					name="password"
					value={this.state.seleccionCodigo.password}
					placeholder="Password" />
			</Fragment>
		)
	}
}
