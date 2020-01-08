import React from 'react';
import Form from '../shared/Form';
import Label from '../shared/Label';
import Input from '../shared/Input';
import Button from '../shared/Button';

const labelStyles = `
  margin-bottom: 16px;
`;

const BudgetForm = ({ onSubmit, value, onChange }) => (
  <Form onSubmit={onSubmit}>
    <Label customStyles={labelStyles}>
      Enter your total budget
      <Input type="number" value={value} onChange={onChange} />
    </Label>

    <Button label="Save" type="submit" />
  </Form>
);

export default BudgetForm;
