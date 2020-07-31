export const questionSave = (text) => {
	return {
		type: "QUESTION_SAVE",
		payload: text,
	};
};
export const questionVideoAdd = (text) => {
	return {
		type: "QUESTION_VIDEOURL_ADD",
		payload: text,
	};
};
export const questionVideoRemove = (text) => {
	return {
		type: "QUESTION_VIDEOURL_REMOVE",
		payload: text,
	};
};

/*
export const type = "QUESTION_VIDEOURL_ADD";
const questionVideoAdd = (text) => ({
    type,
    payload: text,
});
export default questionVideoAdd;
*/
/*
export const logOff = () => {
	return {
		type: 'LOG_OFF'
	};
};
*/

/*
export const type = 'findSuggestions';
const findSuggestions = (text) => ({
    type,
    payload: text,
});
export default findSuggestions;
*/
/*
let nextTodoId = 0
export const addTodo = text => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})
export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})
*/