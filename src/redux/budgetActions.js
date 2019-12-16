export const Types = {
  ADD_BUDGET: 'ADD_BUDGET',

  ADD_EXPENSE: 'ADD_EXPENSE',
  DELETE_EXPENSE: 'DELETE_EXPENSE',
};

export const setBudget = value => ({
  type: Types.ADD_BUDGET,
  payload: value,
});
