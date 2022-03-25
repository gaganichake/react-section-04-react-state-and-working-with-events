import "./ExpenseForm.css"
import { useState } from "react";

const ExpenseForm = () => {

    // const [enteredTitle, setEnteredTitle] = useState("");
    // const [enteredAmount, setEnteredAmount] = useState("");
    // const [enteredDate, setEnteredDate] = useState("");

    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    });

    const titleChangeHandler = (event) => {
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value
        // });
        setUserInput((prevState) => {
            return {
                ...userInput,
                enteredTitle: event.target.value
            };
        });
        console.log(userInput.enteredTitle);
    }

    const amountChangeHanlder = (event) => {
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value
        // });
        setUserInput((prevState) => {
            return {
                ...userInput,
                enteredAmount: event.target.value
            };
        });
        console.log(userInput.enteredAmount);

    }

    const dateChangeHanlder = (event) => {
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value
        // });
        setUserInput((prevState) => {
            return {
                ...userInput,
                enteredDate: event.target.value
            };
        });
        console.log(userInput.enteredDate);
    }

    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Titile</label>
                    <input type="text" onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" onChange={amountChangeHanlder}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2022-01-02" max="2025-12-31" onChange={dateChangeHanlder}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;