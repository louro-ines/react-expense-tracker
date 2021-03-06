import React, { useState } from 'react';
import Expenses from "./components/Expenses/Expenses"
import NewExpense from './components/NewExpense/NewExpense'

function App() {
  const DUMMY_EXPENSES = [
    {
      id: 'e1',
      title: 'Drinks and Food',
      amount: 95.55,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Reparation',
      amount: 294.65,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'Plane Tickets',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)

  const addExpenseHandler = (expense) => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses]
    })
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses}/>
    </div>
  )
}

export default App
