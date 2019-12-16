import React, { useState } from 'react';
import Form from '../shared/Form';
import Label from '../shared/Label';
import Input from '../shared/Input';
import Button from '../shared/Button';

const labelStyles = `
  margin-bottom: 16px;  
`;

const ExpenseForm = ({ onSave }) => {
  const [expense, setExpense] = useState({
    name: '',
    amount: 0,
  });

  const handleChange = ({ target: { name, value } }) => {
    setExpense(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    onSave({ ...expense });
    setExpense({ name: '', amount: 0 });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label customStyles={labelStyles}>
        Enter expense name
        <Input
          type="text"
          name="name"
          value={expense.name}
          onChange={handleChange}
        />
      </Label>
      <Label customStyles={labelStyles}>
        Enter expense amount
        <Input
          type="number"
          name="amount"
          value={expense.amount}
          onChange={handleChange}
        />
      </Label>

      <Button label="Add" type="submit" />
    </Form>
  );
};

export default ExpenseForm;
