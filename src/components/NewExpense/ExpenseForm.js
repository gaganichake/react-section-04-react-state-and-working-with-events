import "./ExpenseForm.css"
import { useState } from "react";

const ExpenseForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");

    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // });

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);

        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value
        // });

        // setUserInput((prevState) => {
        //     return {
        //         ...prevState,
        //         enteredTitle: event.target.value
        //     };
        
        // console.log(userInput.enteredTitle);
        // console.log(enteredTitle);
    };

    const amountChangeHanlder = (event) => {
        setEnteredAmount(event.target.value);

        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value
        // });

        // setUserInput((prevState) => {
        //     return {
        //         ...prevState,
        //         enteredAmount: event.target.value
        //     };
        // });

        // console.log(userInput.enteredAmount);
        // console.log(enteredAmount);
    };

    const dateChangeHanlder = (event) => {
        setEnteredDate(event.target.value);

        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value
        // });

        // setUserInput((prevState) => {
        //     return {
        //         ...prevState,
        //         enteredDate: event.target.value
        //     };
        // });
        
        // console.log(userInput.enteredDate);
        // console.log(enteredDate);
    };

    const submitHandler = (event) => {
        event.preventDefault(); // Prevent default behavior of the browser from submitting the form data and go the the next page.

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };

        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Titile</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHanlder}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2022-01-02" max="2025-12-31" value={enteredDate} onChange={dateChangeHanlder}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;