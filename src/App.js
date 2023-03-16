import { useState } from 'react';
import './App.css';
import expenses from './ExpensesList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort, faSortAsc, faSortDesc } from '@fortawesome/free-solid-svg-icons';

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

const MerchantSortAscIcon = () => {
  return (
    <>
      Merchant <FontAwesomeIcon icon={faSortAsc} />
    </>
  );
};

const MerchantSortDescIcon = () => {
  return (
    <>
      Merchant <FontAwesomeIcon icon={faSortDesc} />
    </>
  );
};

const MerchantSortUpDownIcon = () => {
  return (
    <>
      Merchant <FontAwesomeIcon icon={faSort} />
    </>
  );
};

const TotalSortAscIcon = () => {
  return (
    <>
      Total <FontAwesomeIcon icon={faSortAsc} />
    </>
  );
};

const TotalSortDescIcon = () => {
  return (
    <>
      Total <FontAwesomeIcon icon={faSortDesc} />
    </>
  );
};

const TotalSortUpDownIcon = () => {
  return (
    <>
      Total <FontAwesomeIcon icon={faSort} />
    </>
  );
};

function TableRow({ row }) {
  return (
    <tr>
      <td>{row.createdAt}</td>
      <td>{row.merchant}</td>
      <td>{row.total}</td>
      <td>{row.status}</td>
      <td>{row.comment}</td>
    </tr>
  );
}

function SortDateDescFunction() {
  const expensesCopy = expenses;
  return expensesCopy.sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  ).map(
    v => {
      return <TableRow row={v} />;
    }
  )
}

function SortDateAscFunction() {
  const expensesCopy = expenses;
  return expensesCopy.sort(
    (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
  ).map(
    v => {
      return <TableRow row={v} />;
    }
  )
}

function DontSortTableFunction() {
  const expensesCopy = expenses;
  return expensesCopy.map(
    v => {
      return <TableRow row={v} />;
    }
  )
}

function SortMerchantDescFunction() {
  const expensesCopy = expenses;
  return expensesCopy.sort(
    (a, b) => {
      let x = a.merchant.toLowerCase();
      let y = b.merchant.toLowerCase();
      if (x < y) { return 1; }
      if (x > y) { return -1; }
      return 0;
    }
  ).map(
    v => {
      return <TableRow row={v} />;
    }
  )
}

function SortMerchantAscFunction() {
  const expensesCopy = expenses;
  return expensesCopy.sort(
    (a, b) => {
      let x = a.merchant.toLowerCase();
      let y = b.merchant.toLowerCase();
      if (x < y) { return -1; }
      if (x > y) { return 1; }
      return 0; 
    }
  ).map(
    v => {
      return <TableRow row={v} />;
    }
  )
}

function SortTotalDescFunction() {
  const expensesCopy = expenses;
  return expensesCopy.sort(
    (a, b) => b.total - a.total
  ).map(
    v => {
      return <TableRow row={v} />;
    }
  )
}

function SortTotalAscFunction() {
  const expensesCopy = expenses;
  return expensesCopy.sort(
    (a, b) => a.total - b.total
  ).map(
    v => {
      return <TableRow row={v} />;
    }
  )
}

function ExpensesTable({ data }) {
  const [dateSort, setDateSort] = useState(0);
  

  const [tableSort, setTableSort] = useState(() => <SortDateDescFunction />); 

  const [merchantSort, setMerchantSort] = useState(3);

  const [totalSort, setTotalSort] = useState(6);

  const sortDate = () => {
    setMerchantSort(3);
    
    dateSort === 0 ? setDateSort(1)
      : dateSort === 1 ? setDateSort(2)
        : setDateSort(0);
    
    dateSort === 0 ? setTableSort(() => <SortDateDescFunction />)
      : dateSort === 1 ? setTableSort(() => <DontSortTableFunction />)
        : setTableSort(() => <SortDateAscFunction />)
               
  }

  const sortMerchant = () => {
    setDateSort(2);

    merchantSort === 3 ? setMerchantSort(4)
      : merchantSort === 4 ? setMerchantSort(5)
        : setMerchantSort(3);

    merchantSort === 3 ? setTableSort(() => <SortMerchantAscFunction />)
      : merchantSort === 4 ? setTableSort(() => <SortMerchantDescFunction />)
        : setTableSort(() => <DontSortTableFunction />)

  }

  const sortTotal = () => {
    setDateSort(2);

    totalSort === 6 ? setTotalSort(7)
      : totalSort === 7 ? setTotalSort(8)
        : setTotalSort(6);

    totalSort === 6 ? setTableSort(() => <SortTotalAscFunction />)
      : totalSort === 7 ? setTableSort(() => <SortTotalDescFunction />)
        : setTableSort(() => <DontSortTableFunction />)

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
          <th onClick={sortMerchant}>
            {merchantSort === 5 ? <MerchantSortDescIcon />
              : merchantSort === 4 ? <MerchantSortAscIcon />
                : <MerchantSortUpDownIcon />}
          </th>
          <th onClick={sortTotal}>
            {totalSort === 8 ? <TotalSortDescIcon />
              : totalSort === 7 ? <TotalSortAscIcon />
                : <TotalSortUpDownIcon />}
          </th>
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
