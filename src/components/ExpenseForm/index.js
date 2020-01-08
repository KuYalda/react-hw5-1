import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addExpense } from '../../redux/expensesActions';
import shortid from 'shortid';
import ExpenseForm from './ExpenseForm';

const ExpenseFormContainer = ({ onSave }) => {
  const [expense, setExpense] = useState({
    name: '',
    amount: '',
  });

  const handleChange = ({ target: { name, value } }) => {
    setExpense(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const expenseID = shortid();

    onSave(expense, expenseID);
    setExpense({ name: '', amount: '' });
  };

  return (
    <ExpenseForm
      item={expense}
      onSubmit={handleSubmit}
      onChange={handleChange}
    />
  );
};

const mapDispatchToProps = dispatch => ({
  onSave: (expense, id) => dispatch(addExpense(expense, id)),
});

export default connect(null, mapDispatchToProps)(ExpenseFormContainer);
