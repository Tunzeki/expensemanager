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

const StatusSortAscIcon = () => {
  return (
    <>
      Status <FontAwesomeIcon icon={faSortAsc} />
    </>
  );
};

const StatusSortDescIcon = () => {
  return (
    <>
      Status <FontAwesomeIcon icon={faSortDesc} />
    </>
  );
};

const StatusSortUpDownIcon = () => {
  return (
    <>
      Status <FontAwesomeIcon icon={faSort} />
    </>
  );
};

const CommentSortAscIcon = () => {
  return (
    <>
      Comment <FontAwesomeIcon icon={faSortAsc} />
    </>
  );
};

const CommentSortDescIcon = () => {
  return (
    <>
      Comment <FontAwesomeIcon icon={faSortDesc} />
    </>
  );
};

const CommentSortUpDownIcon = () => {
  return (
    <>
      Comment <FontAwesomeIcon icon={faSort} />
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

function SortStatusDescFunction() {
  const expensesCopy = expenses;
  return expensesCopy.sort(
    (a, b) => {
      let x = a.status.toLowerCase();
      let y = b.status.toLowerCase();
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

function SortStatusAscFunction() {
  const expensesCopy = expenses;
  return expensesCopy.sort(
    (a, b) => {
      let x = a.status.toLowerCase();
      let y = b.status.toLowerCase();
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

function SortCommentDescFunction() {
  const expensesCopy = expenses;
  return expensesCopy.sort(
    (a, b) => {
      let x = a.comment.toLowerCase();
      let y = b.comment.toLowerCase();
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

function SortCommentAscFunction() {
  const expensesCopy = expenses;
  return expensesCopy.sort(
    (a, b) => {
      let x = a.comment.toLowerCase();
      let y = b.comment.toLowerCase();
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

function ExpensesTable({ data }) {
  const [dateSort, setDateSort] = useState(0);
  

  const [tableSort, setTableSort] = useState(() => <SortDateDescFunction />); 

  const [merchantSort, setMerchantSort] = useState(3);

  const [totalSort, setTotalSort] = useState(6);

  const [statusSort, setStatusSort] = useState(9);

  const [commentSort, setCommentSort] = useState(12);

  const sortDate = () => {
    setMerchantSort(3);
    setTotalSort(6);
    setStatusSort(9);
    setCommentSort(12);
    
    dateSort === 0 ? setDateSort(1)
      : dateSort === 1 ? setDateSort(2)
        : setDateSort(0);
    
    dateSort === 0 ? setTableSort(() => <SortDateDescFunction />)
      : dateSort === 1 ? setTableSort(() => <DontSortTableFunction />)
        : setTableSort(() => <SortDateAscFunction />)
               
  }

  const sortMerchant = () => {
    setDateSort(2);
    setTotalSort(6);
    setStatusSort(9);
    setCommentSort(12);

    merchantSort === 3 ? setMerchantSort(4)
      : merchantSort === 4 ? setMerchantSort(5)
        : setMerchantSort(3);

    merchantSort === 3 ? setTableSort(() => <SortMerchantAscFunction />)
      : merchantSort === 4 ? setTableSort(() => <SortMerchantDescFunction />)
        : setTableSort(() => <DontSortTableFunction />)

  }

  const sortTotal = () => {
    setDateSort(2);
    setMerchantSort(3);
    setStatusSort(9);
    setCommentSort(12);

    totalSort === 6 ? setTotalSort(7)
      : totalSort === 7 ? setTotalSort(8)
        : setTotalSort(6);

    totalSort === 6 ? setTableSort(() => <SortTotalAscFunction />)
      : totalSort === 7 ? setTableSort(() => <SortTotalDescFunction />)
        : setTableSort(() => <DontSortTableFunction />)

  }

  const sortStatus = () => {
    setDateSort(2);
    setMerchantSort(3);
    setTotalSort(6);
    setCommentSort(12);

    statusSort === 9 ? setStatusSort(10)
      : statusSort === 10 ? setStatusSort(11)
        : setStatusSort(9);

    statusSort === 9 ? setTableSort(() => <SortStatusAscFunction />)
      : statusSort === 10 ? setTableSort(() => <SortStatusDescFunction />)
        : setTableSort(() => <DontSortTableFunction />)

  }

  const sortComment = () => {
    setDateSort(2);
    setMerchantSort(3);
    setTotalSort(6);
    setStatusSort(9);

    commentSort === 12 ? setCommentSort(13)
      : commentSort === 13 ? setCommentSort(14)
        : setCommentSort(12);

    commentSort === 12 ? setTableSort(() => <SortCommentAscFunction />)
      : commentSort === 13 ? setTableSort(() => <SortCommentDescFunction />)
        : setTableSort(() => <DontSortTableFunction />)

  }
    

  
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-2'>

        </div>
        <div className='col-8'>
          <table className='table'>
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
                <th onClick={sortStatus}>
                  {statusSort === 11 ? <StatusSortDescIcon />
                    : statusSort === 10 ? <StatusSortAscIcon />
                      : <StatusSortUpDownIcon />}
                </th>
                <th onClick={sortComment}>
                  {commentSort === 14 ? <CommentSortDescIcon />
                    : commentSort === 13 ? <CommentSortAscIcon />
                      : <CommentSortUpDownIcon />}
                </th>
              </tr>
            </thead>
            <tbody>
              {tableSort}
            </tbody>
          </table>
        </div>
        <div className='col-2'>

        </div>

      </div>
    </div>
    

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
