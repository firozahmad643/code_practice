import React, { useState } from 'react';
import './AddNewExpense.css';

export default function AddNewExpense(props) {

  const [entereddate, setentereddate] = useState('');
  const [enteredtitle, setenteredtitle] = useState('');
  const [enteredamount, setenteredamount] = useState('');

  const ondatechange = (event) => {
    setentereddate(event.target.value);
  };
  const ontitlechange = (event) => {
    setenteredtitle(event.target.value);
  };
  const onamountchange = (event) => {
    setenteredamount(event.target.value);
  };

  const formSubmit = (event) => {
    event.preventDefault();

    if (entereddate && enteredtitle && enteredamount !== "") {
      const ExpenseObj =
      {
        date: entereddate,
        title: enteredtitle,
        amount: enteredamount
      };

      props.onaddexpense(ExpenseObj);
    }

    else
    {
      alert('Each input field is compulsory.');
    }

    setentereddate('');
    setenteredtitle('');
    setenteredamount('');



  }

  return (
    <form onSubmit={formSubmit}>
      <div className='row' id="row_1">
        <div className="col-6">
          <label htmlFor="input_1">Date:</label>
          <input id="input_1" type="date" onChange={ondatechange} value={entereddate} />
        </div>
        <div className="col-6">
          <label htmlFor="input_2">Title:</label>
          <input id="input_2" type="text" onChange={ontitlechange} value={enteredtitle} />
        </div>
        <div className="col-6">
          <label htmlFor="input_3">Amount:</label>
          <input id="input_3" type="number" min="1" onChange={onamountchange} value={enteredamount} />
        </div>
        <div className="col-4">
          <button type="submit" id="row_4col_first_children">Add Expense</button>
        </div>
      </div>
    </form>
  )
}
