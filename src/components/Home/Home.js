import React from 'react';

class Home extends React.Component {

	constructor(props) {
		super(props);
	}

	handleClick() {
		console.log('clicked');
	}

	render() {
		
		return (
			<article className="">
				<main className="">
					<div className=" ">
						<fieldset className="">
							<legend className="">Pagina Home, apretar el boton para ir a login</legend>
							<div className="">
								<input type="button" onClick={() => this.props.onRouteChange('LogIn')} />
								<button type="button" onClick={() => this.props.onRouteChange('LogIn')} >Click Me!</button> 
								<input type="button" onClick={this.handleClick} />
							</div>
						</fieldset>
					</div>
				</main>
			</article>
		);
	}

} export default Home;