import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import expenses from './ExpensesList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort, faSortAsc, faSortDesc } from '@fortawesome/free-solid-svg-icons';
import { func } from 'prop-types';

//const element = <FontAwesomeIcon icon={faEnvelope} />

const DateSortAscIcon = () => {
  return (
    <>
      Date <FontAwesomeIcon icon={faSortAsc} />
    </>
  );
};

const DateSortDescIcon = () => {
  return (
    <>
      Date <FontAwesomeIcon icon={faSortDesc} />
    </>
  );
};

const DateSortUpDownIcon = () => {
  return (
    <>
      Date <FontAwesomeIcon icon={faSort} />
    </>
  );
};

function SortDateDescFunction() {
  const expensesCopy = expenses;
  return expensesCopy.sort(
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
  )
}

function SortDateAscFunction() {
  const expensesCopy = expenses;
  return expensesCopy.sort(
    (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
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
  )
}

function DontSortTableFunction() {
  const expensesCopy = expenses;
  return expensesCopy.map(
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
  )
}

function ExpensesTable({ data }) {
  const [dateSort, setDateSort] = useState(0);

  const [tableSort, setTableSort] = useState(() => <SortDateDescFunction />);

  const dataCopy = data;
 

  const sortDate = () => {
    dateSort === 0 ? setDateSort(1)
      : dateSort === 1 ? setDateSort(2)
        : setDateSort(0);
    
    dateSort === 0 ? setTableSort(() => <SortDateDescFunction />)
      : dateSort === 1 ? setTableSort(() => <DontSortTableFunction />)
        : setTableSort(() => <SortDateAscFunction />)
               
  }
    

  
  return (
    <table>
      <thead>
        <tr>
          <th onClick={sortDate}>
            {dateSort === 1 ? <DateSortDescIcon />
              : dateSort === 0 ? <DateSortAscIcon />
                : <DateSortUpDownIcon />}
          </th>
          <th>Merchant</th>
          <th>Total</th>
          <th>Status</th>
          <th>Comment</th>
        </tr>
      </thead>
      <tbody>
        {tableSort}
      </tbody>
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
