import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Value from '../Value';

const Container = styled.section`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
`;

const Values = ({ budget, expenses }) => {
  const sumExpenses = () => {
    return expenses.reduce((acc, el) => {
      return el.amount ? acc + Number(el.amount) : acc;
    }, 0);
  };

  const balance = Number(budget) - sumExpenses();

  return (
    <Container>
      <Value label="Budget" value={budget} isPositive />
      <Value label="Expenses" value={sumExpenses()} />
      <Value label="Balance" value={balance} isPositive={balance >= 0} />
    </Container>
  );
};

const mapStateToProps = ({ budget, expenses }) => ({
  budget,
  expenses,
});

export default connect(mapStateToProps)(Values);
