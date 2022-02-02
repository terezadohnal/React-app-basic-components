// komponenta v Reactu je pouze funkce v JS, co vraci JSX kod
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

function ExpenseItem(props) { // obvykle se predavane parametry nazyvaji •props•, jsou v nich uschovane jednotlive parametry
    // const expenseDate = props.date; // muzeme je taky priradit primo do textu a nemusime jit skrz promenne
    const expenseTitle = props.title; // props names se musi matchovat v expenses
    // const expenseAmount = props.amount;

    return ( // komplexni struktura
        <div className='expense-item'>
            <ExpenseDate date={props.date}/>
        <div className='expense-item__description'>
            <h2>{expenseTitle}</h2>
            <div className='expense-item__price'>${props.amount}</div>
        </div>
        </div>
    );
}

export default ExpenseItem;

// v {} muzeme mit basic JavaScript prikazy v ramci 'html'


