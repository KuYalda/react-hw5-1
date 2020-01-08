import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setBudget } from '../../redux/budgetActions';
import BudgetForm from './BudgetForm';

const BudgetFormContainer = ({ onSave }) => {
  const [budgetInput, setBudgetInput] = useState('');

  const handleChange = ({ target }) => {
    setBudgetInput(target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    onSave(budgetInput);
    setBudgetInput('');
  };

  return (
    <BudgetForm
      onSubmit={handleSubmit}
      value={budgetInput}
      onChange={handleChange}
    />
  );
};

const mapDispatchToProps = dispatch => ({
  onSave: value => dispatch(setBudget(value)),
});

export default connect(null, mapDispatchToProps)(BudgetFormContainer);
