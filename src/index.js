import store from './store';
import { bugAdded, bugRemoved } from './actions';

// state = reducer(state, action)
// notify subscribers

// store.subscribe => it runs when the state changes everytime.

const unsubscribe = store.subscribe(() => {
  console.log('State Changed', store.getState());
});

store.dispatch(bugAdded('Bug 1'));

// if it is called, after then nothing will be run in subscribe. it will not be notified;

unsubscribe();

store.dispatch(bugRemoved(1));

console.log(store.getState());
