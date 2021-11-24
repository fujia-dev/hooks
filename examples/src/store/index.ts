import { createStore, applyMiddleware, Action } from 'redux';
import thunk from 'redux-thunk';

export interface IState {
  value: number;
}

const initialState = {
  value: 0
};

const composedEnhancer = applyMiddleware(thunk);

function counterReducer(state = initialState, action: Action) {
  switch (action.type) {
    case 'counter/incremented':
      return {
        ...state,
        value: state.value + 1,
      };
    case 'counter/decremented':
      return {
        ...state,
        value: state.value - 1
      };
    default:
      return state;
  }
}


export default createStore(counterReducer, composedEnhancer);

