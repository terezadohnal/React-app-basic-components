// komponenta v Reactu je pouze funkce v JS, co vraci JSX kod
import React from "react";

import { useState } from "react"; // tato funkce nam umozni provadet zmeny pri udalostech
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  // obvykle se predavane parametry nazyvaji •props•, jsou v nich uschovane jednotlive parametry
  // const expenseDate = props.date; // muzeme je taky priradit primo do textu a nemusime jit skrz promenne
  // const expenseTitle = props.title; // props names se musi matchovat v expenses
  // const expenseAmount = props.amount;

  const [title, setTitle] = useState(props.title); // hook, musi byt volan uvnitr funkce / registrace
  // 2 promenne - do title se ulozi props.title a setTitle je funkce, kterou budeme volat na nastaveni nove title

  const clickHandler = () => {
    setTitle("Updated"); // vkladame novou hodnotu
    // nezmeni hodnotu hned, ale naplanuje ji
  };

  return (
    // komplexni struktura
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;

// v {} muzeme mit basic JavaScript prikazy v ramci 'html'
