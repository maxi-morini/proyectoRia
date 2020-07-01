export const gameCreationSaveType = "GAME_SAVE";

export const gameCreationSave = (text) => ({
	type: gameCreationSaveType,
	payload: text,
});
//export const  gameCreationSave;

/*
export const gameCreationSave = (text) => {
        return {
                type: "GAME_SAVE",
                payload: text,
        };
};
*/
export const questionAdd = (text) => {
	return {
		type: "QUESTION_ADD",
		payload: text,
	};
};
export const questionoRemove = (text) => {
	return {
		type: "QUESTION_REMOVE",
		payload: text,
	};
};

export const gameCreationGetAll = () => {
	return {
		type: "GAME_GET_ALL"
	};
};




