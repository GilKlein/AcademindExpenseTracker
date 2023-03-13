import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
	// Commenting out as git example

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
		// })
		// setUserInput((prevState) => {
		//     return { ...prevState, enteredTitle: event.target.value };
		// });
	};
	const amountChangeHandler = (event) => {
		setEnteredAmount(event.target.value);
		// setUserInput({
		//     ...userInput,
		//     enteredAmount: event.target.value
		// })
	};
	const dateChangeHandler = (event) => {
		setEnteredDate(event.target.value);
		console.log(event.target.value);
		// setUserInput({
		//     ...userInput,
		//     enteredDate: event.target.value
		// })
	};

	const submitHanlder = (event) => {
		event.preventDefault();
		console.log(enteredDate);
		const expenseData = {
			title: enteredTitle,
			amount: +enteredAmount,
			date: new Date(enteredDate),
		};

		props.onSaveExpenseData(expenseData);
		setEnteredTitle("");
		setEnteredAmount("");
		setEnteredDate("");
	};

	return (
		<form onSubmit={submitHanlder}>
			<div className='new-expense__controls'>
				<div className='new-expense__control'>
					<label>Title</label>
					<input
						type='text'
						value={enteredTitle}
						onChange={titleChangeHandler}
					/>
				</div>
				<div className='new-expense__control'>
					<label>Amount</label>
					<input
						type='number'
						value={enteredAmount}
						min='0.01'
						step='0.01'
						onChange={amountChangeHandler}
					/>
				</div>
				<div className='new-expense__control'>
					<label>Date</label>
					<input
						type='date'
						value={enteredDate}
						min='2018-01-01'
						max='2024-01-01'
						onChange={dateChangeHandler}
					/>
				</div>
			</div>
			<div className='new-expense__actions'>
				<button type="button" onClick={props.onCancel}>Cancel</button>
				<button type='submit'>Add Expense</button>
			</div>
		</form>
	);
};

export default ExpenseForm;
