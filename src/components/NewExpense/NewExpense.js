import './NewExpense.css'
import Form from './ExpenseForm'
import { useState } from 'react'

const NewExpense = (props) => {
    const [isEdit, setIsEdit] = useState(false);

    const saveExpenseData = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }

        props.onNewExpenseItem(expenseData)
    }
    const onButtonClick = () => {
        setIsEdit(true)
    }

    const onCancelAddNewExpense = () => {
        setIsEdit(false)
    }

    return (
        <div className='new-expense'>
            {isEdit && <Form onSaveExpenseData={saveExpenseData} onCancel={onCancelAddNewExpense} />}
            {!isEdit && <button onClick={onButtonClick}>Add New Expanse</button>}
        </div>
    )

}

export default NewExpense