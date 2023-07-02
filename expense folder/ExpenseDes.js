import React, { useState } from 'react'
import Expense from './Expense';
import AddNewExpense from './AddNewExpense';

export default function ExpenseDes() {


   /*  let date = new Date("2020/11/22");
   //  let d = date.toDateString();
    let title = "school fee";
    let amount = 300; */

   let des =
      [

         {

            date: "2022/11/22",
            title: "school fee",
            amount: 3000
         },

         {

            date: "2022/11/22",
            title: "books price",
            amount: 1000
         },

         {

            date: "2022/11/22",
            title: "tuition fee",
            amount: 1500
         },

         {

            date: "2022/11/22",
            title: "spend money",
            amount: 8000
         },
      ];

   const [onsaveExpense, addnewexpense] = useState(des);

   const onaddexpense = (saveExpense) => {
      const addexpense =
      {
         ...saveExpense,
      }
      const updatedExpense = [addexpense, ...onsaveExpense];
      addnewexpense(updatedExpense);


   }

   return (

      <div className="container my-5">
         <AddNewExpense onaddexpense={onaddexpense} />
         {onsaveExpense.map
            (
               (a, i) =>
                {
                  return <Expense key={i} date={a.date} title={a.title} amount={a.amount} /> 
               }
            )}

         {/* <Expense  date={des[0].date} title={des[0].title} amount={des[0].amount} />
   <Expense  date={des[1].date} title={des[1].title} amount={des[1].amount} />
   <Expense  date={des[2].date} title={des[2].title} amount={des[2].amount} />
   <Expense  date={des[3].date} title={des[3].title} amount={des[3].amount} /> */}

      </div>
   );
}
