import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpenseFilter from '../Expenses/ExpensesFilter'

const Expenses = (props) => {

  let [filter, setFilter] = useState('2020')
  const filterChanged = (filter) => {
    console.log(filter)
    setFilter(filter)
  }

  return (
    <Card className="expenses">
      <ExpenseFilter selectedFilter={filter} onFilterChange={filterChanged} />
      {props.items.map((expense) => (
        <ExpenseItem
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
      ))}
    </Card>
  );
}

export default Expenses;
