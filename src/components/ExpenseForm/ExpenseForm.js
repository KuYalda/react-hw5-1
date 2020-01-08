import React from 'react';
import Form from '../shared/Form';
import Label from '../shared/Label';
import Input from '../shared/Input';
import Button from '../shared/Button';

const labelStyles = `
  margin-bottom: 16px;
`;

const ExpenseForm = ({ item, onSubmit, onChange }) => (
  <Form onSubmit={onSubmit}>
    <Label customStyles={labelStyles}>
      Enter expense name
      <Input type="text" name="name" value={item.name} onChange={onChange} />
    </Label>
    <Label customStyles={labelStyles}>
      Enter expense amount
      <Input
        type="number"
        name="amount"
        value={item.amount}
        onChange={onChange}
      />
    </Label>

    <Button label="Add" type="submit" />
  </Form>
);

export default ExpenseForm;
