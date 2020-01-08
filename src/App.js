import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
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

const App = ({ expenses }) => (
  <Container>
    <BudgetForm />
    <Values />
    <ExpenseForm />
    {expenses.length > 0 && <ExpensesTable />}
  </Container>
);

const mapStateToProps = ({ expenses }) => ({
  expenses,
});

export default connect(mapStateToProps)(App);
