import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import budgetReducer from './budgetReducer';

// const rootReducer = (state = {}, action) => {
//   console.log('action :', action);
//   return state;
// };
const store = createStore(budgetReducer, devToolsEnhancer());

export default store;
