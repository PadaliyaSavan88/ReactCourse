import React, { useState } from 'react';

import Card from '../UI/Card';
import './Expenses.css';
import ExpenseFilter from '../Expenses/ExpensesFilter'
import ExpenseList from './ExpenseList';
import ExpenseChart from './ExpenseChart';

const Expenses = (props) => {

  let [filter, setFilter] = useState('2020')
  const filterChanged = (filter) => {
    setFilter(filter)
  }
  console.log(props.items)
  let filteredItems = props.items.filter(_x => _x.date.getFullYear().toString() === filter)

  return (
    <Card className="expenses">
      <ExpenseFilter selectedFilter={filter} onFilterChange={filterChanged} />
      <ExpenseChart expenses={filteredItems} />
      <ExpenseList items={filteredItems} />
    </Card>
  );
}

export default Expenses;
