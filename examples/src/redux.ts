import { createStore, Action } from 'redux';

const initialState = { value: 0 };

function counterReducer(state = initialState, action: Action) {
  switch (action.type) {
    case 'counter/incremented':
      return {
        value: state.value + 1,
      };
    case 'counter/decremented':
      return {
        value: state.value - 1
      };
    default:
      return state;
  }
}

// create store and params is Reducer
const store = createStore(counterReducer);

store.subscribe(() => console.log(store.getState()));

const incrementActon = {
  type: 'counter/incremented'
};

store.dispatch(incrementActon);

const decrementActon = {
  type: 'counter/decremented'
};

store.dispatch(decrementActon);

