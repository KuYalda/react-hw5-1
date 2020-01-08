export const Types = {
  ADD_EXPENSE: 'ADD_EXPENSE',
  DELETE_EXPENSE: 'DELETE_EXPENSE',
};

export const addExpense = (expense, id) => ({
  type: Types.ADD_EXPENSE,
  payload: { ...expense, id },
});

export const deleteExpense = id => ({
  type: Types.DELETE_EXPENSE,
  payload: id,
});
