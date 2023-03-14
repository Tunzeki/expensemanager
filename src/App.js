import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import expenses from './ExpensesList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort, faSortAsc, faSortDesc } from '@fortawesome/free-solid-svg-icons';

//const element = <FontAwesomeIcon icon={faEnvelope} />

const DateSortAsc = () => {
  return (
    <>
      Date <FontAwesomeIcon icon={faSortAsc} />
    </>
  );
};

const DateSortDesc = () => {
  return (
    <>
      Date <FontAwesomeIcon icon={faSortDesc} />
    </>
  );
};

const DateSortUpDown = () => {
  return (
    <>
      Date <FontAwesomeIcon icon={faSort} />
    </>
  );
};

function ExpensesTable({ data }) {
  const [datesort, setDateSort] = useState(
    {
      value: 1,


    }
  );
  const dataCopy = data;

  const sortDate = () => { 
    datesort.value === 1 ? setDateSort({
      value: 0,
    })
      : datesort.value === 0 ? setDateSort({
        value: -1,
      })
        : setDateSort({
          value: 1,
        });
    //const expensesDate === 

  };

  // Sort date in descending order
  const myExpenses = dataCopy.sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  ).map(
    v => {
      return (
        <tr>
          <td>{v.createdAt}</td>
          <td>{v.merchant}</td>
          <td>{v.total}</td>
          <td>{v.status}</td>
          <td>{v.comment}</td>
        </tr>
      );
    }
  );
  return (
    <table>
      <tr>
        <th onClick={sortDate}>
          {datesort.value === 1 ? <DateSortDesc />
            : datesort.value === 0 ? <DateSortAsc />
          : <DateSortUpDown />}
        </th>
        <th>Merchant</th>
        <th>Total</th>
        <th>Status</th>
        <th>Comment</th>
      </tr>
      {myExpenses}
    </table>

  );
}

function App() {
  return (
    <div className="App">
      <ExpensesTable data={expenses} />
    </div>
  );
}

export default App;
