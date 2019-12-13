import { createStore } from 'redux';

const rootReducer = (a, b) => {
  console.log('a :', a);
  console.log('b :', b);
  return a;
};
const store = createStore(rootReducer);

export default store;
