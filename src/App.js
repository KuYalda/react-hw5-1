import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import shortid from 'shortid';
import BudgetForm from './components/BudgetForm';
import ExpenseForm from './components/ExpenseForm';
import ExpensesTable from './components/ExpensesTable';
import Values from './components/Values';

const Container = styled.div`
  display: grid;
  grid-template-columns: 340px 1fr;
  align-items: flex-start;
  grid-gap: 24px;
  max-width: 960px;
  padding-left: 16px;
  padding-right: 16px;
  margin-left: auto;
  margin-right: auto;
`;

const calculateTotalExpenses = expenses => {
  // return expenses.reduce((total, expense) => total + expense.amount, 0);
};

const calculateBalance = (budget, expenses) => budget - expenses;

const App = ({ budget, expenses = [] }) => {
  const saveBudget = value => {
    // this.setState({ budget: value });
  };

  const addExpense = ({ name, amount }) => {
    const expense = {
      id: shortid.generate(),
      name,
      amount: Number(amount),
    };

    // this.setState(state => ({
    //   expenses: [expense, ...state.expenses],
    // }));
  };

  const removeExpense = id => {
    // this.setState(state => ({
    //   expenses: state.expenses.filter(expense => expense.id !== id),
    // }));
  };

  // const { expenses, budget } = this.state;
  const totalExpenses = calculateTotalExpenses(expenses);
  const balance = calculateBalance(budget, totalExpenses);

  return (
    <Container>
      <BudgetForm onSave={saveBudget} />
      <Values budget={budget} expenses={totalExpenses} balance={balance} />
      <ExpenseForm onSave={addExpense} />
      {expenses.length > 0 && (
        <ExpensesTable items={expenses} onRemove={removeExpense} />
      )}
    </Container>
  );
};

const mapStateToProps = state => ({
  budget: state,
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps)(App);
