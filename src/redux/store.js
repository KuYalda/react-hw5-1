import { createStore, combineReducers } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import budgetReducer from './budgetReducer';
import expensesReducer from './expensesReducer';

const rootReducer = combineReducers({
  budget: budgetReducer,
  expenses: expensesReducer,
});

const store = createStore(rootReducer, devToolsEnhancer({ trace: true }));

export default store;
