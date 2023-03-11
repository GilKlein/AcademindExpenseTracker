import React from "react";

import "./ExpenseDate.css";

const ExpenseDate = (props) => {
	const month = props.date.toLocaleString("en-US", { month: "long" });
	// const day = props.date.toLocaleString("en-US", { day: "2-digit" });
	// const day2 = props.date;
	// const day = (day2) => (day2.setDate(day2.getDate() + 1);return day2);
	
	props.date.setDate(props.date.getDate() + 1);
	const day = props.date.toLocaleString("en-US", { day: "2-digit" });
	



	const year = props.date.getFullYear();

	return (
		<div className='expense-date'>
			<div className='expense-date__month'>{month}</div>
			<div className='expense-date__day'>{day}</div>
			<div className='expense-date__year'>{year}</div>
		</div>
	);
};

export default ExpenseDate;
