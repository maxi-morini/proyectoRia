/*
    Se importan las acciones, que son objetos..
    Me recuerdan a Headers HTTP.
    Contienen un tipo y payload, ese tipo es exportado por el archivo
    y tambien usado por el mismo.
*/
import { gameCreationSaveType as gameCreationSaveType } from '../actions/GameCreationActions';
import { gameCreationGetAll as gameCreationGetAll } from '../actions/GameCreationActions';

// data para ejemplo
//import items from '../../data/items';

/*
    Esto de redux se maneja mediante cosas inmutables, no editando datos directamente,
    sino mostrando intencion de mutacion.
*/
const defaultState = []; // Este es un array de juegos creados.

function reducer(state = defaultState, { /* action */ type, payload }) {

    console.log(type);
    //console.log(gameCreationSaveType);

    switch (type) {

        case gameCreationSaveType: {
            //console.log(payload);
            if (!payload) {
                return null;
            }else{
                /*return { 
                    ...state,
                    arr: [...state.arr, action.newItem]
                }*/
                /*return (
                   // { ...state, arr: [...state, payload] }
                   [...state, payload]// same as state.concat(action.portfolio)
				)*/
				/*return { 
                    ...state,
                    arr: [...state.arr, payload]
				}*/
				state.push(payload);
				return state;
				
                //defaultState.push(payload);
            }

            //return items.find(n => n.id === payload);
        }
        case gameCreationGetAll: {
            return state;
        }
        default:
            return state;
    }
}

/*
import { ADD_COIN } from './actions';

const initialState = [];

export default (state = initialState, action) => {
    switch(action.type) {
        case ADD_COIN:
            return [...state, action.portfolio]; // same as state.concat(action.portfolio)
        default:
            return state;
    }
}
*/

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
