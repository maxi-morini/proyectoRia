import React, {Component} from 'react';
import{render} from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import App from './App'

// Redux
//import { Provider } from "react-redux";
//import store from "./client/redux/store";

// <React.StrictMode> Para que sea mas estricto con warnings y errores.
/*
const Root = (
	<React.StrictMode>
		<Provider store={store}> 
			<App />
		</Provider>
	</React.StrictMode>
);

ReactDOM.render(Root, document.getElementById('root'));
*/

//
//render(<BrowserRouter><App/></BrowserRouter>, document.getElementById('app'));
render(<BrowserRouter><App/></BrowserRouter>, document.getElementById('app'));