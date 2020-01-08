import { Types } from './expensesActions';

const expensesReducer = (state = [], action) => {
  switch (action.type) {
    case Types.ADD_EXPENSE:
      return [...state, action.payload];
    case Types.DELETE_EXPENSE:
      return state.filter(el => el.id !== action.payload);
    default:
      return state;
  }
};

export default expensesReducer;
