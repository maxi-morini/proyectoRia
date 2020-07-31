/*
    Se importan las acciones, que son objetos..
    Me recuerdan a Headers HTTP.
    Contienen un tipo y payload, ese tipo es exportado por el archivo
    y tambien usado por el mismo.
*/
import { questionVideoAdd as questionVideoAdd } from '../actions/QuestionCreationActions';

// data para ejemplo
//import items from '../../data/items';

/*
    Esto de redux se maneja mediante cosas inmutables, no editando datos directamente,
    sino mostrando intencion de mutacion.
*/
const defaultState = []; // Este es un array de juegos creados.

function reducer(state = defaultState, { /* action */ type, payload }) {

	switch (type) {

		case questionVideoAdd: {
			if (!payload) {
				return null;
			} else {
                /*return { 
                    ...state,
                    arr: [...state.arr, action.newItem]
                }*/
                /*return { 
                    ...state,
                    arr: [...state.arr, payload]
				}*/
				state.push(payload)
				//defaultState.push(payload);
			}

			//return items.find(n => n.id === payload);
		}

		default:
			return state;
	}
}



/*

const mapStateToProps = state => ({
    suggestions: state.suggestions,
});

const mapDispatchToProps = {
    findSuggestions,
    findResults,
};

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(IAppBar)
);

*/

export default reducer;
