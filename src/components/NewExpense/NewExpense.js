import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData); // posilame je vys do App
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <div className="new-expense">
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
        {/* posilame ukazatel na funkci, uvnitr ji zavolame a naplnime */}
      </div>
    );
  }

  return (
    <div className="new-expense">
      <button onClick={startEditingHandler}>Add New Expense</button>
    </div>
  );
};

export default NewExpense;
