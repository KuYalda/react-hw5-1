import React, { useState } from 'react';
import Form from '../shared/Form';
import Label from '../shared/Label';
import Input from '../shared/Input';
import Button from '../shared/Button';

const labelStyles = `
  margin-bottom: 16px;  
`;

const BudgetForm = ({ onSave }) => {
  const [budget, setBudget] = useState(0);

  const handleChange = ({ target }) => {
    setBudget(target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    onSave(budget);
    setBudget(0);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label customStyles={labelStyles}>
        Enter your total budget
        <Input type="number" value={budget} onChange={handleChange} />
      </Label>

      <Button label="Save" type="submit" />
    </Form>
  );
};

export default BudgetForm;
