import { useState } from 'react';
import './App.css';
import employeeExpenses from './ExpensesList';
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

function ExpensesForm() {
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");
  const [merchant, setMerchant] = useState("");
  const [newStatus, setNewStatus] = useState(true);
  const [inProgressStatus, setInProgressStatus] = useState(true);
  const [reimbursedStatus, setReimbursedStatus] = useState(true);

  const [expenses, setExpenses] = useState(() => employeeExpenses.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)));

  const [dateSort, setDateSort] = useState(1);


 // const [tableSort, setTableSort] = useState(() => <SortDateDescFunction expenses={expenses} />);

  const [merchantSort, setMerchantSort] = useState(3);

  const [totalSort, setTotalSort] = useState(6);

  const [statusSort, setStatusSort] = useState(9);

  const [commentSort, setCommentSort] = useState(12);

  const handleFromDate = (e) => {
    setFromDate(e.target.value);
    // hard coded values... To be changed to dynamic later
    const value = e.target.value === "" ? "2023-03-02" : e.target.value;   

    const lastDate = toDate === "" ? "2023-03-09" : toDate;
    const latestMin = min === "" ? 10.89 : min;
    const latestMax = max === "" ? 809.37 : max;
    const latestMerchant = merchant;
    const latestNewStatus = newStatus === true ? "New" : false;
    const latestInProgressStatus = inProgressStatus === true ? "In Progress" : false;
    const latestReimbursedStatus = reimbursedStatus === true ? "Reimbursed" : false;

    const merchantArray = ["Shuttle", "Fast food", "Electronics", "Restaurant", "Breakfast",
      "Parking", "Office supplies", "Rental car", "Hotel", "Taxi", "Ride sharing", "Airline"];
    const isValidMerchant = (x) => x === merchant;

    if (merchantArray.some(isValidMerchant) && newStatus && inProgressStatus && reimbursedStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt) >= new Date(value) &&
        new Date(a.createdAt) <= new Date(lastDate) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant === latestMerchant &&
        (a.status === latestNewStatus || a.status === latestInProgressStatus || a.status === latestReimbursedStatus)));
    } else if (merchantArray.some(isValidMerchant) && newStatus && inProgressStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt) >= new Date(value) &&
        new Date(a.createdAt) <= new Date(lastDate) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant === latestMerchant &&
        (a.status === latestNewStatus || a.status === latestInProgressStatus)));
    } else if (merchantArray.some(isValidMerchant) && newStatus && reimbursedStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt) >= new Date(value) &&
        new Date(a.createdAt) <= new Date(lastDate) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant === latestMerchant &&
        (a.status === latestNewStatus || a.status === latestReimbursedStatus)));
    } else if (newStatus && inProgressStatus && reimbursedStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt) >= new Date(value) &&
        new Date(a.createdAt) <= new Date(lastDate) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant !== "" &&
        (a.status === latestNewStatus || a.status === latestInProgressStatus || a.status === latestReimbursedStatus)));
    } else if (merchantArray.some(isValidMerchant) && newStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt) >= new Date(value) &&
        new Date(a.createdAt) <= new Date(lastDate) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant === latestMerchant &&
        (a.status === latestNewStatus)));
    } else if (newStatus && inProgressStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt) >= new Date(value) &&
        new Date(a.createdAt) <= new Date(lastDate) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant !== "" &&
        (a.status === latestNewStatus || a.status === latestInProgressStatus)));
    } else if (newStatus && reimbursedStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt) >= new Date(value) &&
        new Date(a.createdAt) <= new Date(lastDate) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant !== "" &&
        (a.status === latestNewStatus || a.status === latestReimbursedStatus)));
    } else if (newStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt) >= new Date(value) &&
        new Date(a.createdAt) <= new Date(lastDate) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant !== "" &&
        (a.status === latestNewStatus)));
    } else if (merchantArray.some(isValidMerchant) && inProgressStatus && reimbursedStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt) >= new Date(value) &&
        new Date(a.createdAt) <= new Date(lastDate) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant === latestMerchant &&
        (a.status === latestInProgressStatus || a.status === latestReimbursedStatus)));
    } else if (merchantArray.some(isValidMerchant) && inProgressStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt) >= new Date(value) &&
        new Date(a.createdAt) <= new Date(lastDate) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant === latestMerchant &&
        (a.status === latestInProgressStatus)));
    } else if (merchantArray.some(isValidMerchant) && reimbursedStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt) >= new Date(value) &&
        new Date(a.createdAt) <= new Date(lastDate) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant === latestMerchant &&
        (a.status === latestReimbursedStatus)));
    } else if (inProgressStatus && reimbursedStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt) >= new Date(value) &&
        new Date(a.createdAt) <= new Date(lastDate) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant !== "" &&
        (a.status === latestInProgressStatus || a.status === latestReimbursedStatus)));
    } else if (merchantArray.some(isValidMerchant)) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt) >= new Date(value) &&
        new Date(a.createdAt) <= new Date(lastDate) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant === latestMerchant));
    } else if (inProgressStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt) >= new Date(value) &&
        new Date(a.createdAt) <= new Date(lastDate) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant !== "" &&
        (a.status === latestInProgressStatus)));
    } else if (reimbursedStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt) >= new Date(value) &&
        new Date(a.createdAt) <= new Date(lastDate) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant !== "" &&
        (a.status === latestReimbursedStatus)));
    } else {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt) >= new Date(value) &&
        new Date(a.createdAt) <= new Date(lastDate) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant !== "" &&
        a.status === ""));
    }
      
  }

  const handleToDate = (e) => {
    // hard coded values... To be changed to dynamic later
    setToDate(e.target.value);
    const value = e.target.value === "" ? "2023-03-09" : e.target.value;

    const firstDate = fromDate === "" ? "2023-03-02" : fromDate;
    const latestMin = min === "" ? 10.89 : min;
    const latestMax = max === "" ? 809.37 : max;
    const latestMerchant = merchant;
    const latestNewStatus = newStatus === true ? "New" : false;
    const latestInProgressStatus = inProgressStatus === true ? "In Progress" : false;
    const latestReimbursedStatus = reimbursedStatus === true ? "Reimbursed" : false;

    const merchantArray = ["Shuttle", "Fast food", "Electronics", "Restaurant", "Breakfast",
      "Parking", "Office supplies", "Rental car", "Hotel", "Taxi", "Ride sharing", "Airline"];
    const isValidMerchant = (x) => x === merchant;

    if (merchantArray.some(isValidMerchant) && newStatus && inProgressStatus && reimbursedStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt) >= new Date(firstDate) &&
        new Date(a.createdAt) <= new Date(value) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant === latestMerchant &&
        (a.status === latestNewStatus || a.status === latestInProgressStatus || a.status === latestReimbursedStatus)));
    } else if (merchantArray.some(isValidMerchant) && newStatus && inProgressStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt) >= new Date(firstDate) &&
        new Date(a.createdAt) <= new Date(value) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant === latestMerchant &&
        (a.status === latestNewStatus || a.status === latestInProgressStatus)));
    } else if (merchantArray.some(isValidMerchant) && newStatus && reimbursedStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt) >= new Date(firstDate) &&
        new Date(a.createdAt) <= new Date(value) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant === latestMerchant &&
        (a.status === latestNewStatus || a.status === latestReimbursedStatus)));
    } else if (newStatus && inProgressStatus && reimbursedStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt) >= new Date(firstDate) &&
        new Date(a.createdAt) <= new Date(value) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant !== "" &&
        (a.status === latestNewStatus || a.status === latestInProgressStatus || a.status === latestReimbursedStatus)));
    } else if (merchantArray.some(isValidMerchant) && newStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt) >= new Date(firstDate) &&
        new Date(a.createdAt) <= new Date(value) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant === latestMerchant &&
        (a.status === latestNewStatus)));
    } else if (newStatus && inProgressStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt) >= new Date(firstDate) &&
        new Date(a.createdAt) <= new Date(value) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant !== "" &&
        (a.status === latestNewStatus || a.status === latestInProgressStatus)));
    } else if (newStatus && reimbursedStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt) >= new Date(firstDate) &&
        new Date(a.createdAt) <= new Date(value) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant !== "" &&
        (a.status === latestNewStatus || a.status === latestReimbursedStatus)));
    } else if (newStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt) >= new Date(firstDate) &&
        new Date(a.createdAt) <= new Date(value) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant !== "" &&
        (a.status === latestNewStatus)));
    } else if (merchantArray.some(isValidMerchant) && inProgressStatus && reimbursedStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt) >= new Date(firstDate) &&
        new Date(a.createdAt) <= new Date(value) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant === latestMerchant &&
        (a.status === latestInProgressStatus || a.status === latestReimbursedStatus)));
    } else if (merchantArray.some(isValidMerchant) && inProgressStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt) >= new Date(firstDate) &&
        new Date(a.createdAt) <= new Date(value) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant === latestMerchant &&
        (a.status === latestInProgressStatus)));
    } else if (merchantArray.some(isValidMerchant) && reimbursedStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt) >= new Date(firstDate) &&
        new Date(a.createdAt) <= new Date(value) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant === latestMerchant &&
        (a.status === latestReimbursedStatus)));
    } else if (inProgressStatus && reimbursedStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt) >= new Date(firstDate) &&
        new Date(a.createdAt) <= new Date(value) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant !== "" &&
        (a.status === latestInProgressStatus || a.status === latestReimbursedStatus)));
    } else if (merchantArray.some(isValidMerchant)) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt) >= new Date(firstDate) &&
        new Date(a.createdAt) <= new Date(value) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant === latestMerchant));
    } else if (inProgressStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt) >= new Date(firstDate) &&
        new Date(a.createdAt) <= new Date(value) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant !== "" &&
        (a.status === latestInProgressStatus)));
    } else if (reimbursedStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt) >= new Date(firstDate) &&
        new Date(a.createdAt) <= new Date(value) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant !== "" &&
        (a.status === latestReimbursedStatus)));
    } else {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt) >= new Date(firstDate) &&
        new Date(a.createdAt) <= new Date(value) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant !== "" &&
        a.status === ""));
    }
    
  }

  const handleMin = (e) => {
    setMin(e.target.value);
    // hard coded values... To be changed to dynamic later
    const value = e.target.value === null ? 10.89 : e.target.value;

    const firstDate = fromDate === "" ? "2023-03-02" : fromDate;
    const lastDate = toDate === "" ? "2023-03-09" : toDate;
    const latestMax = max === "" ? 809.37 : max;
    const latestMerchant = merchant;
    const latestNewStatus = newStatus === true ? "New" : false;
    const latestInProgressStatus = inProgressStatus === true ? "In Progress" : false;
    const latestReimbursedStatus = reimbursedStatus === true ? "Reimbursed" : false;

    const merchantArray = ["Shuttle", "Fast food", "Electronics", "Restaurant", "Breakfast",
      "Parking", "Office supplies", "Rental car", "Hotel", "Taxi", "Ride sharing", "Airline"];
    const isValidMerchant = (x) => x === merchant;

    if (merchantArray.some(isValidMerchant) && newStatus && inProgressStatus && reimbursedStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt) >= new Date(firstDate) &&
        new Date(a.createdAt) <= new Date(lastDate) &&
        a.total >= value &&
        a.total <= latestMax &&
        a.merchant === latestMerchant &&
        (a.status === latestNewStatus || a.status === latestInProgressStatus || a.status === latestReimbursedStatus)));
    } else if (merchantArray.some(isValidMerchant) && newStatus && inProgressStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt) >= new Date(firstDate) &&
        new Date(a.createdAt) <= new Date(lastDate) &&
        a.total >= value &&
        a.total <= latestMax &&
        a.merchant === latestMerchant &&
        (a.status === latestNewStatus || a.status === latestInProgressStatus)));
    } else if (merchantArray.some(isValidMerchant) && newStatus && reimbursedStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt) >= new Date(firstDate) &&
        new Date(a.createdAt) <= new Date(lastDate) &&
        a.total >= value &&
        a.total <= latestMax &&
        a.merchant === latestMerchant &&
        (a.status === latestNewStatus || a.status === latestReimbursedStatus)));
    } else if (newStatus && inProgressStatus && reimbursedStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt) >= new Date(firstDate) &&
        new Date(a.createdAt) <= new Date(lastDate) &&
        a.total >= value &&
        a.total <= latestMax &&
        a.merchant !== "" &&
        (a.status === latestNewStatus || a.status === latestInProgressStatus || a.status === latestReimbursedStatus)));
    } else if (merchantArray.some(isValidMerchant) && newStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt) >= new Date(firstDate) &&
        new Date(a.createdAt) <= new Date(lastDate) &&
        a.total >= value &&
        a.total <= latestMax &&
        a.merchant === latestMerchant &&
        (a.status === latestNewStatus)));
    } else if (newStatus && inProgressStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt) >= new Date(firstDate) &&
        new Date(a.createdAt) <= new Date(lastDate) &&
        a.total >= value &&
        a.total <= latestMax &&
        a.merchant !== "" &&
        (a.status === latestNewStatus || a.status === latestInProgressStatus)));
    } else if (newStatus && reimbursedStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt) >= new Date(firstDate) &&
        new Date(a.createdAt) <= new Date(lastDate) &&
        a.total >= value &&
        a.total <= latestMax &&
        a.merchant !== "" &&
        (a.status === latestNewStatus || a.status === latestReimbursedStatus)));
    } else if (newStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt) >= new Date(firstDate) &&
        new Date(a.createdAt) <= new Date(lastDate) &&
        a.total >= value &&
        a.total <= latestMax &&
        a.merchant !== "" &&
        (a.status === latestNewStatus)));
    } else if (merchantArray.some(isValidMerchant) && inProgressStatus && reimbursedStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt) >= new Date(firstDate) &&
        new Date(a.createdAt) <= new Date(lastDate) &&
        a.total >= value &&
        a.total <= latestMax &&
        a.merchant === latestMerchant &&
        (a.status === latestInProgressStatus || a.status === latestReimbursedStatus)));
    } else if (merchantArray.some(isValidMerchant) && inProgressStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt) >= new Date(firstDate) &&
        new Date(a.createdAt) <= new Date(lastDate) &&
        a.total >= value &&
        a.total <= latestMax &&
        a.merchant === latestMerchant &&
        (a.status === latestInProgressStatus)));
    } else if (merchantArray.some(isValidMerchant) && reimbursedStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt) >= new Date(firstDate) &&
        new Date(a.createdAt) <= new Date(lastDate) &&
        a.total >= value &&
        a.total <= latestMax &&
        a.merchant === latestMerchant &&
        (a.status === latestReimbursedStatus)));
    } else if (inProgressStatus && reimbursedStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt) >= new Date(firstDate) &&
        new Date(a.createdAt) <= new Date(lastDate) &&
        a.total >= value &&
        a.total <= latestMax &&
        a.merchant !== "" &&
        (a.status === latestInProgressStatus || a.status === latestReimbursedStatus)));
    } else if (merchantArray.some(isValidMerchant)) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt) >= new Date(firstDate) &&
        new Date(a.createdAt) <= new Date(lastDate) &&
        a.total >= value &&
        a.total <= latestMax &&
        a.merchant === latestMerchant));
    } else if (inProgressStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt) >= new Date(firstDate) &&
        new Date(a.createdAt) <= new Date(lastDate) &&
        a.total >= value &&
        a.total <= latestMax &&
        a.merchant !== "" &&
        (a.status === latestInProgressStatus)));
    } else if (reimbursedStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt) >= new Date(firstDate) &&
        new Date(a.createdAt) <= new Date(lastDate) &&
        a.total >= value &&
        a.total <= latestMax &&
        a.merchant !== "" &&
        (a.status === latestReimbursedStatus)));
    } else {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt) >= new Date(firstDate) &&
        new Date(a.createdAt) <= new Date(lastDate) &&
        a.total >= value &&
        a.total <= latestMax &&
        a.merchant !== "" &&
        a.status === ""));
    }

  }

  const handleMax = (e) => {
    setMax(e.target.value);
    // hard coded values... To be changed to dynamic later
    const value = e.target.value === null ? 809.37 : e.target.value;

    const firstDate = fromDate === "" ? "2023-03-02" : fromDate;
    const lastDate = toDate === "" ? "2023-03-09" : toDate;
    const latestMin = min === "" ? 10.89 : min;
    const latestMerchant = merchant;
    const latestNewStatus = newStatus === true ? "New" : false;
    const latestInProgressStatus = inProgressStatus === true ? "In Progress" : false;
    const latestReimbursedStatus = reimbursedStatus === true ? "Reimbursed" : false;

    const merchantArray = ["Shuttle", "Fast food", "Electronics", "Restaurant", "Breakfast",
      "Parking", "Office supplies", "Rental car", "Hotel", "Taxi", "Ride sharing", "Airline"];
    const isValidMerchant = (x) => x === merchant;

    if (merchantArray.some(isValidMerchant) && newStatus && inProgressStatus && reimbursedStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt) >= new Date(firstDate) &&
        new Date(a.createdAt) <= new Date(lastDate) &&
        a.total >= latestMin &&
        a.total <= value &&
        a.merchant === latestMerchant &&
        (a.status === latestNewStatus || a.status === latestInProgressStatus || a.status === latestReimbursedStatus)));
    } else if (merchantArray.some(isValidMerchant) && newStatus && inProgressStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt) >= new Date(firstDate) &&
        new Date(a.createdAt) <= new Date(lastDate) &&
        a.total >= latestMin &&
        a.total <= value &&
        a.merchant === latestMerchant &&
        (a.status === latestNewStatus || a.status === latestInProgressStatus)));
    } else if (merchantArray.some(isValidMerchant) && newStatus && reimbursedStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt) >= new Date(firstDate) &&
        new Date(a.createdAt) <= new Date(lastDate) &&
        a.total >= latestMin &&
        a.total <= value &&
        a.merchant === latestMerchant &&
        (a.status === latestNewStatus || a.status === latestReimbursedStatus)));
    } else if (newStatus && inProgressStatus && reimbursedStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt) >= new Date(firstDate) &&
        new Date(a.createdAt) <= new Date(lastDate) &&
        a.total >= latestMin &&
        a.total <= value &&
        a.merchant !== "" &&
        (a.status === latestNewStatus || a.status === latestInProgressStatus || a.status === latestReimbursedStatus)));
    } else if (merchantArray.some(isValidMerchant) && newStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt) >= new Date(firstDate) &&
        new Date(a.createdAt) <= new Date(lastDate) &&
        a.total >= latestMin &&
        a.total <= value &&
        a.merchant === latestMerchant &&
        (a.status === latestNewStatus)));
    } else if (newStatus && inProgressStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt) >= new Date(firstDate) &&
        new Date(a.createdAt) <= new Date(lastDate) &&
        a.total >= latestMin &&
        a.total <= value &&
        a.merchant !== "" &&
        (a.status === latestNewStatus || a.status === latestInProgressStatus)));
    } else if (newStatus && reimbursedStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt) >= new Date(firstDate) &&
        new Date(a.createdAt) <= new Date(lastDate) &&
        a.total >= latestMin &&
        a.total <= value &&
        a.merchant !== "" &&
        (a.status === latestNewStatus || a.status === latestReimbursedStatus)));
    } else if (newStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt) >= new Date(firstDate) &&
        new Date(a.createdAt) <= new Date(lastDate) &&
        a.total >= latestMin &&
        a.total <= value &&
        a.merchant !== "" &&
        (a.status === latestNewStatus)));
    } else if (merchantArray.some(isValidMerchant) && inProgressStatus && reimbursedStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt) >= new Date(firstDate) &&
        new Date(a.createdAt) <= new Date(lastDate) &&
        a.total >= latestMin &&
        a.total <= value &&
        a.merchant === latestMerchant &&
        (a.status === latestInProgressStatus || a.status === latestReimbursedStatus)));
    } else if (merchantArray.some(isValidMerchant) && inProgressStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt) >= new Date(firstDate) &&
        new Date(a.createdAt) <= new Date(lastDate) &&
        a.total >= latestMin &&
        a.total <= value &&
        a.merchant === latestMerchant &&
        (a.status === latestInProgressStatus)));
    } else if (merchantArray.some(isValidMerchant) && reimbursedStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt) >= new Date(firstDate) &&
        new Date(a.createdAt) <= new Date(lastDate) &&
        a.total >= latestMin &&
        a.total <= value &&
        a.merchant === latestMerchant &&
        (a.status === latestReimbursedStatus)));
    } else if (inProgressStatus && reimbursedStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt) >= new Date(firstDate) &&
        new Date(a.createdAt) <= new Date(lastDate) &&
        a.total >= latestMin &&
        a.total <= value &&
        a.merchant !== "" &&
        (a.status === latestInProgressStatus || a.status === latestReimbursedStatus)));
    } else if (merchantArray.some(isValidMerchant)) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt) >= new Date(firstDate) &&
        new Date(a.createdAt) <= new Date(lastDate) &&
        a.total >= latestMin &&
        a.total <= value &&
        a.merchant === latestMerchant));
    } else if (inProgressStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt) >= new Date(firstDate) &&
        new Date(a.createdAt) <= new Date(lastDate) &&
        a.total >= latestMin &&
        a.total <= value &&
        a.merchant !== "" &&
        (a.status === latestInProgressStatus)));
    } else if (reimbursedStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt) >= new Date(firstDate) &&
        new Date(a.createdAt) <= new Date(lastDate) &&
        a.total >= latestMin &&
        a.total <= value &&
        a.merchant !== "" &&
        (a.status === latestReimbursedStatus)));
    } else {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt) >= new Date(firstDate) &&
        new Date(a.createdAt) <= new Date(lastDate) &&
        a.total >= latestMin &&
        a.total <= value &&
        a.merchant !== "" &&
        a.status === ""));
    }

  }

  const selectMerchant = (e) => {
    // This arrow function updates the table immediately a valid option is selected on the screen 
    const firstDate = fromDate === "" ? "2023-03-02" : fromDate;
    const lastDate = toDate === "" ? "2023-03-09" : toDate;
    const latestMin = min === "" ? 10.89 : min;
    const latestMax = max === "" ? 809.37 : max;
    const latestNewStatus = newStatus === true ? "New" : false;
    const latestInProgressStatus = inProgressStatus === true ? "In Progress" : false;
    const latestReimbursedStatus = reimbursedStatus === true ? "Reimbursed" : false;

    const merchantArray = ["Shuttle", "Fast food", "Electronics", "Restaurant", "Breakfast",
      "Parking", "Office supplies", "Rental car", "Hotel", "Taxi", "Ride sharing", "Airline"];
    const isValidMerchant = (x) => x === e.target.value;

    // Since only valid Merchants are listed and can be selected from the list on the screen,
    // there is no need to add conditionals for when invalid merchants are selected
    // Also, there is no need to call setMerchant() as the onChange event handler already did this
    if (merchantArray.some(isValidMerchant) && newStatus && inProgressStatus && reimbursedStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt) >= new Date(firstDate) &&
        new Date(a.createdAt) <= new Date(lastDate) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant === e.target.value &&
        (a.status === latestNewStatus || a.status === latestInProgressStatus || a.status === latestReimbursedStatus)));
    } else if (merchantArray.some(isValidMerchant) && newStatus && inProgressStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt) >= new Date(firstDate) &&
        new Date(a.createdAt) <= new Date(lastDate) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant === e.target.value &&
        (a.status === latestNewStatus || a.status === latestInProgressStatus)));
    } else if (merchantArray.some(isValidMerchant) && newStatus && reimbursedStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt) >= new Date(firstDate) &&
        new Date(a.createdAt) <= new Date(lastDate) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant === e.target.value &&
        (a.status === latestNewStatus || a.status === latestReimbursedStatus)));
    } else if (merchantArray.some(isValidMerchant) && newStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt) >= new Date(firstDate) &&
        new Date(a.createdAt) <= new Date(lastDate) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant === e.target.value &&
        (a.status === latestNewStatus)));
    } else if (merchantArray.some(isValidMerchant) && inProgressStatus && reimbursedStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt) >= new Date(firstDate) &&
        new Date(a.createdAt) <= new Date(lastDate) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant === e.target.value &&
        (a.status === latestInProgressStatus || a.status === latestReimbursedStatus)));
    } else if (merchantArray.some(isValidMerchant) && inProgressStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt) >= new Date(firstDate) &&
        new Date(a.createdAt) <= new Date(lastDate) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant === e.target.value &&
        (a.status === latestInProgressStatus)));
    } else if (merchantArray.some(isValidMerchant) && reimbursedStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt) >= new Date(firstDate) &&
        new Date(a.createdAt) <= new Date(lastDate) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant === e.target.value &&
        (a.status === latestReimbursedStatus)));
    } else if (merchantArray.some(isValidMerchant)) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt) >= new Date(firstDate) &&
        new Date(a.createdAt) <= new Date(lastDate) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant === e.target.value));
    } 
  }

  const handleMerchant = (e) => {
    // The effect of this arrow function is most obvious 
    // when the user types out the name of the merchant 
    // rather than select one from the list
    
    // More so, it is only executed in response to an onBlur event
    // (when the user clicks outside of the element)
    
    const firstDate = fromDate === "" ? "2023-03-02" : fromDate;
    const lastDate = toDate === "" ? "2023-03-09" : toDate;
    const latestMin = min === "" ? 10.89 : min;
    const latestMax = max === "" ? 809.37 : max;
    const latestNewStatus = newStatus === true ? "New" : false;
    const latestInProgressStatus = inProgressStatus === true ? "In Progress" : false;
    const latestReimbursedStatus = reimbursedStatus === true ? "Reimbursed" : false;

    const merchantArray = ["Shuttle", "Fast food", "Electronics", "Restaurant", "Breakfast",
      "Parking", "Office supplies", "Rental car", "Hotel", "Taxi", "Ride sharing", "Airline"];
    const isValidMerchant = (x) => x === e.target.value;

    // When an invalid merchant is typed out, reset the input field to blank ("") when the user clicks 
    // outside of it, i.e. call setMerchant(""), in addition to calling setExpenses()
    if (merchantArray.some(isValidMerchant) && newStatus && inProgressStatus && reimbursedStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt) >= new Date(firstDate) &&
        new Date(a.createdAt) <= new Date(lastDate) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant === e.target.value &&
        (a.status === latestNewStatus || a.status === latestInProgressStatus || a.status === latestReimbursedStatus)));
    } else if (merchantArray.some(isValidMerchant) && newStatus && inProgressStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt) >= new Date(firstDate) &&
        new Date(a.createdAt) <= new Date(lastDate) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant === e.target.value &&
        (a.status === latestNewStatus || a.status === latestInProgressStatus)));
    } else if (merchantArray.some(isValidMerchant) && newStatus && reimbursedStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt) >= new Date(firstDate) &&
        new Date(a.createdAt) <= new Date(lastDate) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant === e.target.value &&
        (a.status === latestNewStatus || a.status === latestReimbursedStatus)));
    } else if (newStatus && inProgressStatus && reimbursedStatus) {
      setMerchant("");
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt) >= new Date(firstDate) &&
        new Date(a.createdAt) <= new Date(lastDate) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant !== "" &&
        (a.status === latestNewStatus || a.status === latestInProgressStatus || a.status === latestReimbursedStatus)));
    } else if (merchantArray.some(isValidMerchant) && newStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt) >= new Date(firstDate) &&
        new Date(a.createdAt) <= new Date(lastDate) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant === e.target.value &&
        (a.status === latestNewStatus)));
    } else if (newStatus && inProgressStatus) {
      setMerchant("");
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt) >= new Date(firstDate) &&
        new Date(a.createdAt) <= new Date(lastDate) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant !== "" &&
        (a.status === latestNewStatus || a.status === latestInProgressStatus)));
    } else if (newStatus && reimbursedStatus) {
      setMerchant("");
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt) >= new Date(firstDate) &&
        new Date(a.createdAt) <= new Date(lastDate) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant !== "" &&
        (a.status === latestNewStatus || a.status === latestReimbursedStatus)));
    } else if (newStatus) {
      setMerchant("");
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt) >= new Date(firstDate) &&
        new Date(a.createdAt) <= new Date(lastDate) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant !== "" &&
        (a.status === latestNewStatus)));
    } else if (merchantArray.some(isValidMerchant) && inProgressStatus && reimbursedStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt) >= new Date(firstDate) &&
        new Date(a.createdAt) <= new Date(lastDate) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant === e.target.value &&
        (a.status === latestInProgressStatus || a.status === latestReimbursedStatus)));
    } else if (merchantArray.some(isValidMerchant) && inProgressStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt) >= new Date(firstDate) &&
        new Date(a.createdAt) <= new Date(lastDate) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant === e.target.value &&
        (a.status === latestInProgressStatus)));
    } else if (merchantArray.some(isValidMerchant) && reimbursedStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt) >= new Date(firstDate) &&
        new Date(a.createdAt) <= new Date(lastDate) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant === e.target.value &&
        (a.status === latestReimbursedStatus)));
    } else if (inProgressStatus && reimbursedStatus) {
      setMerchant("");
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt) >= new Date(firstDate) &&
        new Date(a.createdAt) <= new Date(lastDate) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant !== "" &&
        (a.status === latestInProgressStatus || a.status === latestReimbursedStatus)));
    } else if (merchantArray.some(isValidMerchant)) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt) >= new Date(firstDate) &&
        new Date(a.createdAt) <= new Date(lastDate) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant === e.target.value));
    } else if (inProgressStatus) {
      setMerchant("");
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt) >= new Date(firstDate) &&
        new Date(a.createdAt) <= new Date(lastDate) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant !== "" &&
        (a.status === latestInProgressStatus)));
    } else if (reimbursedStatus) {
      setMerchant("");
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt) >= new Date(firstDate) &&
        new Date(a.createdAt) <= new Date(lastDate) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant !== "" &&
        (a.status === latestReimbursedStatus)));
    } else {
      setMerchant("");
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt) >= new Date(firstDate) &&
        new Date(a.createdAt) <= new Date(lastDate) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant !== "" &&
        a.status === ""));
    }

  }
 
  const handleNewStatus = (e) => {
    setNewStatus(e.target.checked);
    // hard coded values... To be changed to dynamic later
    const checked = e.target.checked === true ? "New" : false;

    const firstDate = fromDate === "" ? "2023-03-02" : fromDate;
    const lastDate = toDate === "" ? "2023-03-09" : toDate;
    const latestMin = min === "" ? 10.89 : min;
    const latestMax = max === "" ? 809.37 : max;
    const latestMerchant = merchant;
    const latestInProgressStatus = inProgressStatus === true ? "In Progress" : false;
    const latestReimbursedStatus = reimbursedStatus === true ? "Reimbursed" : false;

    const merchantArray = ["Shuttle", "Fast food", "Electronics", "Restaurant", "Breakfast",
      "Parking", "Office supplies", "Rental car", "Hotel", "Taxi", "Ride sharing", "Airline"];
    const isValidMerchant = (x) => x === merchant;

    if (merchantArray.some(isValidMerchant) && e.target.checked && inProgressStatus && reimbursedStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt) >= new Date(firstDate) &&
        new Date(a.createdAt) <= new Date(lastDate) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant === latestMerchant && 
        (a.status === checked || a.status === latestInProgressStatus || a.status === latestReimbursedStatus)));
    } else if (merchantArray.some(isValidMerchant) && e.target.checked && inProgressStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt) >= new Date(firstDate) &&
        new Date(a.createdAt) <= new Date(lastDate) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant === latestMerchant &&
        (a.status === checked || a.status === latestInProgressStatus)));
    } else if (merchantArray.some(isValidMerchant) && e.target.checked && reimbursedStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt) >= new Date(firstDate) &&
        new Date(a.createdAt) <= new Date(lastDate) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant === latestMerchant &&
        (a.status === checked || a.status === latestReimbursedStatus)));
    } else if (e.target.checked && inProgressStatus && reimbursedStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt) >= new Date(firstDate) &&
        new Date(a.createdAt) <= new Date(lastDate) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant !== "" &&
        (a.status === checked || a.status === latestInProgressStatus || a.status === latestReimbursedStatus)));
    } else if (merchantArray.some(isValidMerchant) && e.target.checked) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt) >= new Date(firstDate) &&
        new Date(a.createdAt) <= new Date(lastDate) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant === latestMerchant &&
        (a.status === checked)));
    } else if (e.target.checked && inProgressStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt) >= new Date(firstDate) &&
        new Date(a.createdAt) <= new Date(lastDate) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant !== "" &&
        (a.status === checked || a.status === latestInProgressStatus)));
    } else if (e.target.checked && reimbursedStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt) >= new Date(firstDate) &&
        new Date(a.createdAt) <= new Date(lastDate) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant !== "" &&
        (a.status === checked || a.status === latestReimbursedStatus)));
    } else if (e.target.checked) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt) >= new Date(firstDate) &&
        new Date(a.createdAt) <= new Date(lastDate) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant !== "" &&
        (a.status === checked)));
    } else if (merchantArray.some(isValidMerchant) && !e.target.checked && inProgressStatus && reimbursedStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt) >= new Date(firstDate) &&
        new Date(a.createdAt) <= new Date(lastDate) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant === latestMerchant && 
        (a.status === latestInProgressStatus || a.status === latestReimbursedStatus)));
    } else if (merchantArray.some(isValidMerchant) && !e.target.checked && inProgressStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt) >= new Date(firstDate) &&
        new Date(a.createdAt) <= new Date(lastDate) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant === latestMerchant &&
        (a.status === latestInProgressStatus)));
    } else if (merchantArray.some(isValidMerchant) && !e.target.checked && reimbursedStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt) >= new Date(firstDate) &&
        new Date(a.createdAt) <= new Date(lastDate) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant === latestMerchant &&
        (a.status === latestReimbursedStatus)));
    } else if (!e.target.checked && inProgressStatus && reimbursedStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt) >= new Date(firstDate) &&
        new Date(a.createdAt) <= new Date(lastDate) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant !== "" &&
        (a.status === latestInProgressStatus || a.status === latestReimbursedStatus)));
    } else if (merchantArray.some(isValidMerchant) && !e.target.checked) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt) >= new Date(firstDate) &&
        new Date(a.createdAt) <= new Date(lastDate) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant === latestMerchant));
    } else if (!e.target.checked && inProgressStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt) >= new Date(firstDate) &&
        new Date(a.createdAt) <= new Date(lastDate) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant !== "" &&
        (a.status === latestInProgressStatus)));
    } else if (!e.target.checked && reimbursedStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt) >= new Date(firstDate) &&
        new Date(a.createdAt) <= new Date(lastDate) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant !== "" &&
        (a.status === latestReimbursedStatus)));
    } else {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt) >= new Date(firstDate) &&
        new Date(a.createdAt) <= new Date(lastDate) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant !== "" &&
        a.status === ""));
    }

  }

  const handleInProgressStatus = (e) => {
    setInProgressStatus(e.target.checked);
    const checked = e.target.checked === true ? "In Progress" : false;

    const firstDate = fromDate === "" ? "2023-03-02" : fromDate;
    const lastDate = toDate === "" ? "2023-03-09" : toDate;
    const latestMin = min === "" ? 10.89 : min;
    const latestMax = max === "" ? 809.37 : max;
    const latestMerchant = merchant;
    const latestNewStatus = newStatus === true ? "New" : false;
    const latestReimbursedStatus = reimbursedStatus === true ? "Reimbursed" : false;

    const merchantArray = ["Shuttle", "Fast food", "Electronics", "Restaurant", "Breakfast",
      "Parking", "Office supplies", "Rental car", "Hotel", "Taxi", "Ride sharing", "Airline"];
    const isValidMerchant = (x) => x === merchant;

    if (merchantArray.some(isValidMerchant) && e.target.checked && newStatus && reimbursedStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt) >= new Date(firstDate) &&
        new Date(a.createdAt) <= new Date(lastDate) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant === latestMerchant &&
        (a.status === checked || a.status === latestNewStatus || a.status === latestReimbursedStatus)));
    } else if (merchantArray.some(isValidMerchant) && e.target.checked && newStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt) >= new Date(firstDate) &&
        new Date(a.createdAt) <= new Date(lastDate) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant === latestMerchant &&
        (a.status === checked || a.status === latestNewStatus)));
    } else if (merchantArray.some(isValidMerchant) && e.target.checked && reimbursedStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt) >= new Date(firstDate) &&
        new Date(a.createdAt) <= new Date(lastDate) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant === latestMerchant &&
        (a.status === checked || a.status === latestReimbursedStatus)));
    } else if (e.target.checked && newStatus && reimbursedStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt) >= new Date(firstDate) &&
        new Date(a.createdAt) <= new Date(lastDate) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant !== "" &&
        (a.status === checked || a.status === latestNewStatus || a.status === latestReimbursedStatus)));
    } else if (merchantArray.some(isValidMerchant) && e.target.checked) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt) >= new Date(firstDate) &&
        new Date(a.createdAt) <= new Date(lastDate) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant === latestMerchant &&
        (a.status === checked)));
    } else if (e.target.checked && newStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt) >= new Date(firstDate) &&
        new Date(a.createdAt) <= new Date(lastDate) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant !== "" &&
        (a.status === checked || a.status === latestNewStatus)));
    } else if (e.target.checked && reimbursedStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt) >= new Date(firstDate) &&
        new Date(a.createdAt) <= new Date(lastDate) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant !== "" &&
        (a.status === checked || a.status === latestReimbursedStatus)));
    } else if (e.target.checked) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt) >= new Date(firstDate) &&
        new Date(a.createdAt) <= new Date(lastDate) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant !== "" &&
        (a.status === checked)));
    } else if (merchantArray.some(isValidMerchant) && !e.target.checked && newStatus && reimbursedStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt) >= new Date(firstDate) &&
        new Date(a.createdAt) <= new Date(lastDate) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant === latestMerchant &&
        (a.status === latestNewStatus || a.status === latestReimbursedStatus)));
    } else if (merchantArray.some(isValidMerchant) && !e.target.checked && newStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt) >= new Date(firstDate) &&
        new Date(a.createdAt) <= new Date(lastDate) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant === latestMerchant &&
        (a.status === latestNewStatus)));
    } else if (merchantArray.some(isValidMerchant) && !e.target.checked && reimbursedStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt) >= new Date(firstDate) &&
        new Date(a.createdAt) <= new Date(lastDate) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant === latestMerchant &&
        (a.status === latestReimbursedStatus)));
    } else if (!e.target.checked && newStatus && reimbursedStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt) >= new Date(firstDate) &&
        new Date(a.createdAt) <= new Date(lastDate) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant !== "" &&
        (a.status === latestNewStatus || a.status === latestReimbursedStatus)));
    } else if (merchantArray.some(isValidMerchant) && !e.target.checked) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt) >= new Date(firstDate) &&
        new Date(a.createdAt) <= new Date(lastDate) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant === latestMerchant));
    } else if (!e.target.checked && newStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt) >= new Date(firstDate) &&
        new Date(a.createdAt) <= new Date(lastDate) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant !== "" &&
        (a.status === latestNewStatus)));
    } else if (!e.target.checked && reimbursedStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt) >= new Date(firstDate) &&
        new Date(a.createdAt) <= new Date(lastDate) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant !== "" &&
        (a.status === latestReimbursedStatus)));
    } else {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt) >= new Date(firstDate) &&
        new Date(a.createdAt) <= new Date(lastDate) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant !== "" &&
        a.status === ""));
    }
  }

  const handleReimbursedStatus = (e) => {
    setReimbursedStatus(e.target.checked);
    const checked = e.target.checked === true ? "Reimbursed" : false;

    const firstDate = fromDate === "" ? "2023-03-02" : fromDate;
    const lastDate = toDate === "" ? "2023-03-09" : toDate;
    const latestMin = min === "" ? 10.89 : min;
    const latestMax = max === "" ? 809.37 : max;
    const latestMerchant = merchant;
    const latestNewStatus = newStatus === true ? "New" : false;
    const latestInProgressStatus = inProgressStatus === true ? "In Progress" : false;

    const merchantArray = ["Shuttle", "Fast food", "Electronics", "Restaurant", "Breakfast",
      "Parking", "Office supplies", "Rental car", "Hotel", "Taxi", "Ride sharing", "Airline"];
    const isValidMerchant = (x) => x === merchant;

    if (merchantArray.some(isValidMerchant) && e.target.checked && newStatus && inProgressStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt) >= new Date(firstDate) &&
        new Date(a.createdAt) <= new Date(lastDate) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant === latestMerchant &&
        (a.status === checked || a.status === latestNewStatus || a.status === latestInProgressStatus)));
    } else if (merchantArray.some(isValidMerchant) && e.target.checked && newStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt) >= new Date(firstDate) &&
        new Date(a.createdAt) <= new Date(lastDate) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant === latestMerchant &&
        (a.status === checked || a.status === latestNewStatus)));
    } else if (merchantArray.some(isValidMerchant) && e.target.checked && inProgressStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt) >= new Date(firstDate) &&
        new Date(a.createdAt) <= new Date(lastDate) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant === latestMerchant &&
        (a.status === checked || a.status === latestInProgressStatus)));
    } else if (e.target.checked && newStatus && inProgressStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt) >= new Date(firstDate) &&
        new Date(a.createdAt) <= new Date(lastDate) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant !== "" &&
        (a.status === checked || a.status === latestNewStatus || a.status === latestInProgressStatus)));
    } else if (merchantArray.some(isValidMerchant) && e.target.checked) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt) >= new Date(firstDate) &&
        new Date(a.createdAt) <= new Date(lastDate) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant === latestMerchant &&
        (a.status === checked)));
    } else if (e.target.checked && newStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt) >= new Date(firstDate) &&
        new Date(a.createdAt) <= new Date(lastDate) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant !== "" &&
        (a.status === checked || a.status === latestNewStatus)));
    } else if (e.target.checked && inProgressStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt) >= new Date(firstDate) &&
        new Date(a.createdAt) <= new Date(lastDate) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant !== "" &&
        (a.status === checked || a.status === latestInProgressStatus)));
    } else if (e.target.checked) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt) >= new Date(firstDate) &&
        new Date(a.createdAt) <= new Date(lastDate) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant !== "" &&
        (a.status === checked)));
    } else if (merchantArray.some(isValidMerchant) && !e.target.checked && newStatus && inProgressStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt) >= new Date(firstDate) &&
        new Date(a.createdAt) <= new Date(lastDate) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant === latestMerchant &&
        (a.status === latestNewStatus || a.status === latestInProgressStatus)));
    } else if (merchantArray.some(isValidMerchant) && !e.target.checked && newStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt) >= new Date(firstDate) &&
        new Date(a.createdAt) <= new Date(lastDate) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant === latestMerchant &&
        (a.status === latestNewStatus)));
    } else if (merchantArray.some(isValidMerchant) && !e.target.checked && inProgressStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt) >= new Date(firstDate) &&
        new Date(a.createdAt) <= new Date(lastDate) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant === latestMerchant &&
        (a.status === latestInProgressStatus)));
    } else if (!e.target.checked && newStatus && inProgressStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt) >= new Date(firstDate) &&
        new Date(a.createdAt) <= new Date(lastDate) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant !== "" &&
        (a.status === latestNewStatus || a.status === latestInProgressStatus)));
    } else if (merchantArray.some(isValidMerchant) && !e.target.checked) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt) >= new Date(firstDate) &&
        new Date(a.createdAt) <= new Date(lastDate) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant === latestMerchant));
    } else if (!e.target.checked && newStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt) >= new Date(firstDate) &&
        new Date(a.createdAt) <= new Date(lastDate) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant !== "" &&
        (a.status === latestNewStatus)));
    } else if (!e.target.checked && inProgressStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt) >= new Date(firstDate) &&
        new Date(a.createdAt) <= new Date(lastDate) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant !== "" &&
        (a.status === latestInProgressStatus)));
    } else {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt) >= new Date(firstDate) &&
        new Date(a.createdAt) <= new Date(lastDate) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant !== "" &&
        a.status === ""));
    }
  }

  const clearFilters = () => {
    setFromDate("");
    setToDate("");
    setMin("");
    setMax("");
    setMerchant("");
    setExpenses(() => employeeExpenses)
  }

  const sortDate = () => {
    setMerchantSort(3);
    setTotalSort(6);
    setStatusSort(9);
    setCommentSort(12);

    dateSort === 0 ? setDateSort(1)
      : dateSort === 1 ? setDateSort(2)
        : setDateSort(0);

    dateSort === 0 ? setExpenses(() => expenses.sort(
    // sort descending
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    ))
      : dateSort === 1 ? setExpenses(() => expenses)
        : setExpenses(() => expenses.sort(
        // sort ascending
          (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
        ))

  }

  const sortMerchant = () => {
    setDateSort(2);
    setTotalSort(6);
    setStatusSort(9);
    setCommentSort(12);

    merchantSort === 3 ? setMerchantSort(4)
      : merchantSort === 4 ? setMerchantSort(5)
        : setMerchantSort(3);

    merchantSort === 3 ? setExpenses(() => expenses.sort( 
      // sort ascending
      (a, b) => {
        let x = a.merchant.toLowerCase();
        let y = b.merchant.toLowerCase();
        if (x < y) { return -1; }
        if (x > y) { return 1; }
        return 0;
      }
    ))
      : merchantSort === 4 ? setExpenses(() => expenses.sort(
        // sort descending
        (a, b) => {
          let x = a.merchant.toLowerCase();
          let y = b.merchant.toLowerCase();
          if (x < y) { return 1; }
          if (x > y) { return -1; }
          return 0;
        }
      )) 
        : setExpenses(() => expenses)

  }

  const sortTotal = () => {
    setDateSort(2);
    setMerchantSort(3);
    setStatusSort(9);
    setCommentSort(12);

    totalSort === 6 ? setTotalSort(7)
      : totalSort === 7 ? setTotalSort(8)
        : setTotalSort(6);

    totalSort === 6 ? setExpenses(() => expenses.sort(
    // sort ascending
      (a, b) => a.total - b.total
    ))
      : totalSort === 7 ? setExpenses(() => expenses.sort(
      // sort descending
        (a, b) => b.total - a.total
      ))
        : setExpenses(() => expenses)

  }

  const sortStatus = () => {
    setDateSort(2);
    setMerchantSort(3);
    setTotalSort(6);
    setCommentSort(12);

    statusSort === 9 ? setStatusSort(10)
      : statusSort === 10 ? setStatusSort(11)
        : setStatusSort(9);

    statusSort === 9 ? setExpenses(() => expenses.sort(
    // sort ascending
      (a, b) => {
        let x = a.status.toLowerCase();
        let y = b.status.toLowerCase();
        if (x < y) { return -1; }
        if (x > y) { return 1; }
        return 0;
      }
    ))
      : statusSort === 10 ? setExpenses(() => expenses.sort(
      // sort descending
        (a, b) => {
          let x = a.status.toLowerCase();
          let y = b.status.toLowerCase();
          if (x < y) { return 1; }
          if (x > y) { return -1; }
          return 0;
        }
      ))
        : setExpenses(() => expenses)

  }

  const sortComment = () => {
    setDateSort(2);
    setMerchantSort(3);
    setTotalSort(6);
    setStatusSort(9);

    commentSort === 12 ? setCommentSort(13)
      : commentSort === 13 ? setCommentSort(14)
        : setCommentSort(12);

    commentSort === 12 ? setExpenses(() => expenses.sort(
    // sort ascending
      (a, b) => {
        let x = a.comment.toLowerCase();
        let y = b.comment.toLowerCase();
        if (x < y) { return -1; }
        if (x > y) { return 1; }
        return 0;
      }
    ))
      : commentSort === 13 ? setExpenses(() => expenses.sort(
      // sort descending
        (a, b) => {
          let x = a.comment.toLowerCase();
          let y = b.comment.toLowerCase();
          if (x < y) { return 1; }
          if (x > y) { return -1; }
          return 0;
        }
      ))
        : setExpenses(() => expenses)

  }

  return (
    <div className='container-fluid'>
          <div className='row text-start'>
            <div className='col-3'>
              <form>
                <div className='mt-3'>
                  <div className="small d-flex justify-content-between">
                    <span>Filter Expenses</span>
                {/* <a href="#" onClick={clearFilters} className="text-primary text-decoration-none">Clear Filters</a> */}
                    <button type="button" onClick={clearFilters} className="text-primary btn-unstyled">Clear Filters</button>
                    {/* <button type="button" className="btn text-primary">Clear Filters</button> */}
                  </div>

                  <hr />
                </div>
                <div>
                  <label htmlFor='from' className='form-label mt-3'>From</label>
                  <input type="date" id='from' value={fromDate} onChange={handleFromDate} className='form-control' />
                </div>
                <div>
                  <label htmlFor='to' className='form-label mt-3'>To</label>
                  <input type="date" id='to' value={toDate} onChange={handleToDate} className='form-control' />
                </div>
                <div className='row'>
                  <div className='col-5'>
                    <label htmlFor='min' className='form-label mt-3'>Min</label>
                    <input type="number" id='min' value={min} onChange={handleMin} className='form-control' />
                  </div>
                  <div className='col-1'>
                    <label className='form-label mt-3'></label>
                    <input type="text" value='-' className='form-control-plaintext mt-3' disabled />
                  </div>
                  <div className='col-5'>
                <label htmlFor='max' className='form-label mt-3'>Max</label>
                    <input type="number" id='max' value={max} onChange={handleMax} className='form-control' />
                  </div>
                </div>
                <div>
              <label htmlFor='merchant' className='form-label mt-3'>Merchant</label>
              <input list="merchants" id="merchant" value={merchant} onChange={(e) => setMerchant(e.target.value)} onSelect={selectMerchant} onBlur={handleMerchant} className="form-control" />
                  <datalist id='merchants'>
                    <option value='Shuttle' />
                    <option value='Fast food' />
                    <option value='Electronics' />
                    <option value='Restaurant' />
                    <option value="Breakfast" />
                    <option value="Parking" />
                    <option value="Office supplies" />
                    <option value="Rental car" />
                    <option value="Hotel" />
                    <option value="Taxi" />
                    <option value="Ride sharing" />
                    <option value="Airline" />
                  </datalist>
            </div>
            <div className="mt-3">
              Status
              <div className="row mb-2">
                <div className="col-3">
                  <label>
                    <input type="checkbox" checked={newStatus} onChange={handleNewStatus} className="form-check-input" /> New
                  </label>
                </div>
                <div className="col-5">
                    <label>
                    <input type="checkbox" checked={inProgressStatus} onChange={handleInProgressStatus} className="form-check-input" /> In Progress
                    </label>
                  </div>
              </div>
              <div>
                <label>
                  <input type="checkbox" checked={reimbursedStatus} onChange={handleReimbursedStatus} className="form-check-input" /> Reimbursed
                </label>
              </div>
              
            </div>
              </form>
          </div>
        <div className='col-7'>
          <div className="table-responsive">
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
                {/* {tableSort} */}
                {expenses.map((a) => {
                  return (
                    <tr>
                      <td>{a.createdAt}</td>
                      <td>{a.merchant}</td>
                      <td>{a.total}</td>
                      <td>{a.status}</td>
                      <td>{a.comment}</td>
                    </tr>
                  );

                })}

              </tbody>
            </table>
          </div>
            
            {/* <ExpensesTable data={expenses} /> */} 
          </div>
            <div className='col-2'>
              <div className='pt-2'>
                <small>To be reimbursed</small>
                <hr />
              </div>
              <div className="h2 m-5">
                ${
              employeeExpenses.filter(
                    (a) => a.status === "New"
                  ).reduce((x, y) => x + y.total, 0).toFixed(2)
                }
              </div>
            </div>
          </div>
        </div>
  );
}

function App() {
  return (
    <div className="App">
      <div>
        <nav className="navbar bg-dark navbar-dark py-3">
          <div className="container-fluid">
            <span className="navbar-brand">Expense Manager</span>
            <div>
              <button type="button" className="btn btn-secondary text-primary me-3">INFO</button>
              <button type="button" className="btn btn-secondary text-primary">LOGOUT</button>
            </div>
          </div>
        </nav>

        <ExpensesForm />
      </div>
      
    </div>
  );
}

export default App;
