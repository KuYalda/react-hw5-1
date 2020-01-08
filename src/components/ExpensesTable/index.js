import React from 'react';
import { connect } from 'react-redux';
import { deleteExpense } from '../../redux/expensesActions';
import ExpensesTable from './ExpensesTable';

const ExpensesTableContainer = ({ expenses, onRemove }) => (
  <ExpensesTable items={expenses} onClick={onRemove} />
);

const mapStateToProps = ({ expenses }) => ({
  expenses,
});

const mapDispatchToProps = dispatch => ({
  onRemove: id => dispatch(deleteExpense(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ExpensesTableContainer);
