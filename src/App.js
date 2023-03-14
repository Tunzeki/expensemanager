import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import expenses from './ExpensesList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDesc } from '@fortawesome/free-solid-svg-icons';

//const element = <FontAwesomeIcon icon={faEnvelope} />

function ExpensesTable({ data }) {
  // [datesort, setDateSort] = useState();
  const dataCopy = data;

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
        <th>Date <FontAwesomeIcon icon={faSortDesc} /></th>
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
