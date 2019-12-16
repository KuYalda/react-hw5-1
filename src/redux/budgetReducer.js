import { Types } from './budgetActions';

const budgetReducer = (state = 0, action) => {
  switch (action.type) {
    case Types.ADD_BUDGET:
      return state + action.payload;
    default:
      return state;
  }
};

export default budgetReducer;
