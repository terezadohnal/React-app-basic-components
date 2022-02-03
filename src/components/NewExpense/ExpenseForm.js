import React, { useState } from "react";
import ExpenseDate from "../Expenses/ExpenseDate";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  // multi state approach
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState(""); //vzdy se uklada hodnota v podobe stringu, proto i u cisla vkladame defaultne prazdny string

  //   const [userInput, setUserInput] = useState({
  //     // ulozeni stavu najednou
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enteredDate: "",
  //   });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value); // !!! zikame vlozene value
    // setUserInput({
    //   ...userInput, // aby se ostatni key value pairs neztratily, muzeme je takto zkracene volat a zustanou nemenene
    //   enteredTitle: event.target.value, // nastavujeme to, co potrebujeme v updatovani tohoto stavu
    // });

    // musime tam poslat funkci, pokud zavisime na predchozim stavu !!!
    // setUserInput((prevState) => {
    //   // prijde tam predchozi stav (prazdny), uvnitr nastavime novy
    //   return { ...prevState, enteredTitle: event.target.value };
    // }); // react garantuje, ze ziskame ty nejnovejsi data
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault(); // predchazime automatickemu reloadovani stranky

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData); // nyni je to executed // komunikujeme k "rodici", predavame data nahoru
    setEnteredTitle(""); // po submitu se to vyresetuje a policka se vyprazdni
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          {/* two way binding */}
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2020-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
