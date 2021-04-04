import store from './store';

// store.subscribe => it runs when the state changes everytime.

const unsubscribe = store.subscribe(() => {
  console.log('State Changed', store.getState());
});

store.dispatch({
  type: 'bugAdded',
  payload: {
    description: 'Bug1',
  },
});

// if it is called, after then nothing will be run in subscribe. it will not be notified;

unsubscribe();

store.dispatch({
  type: 'bugRemoved',
  payload: {
    id: 1,
  },
});

console.log(store.getState());
