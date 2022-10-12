import { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = (props) => {
    let [enteredTitle, setEnteredTitle] = useState('');
    let [enteredAmount, setEnteredAmount] = useState(0);
    let [enteredDate, setEnteredDate] = useState(new Date())

    const onTitleChange = (event) => {
        setEnteredTitle(event.target.value)
        enteredTitle = event.target.value
    }

    const onAmountChange = (event) => {
        setEnteredAmount(event.target.value)
        enteredAmount = event.target.value
    }

    const onDateChange = (event) => {
        setEnteredDate(event.target.value)
        enteredDate = event.target.value
    }

    const formSubmitted = (event) => {
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        }
        console.log(expenseData)
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('')
        setEnteredAmount('')
        setEnteredDate('') 
        props.onCancel();
    }   

    return (
        <form onSubmit={formSubmitted}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={onTitleChange}/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type="number" value={enteredAmount} min='1' step='1' onChange={onAmountChange}/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type="date" value={enteredDate} min='2022-01-01' max='2022-12-31' onChange={onDateChange}/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button onClick={props.onCancel}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )

}

export default ExpenseForm