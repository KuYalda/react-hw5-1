export const Types = {
  SET_BUDGET: 'SET_BUDGET',
};

export const setBudget = value => ({
  type: Types.SET_BUDGET,
  payload: value,
});
