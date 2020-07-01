/*
    Junta los reducers en uno solo.
    La gracia es separarlos para tener mas orden.
*/
import { createStore, combineReducers } from 'redux';

// investigar esto: son los reducers combinador que se hacen aqui
// import rootReducer from "./reducers";

// Se importa cada uno de los reducers.
import questionCreationReducer from './reducers/QuestionCreationReducer';
import gameCreationReducer from './reducers/GameCreationReducer';

// import suggestions from './reducers/suggestions';
// import currentItem from './reducers/currentItem';

const rootReducer = combineReducers({
    questionCreation: questionCreationReducer,
    gameCreationCache: gameCreationReducer
    /*
    potato: potatoReducer,
    tomato: tomatoReducer,
    results,
    suggestions,
    currentItem,
    */
});

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;

/*
export function configureStore(initialState = {}) {
  const store = createStore(reducers, initialState);
  return store;
};

export const store = configureStore();
*/