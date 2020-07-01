/*
	Aca se importan todos los reducers para combinar.
*/
import { combineReducers } from "redux";

//import visibilityFilter from "./visibilityFilter";
//import todos from "./todos";
import loginReducer from "./isLogged";

//export default combineReducers({ isLogged, visibilityFilter });
const allReducers = combineReducers({
	isLogged: loginReducer/*,
	anotherredu: Another reducer
	*/
});

//export default combineReducers({ loggedReducer });
export default allReducers;
