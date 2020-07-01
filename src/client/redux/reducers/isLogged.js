const loggedReducer = (state = false, action) => {
	switch(action.type){
		case "LOG_IN":
			return true;
		case "LOG_OFF":
			return false;
		default:
			return state;
	}
}
export default loggedReducer;