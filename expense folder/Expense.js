import React from 'react';
import './Expense.css';


export default function Expense(props) {

  /* let date = props.date.toDateString();
  let title = props.title;
  let amount = props.amount; */

 /* const[title,settitle] = useState(props.title);
 const fun = () => 
 {
   settitle("new title")
 }

 const changetitle = (event) =>
 {
   settitle(event.target.value);
 } */



  return (
<>
    <div className='d1'>

      <div className='row p-4 bg-info' >
        <div className='col p-3 text-bg-secondary'>
          <p id="p1_1">{props.date}</p>
          <p id="p1_2">{props.title}</p>
        </div>

        <div className='col p-3 text-bg-secondary'>
          <p id="p2_1">${props.amount}</p>
          {/* <input type="text" onChange={changetitle}></input>
          <button onClick={fun}>click me</button> */}
          </div>
      </div>

    </div>
</>
  );
}
