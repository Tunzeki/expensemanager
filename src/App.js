import { useState } from 'react';
import './App.css';
import employeeExpenses from './ExpensesList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort, faSortAsc, faSortDesc, faCirclePlus, faBars } from '@fortawesome/free-solid-svg-icons';
import AddExpenseModal from './AddExpenseModal';

// This component visually shows Date and a `sort ascending` icon
const DateSortAscIcon = () => {
  return (
    <>
      <span className="pointer-cursor th-blue">
        Date <FontAwesomeIcon icon={faSortAsc} />
      </span>
    </>
  );
};

// This component visually shows Date and a `sort descending` icon
const DateSortDescIcon = () => {
  return (
    <>
      <span className="pointer-cursor th-blue">
        Date <FontAwesomeIcon icon={faSortDesc} />
      </span>
    </>
  );
};

// This component visually shows Date and a `sort neutral` icon
const DateSortUpDownIcon = () => {
  return (
    <>
      <span className="pointer-cursor">
        Date <FontAwesomeIcon icon={faSort} />
      </span>
    </>
  );
};

// This component visually shows Merchant and a `sort ascending` icon
const MerchantSortAscIcon = () => {
  return (
    <>
      <span className="pointer-cursor th-blue">
        Merchant <FontAwesomeIcon icon={faSortAsc} />
      </span>
    </>
  );
};

// This component visually shows Merchant and a `sort descending` icon
const MerchantSortDescIcon = () => {
  return (
    <>
      <span className="pointer-cursor th-blue">
        Merchant <FontAwesomeIcon icon={faSortDesc} />
      </span>
    </>
  );
};

// This component visually shows Merchant and a `sort neutral` icon
const MerchantSortUpDownIcon = () => {
  return (
    <>
      <span className="pointer-cursor">
        Merchant <FontAwesomeIcon icon={faSort} />
      </span>
    </>
  );
};

// This component visually shows Total and a `sort ascending` icon
const TotalSortAscIcon = () => {
  return (
    <>
      <span className="pointer-cursor th-blue">
        Total <FontAwesomeIcon icon={faSortAsc} />
      </span>
    </>
  );
};

// This component visually shows Total and a `sort descending` icon
const TotalSortDescIcon = () => {
  return (
    <>
      <span className="pointer-cursor th-blue">
        Total <FontAwesomeIcon icon={faSortDesc} />
      </span>
    </>
  );
};

// This component visually shows Total and a `sort neutral` icon
const TotalSortUpDownIcon = () => {
  return (
    <>
      <span className="pointer-cursor">
        Total <FontAwesomeIcon icon={faSort} />
      </span>
    </>
  );
};

// This component visually shows Status and a `sort ascending` icon
const StatusSortAscIcon = () => {
  return (
    <>
      <span className="pointer-cursor th-blue">
        Status <FontAwesomeIcon icon={faSortAsc} />
      </span>
    </>
  );
};

// This component visually shows Status and a `sort descending` icon
const StatusSortDescIcon = () => {
  return (
    <>
      <span className="pointer-cursor th-blue">
        Status <FontAwesomeIcon icon={faSortDesc} />
      </span>
    </>
  );
};

// This component visually shows Status and a `sort neutral` icon
const StatusSortUpDownIcon = () => {
  return (
    <>
      <span className="pointer-cursor">
        Status <FontAwesomeIcon icon={faSort} />
      </span>
    </>
  );
};

// This component visually shows Comment and a `sort ascending` icon
const CommentSortAscIcon = () => {
  return (
    <>
      <span className="pointer-cursor th-blue">
        Comment <FontAwesomeIcon icon={faSortAsc} />
      </span>
    </>
  );
};

// This component visually shows Comment and a `sort descending` icon
const CommentSortDescIcon = () => {
  return (
    <>
      <span className="pointer-cursor th-blue">
        Comment <FontAwesomeIcon icon={faSortDesc} />
      </span>
    </>
  );
};

// This component visually shows Comment and a `sort neutral` icon
const CommentSortUpDownIcon = () => {
  return (
    <>
      <span className="pointer-cursor">
        Comment <FontAwesomeIcon icon={faSort} />
      </span>
    </>
  );
};

function ExpensesForm() {
  // Declare state variables needed for the Form on the page
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");
  const [merchant, setMerchant] = useState("");
  const [newStatus, setNewStatus] = useState(true);
  const [inProgressStatus, setInProgressStatus] = useState(true);
  const [reimbursedStatus, setReimbursedStatus] = useState(true);

  // Declare state variable for the expenses data obtained from ExpensesList.js
  // The initializer function sorts this data by Date in descending order
  const [expenses, setExpenses] = useState(() => employeeExpenses.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt).getTime()));

  // Declare state variables to store the state of the <th> elements JSX in the Table on the page
  // These variables change in response to onClick events that occur when the text 
  // in each of the <th> elements is clicked in an attempt to sort the table
  // Neutral sort -> Ascending Sort -> Descending Sort -> back to Neutral Sort
  // dateSort = 1 is for descending sort.
  // All the initial values for the others are for neutral sort
  const [dateSort, setDateSort] = useState(1);
  const [merchantSort, setMerchantSort] = useState(3);
  const [totalSort, setTotalSort] = useState(6);
  const [statusSort, setStatusSort] = useState(9);
  const [commentSort, setCommentSort] = useState(12);

  // State variable whose value determines when to show the AddExpenseModal component
  const [showAddExpenseModal, setShowAddExpenseModal] = useState(false);

  // This function is called in response to an onChange event in the `From` input element
  const handleFromDate = (e) => {
    setFromDate(e.target.value);
    // hard coded values... To be changed to dynamic later
    const value = e.target.value === "" ? "2023-03-02" : e.target.value;   

    // Even though the user is currently interacting with this input element only,
    // the data displayed on the table ( set using setExpenses() ) must take into account 
    // the values of the other input elements
    const lastDate = toDate === "" ? "2023-03-09" : toDate;
    const latestMin = min === "" ? 10.89 : min;
    const latestMax = max === "" ? 809.37 : max;
    const latestMerchant = merchant;
    const latestNewStatus = newStatus === true ? "New" : false;
    const latestInProgressStatus = inProgressStatus === true ? "In Progress" : false;
    const latestReimbursedStatus = reimbursedStatus === true ? "Reimbursed" : false;

    // Define an array for the possible values of merchant
    // and a function that will be used as a callback fn to check 
    // if the value of merchant exists as one of the elements in the array
    const merchantArray = ["Shuttle", "Fast food", "Electronics", "Restaurant", "Breakfast",
      "Parking", "Office supplies", "Rental car", "Hotel", "Taxi", "Ride sharing", "Airline"];
    const isValidMerchant = (x) => x === merchant;

    // merchant can either be an element in the merchantArray or ""
    // newStatus, inProgressStatus, and reimbursedStatus may be true or false
    // depending on if their respective checkboxes are checked

    // The logic for calling setExpenses varies with the values of these variables,
    // hence, these conditions exist to ensure that the correct logic is used 
    // for all their possible values
    
    /**
     * Dates in the ExpensesList.js file are stored in the format MM/DD/YYYY
     * Calling new Date('MM/DD/YYYY') returns a date with the HH:MM:SS set to 00:00:00
     * 
     * However, the input type=date returns a date in the format YYYY-MM-DD
     * Calling new Date('YYYY-MM-DD') returns a date with the HH:MM:SS set to 01:00:00
     * (I'm not sure if this behaviour has anything to do with my timezone GMT+0100)
     * 
     * This can potentially cause some dates from being omitted when you use the filter function
     * on new Date('MM/DD/YYYY') >= new Date('YYYY-MM-DD')
     * e.g.
     * new Date('03/02/2023') >= new Date('2023-03-02') will omit dates equals 03/02/2023 in the list
     * because it has hours 00 and we are comparing it with a date with hours 01
     * 
     * To fix this bug, subtract 1 hour from the date the user sets on the screen using setHours 
     * (which returns the number of milliseconds that have passed since midnight, Jan 1, 1970)
     * and compare it with the number of milliseconds returned by calling getTime 
     * (which also returns the number of milliseconds that have passed since midnight, Jan 1, 1970)
     * on the date object in the list from ExpensesList.js
     */
    if (merchantArray.some(isValidMerchant) && newStatus && inProgressStatus && reimbursedStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt).getTime() >= new Date(value).setHours(new Date(value).getHours() - 1) &&
        new Date(a.createdAt).getTime() <= new Date(lastDate).setHours(new Date(lastDate).getHours() - 1) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant === latestMerchant &&
        (a.status === latestNewStatus || a.status === latestInProgressStatus || a.status === latestReimbursedStatus)));
    } else if (merchantArray.some(isValidMerchant) && newStatus && inProgressStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt).getTime() >= new Date(value).setHours(new Date(value).getHours() - 1) &&
        new Date(a.createdAt).getTime() <= new Date(lastDate).setHours(new Date(lastDate).getHours() - 1) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant === latestMerchant &&
        (a.status === latestNewStatus || a.status === latestInProgressStatus)));
    } else if (merchantArray.some(isValidMerchant) && newStatus && reimbursedStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt).getTime() >= new Date(value).setHours(new Date(value).getHours() - 1) &&
        new Date(a.createdAt).getTime() <= new Date(lastDate).setHours(new Date(lastDate).getHours() - 1) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant === latestMerchant &&
        (a.status === latestNewStatus || a.status === latestReimbursedStatus)));
    } else if (newStatus && inProgressStatus && reimbursedStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt).getTime() >= new Date(value).setHours(new Date(value).getHours() - 1) &&
        new Date(a.createdAt).getTime() <= new Date(lastDate).setHours(new Date(lastDate).getHours() - 1) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant !== "" &&
        (a.status === latestNewStatus || a.status === latestInProgressStatus || a.status === latestReimbursedStatus)));
    } else if (merchantArray.some(isValidMerchant) && newStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt).getTime() >= new Date(value).setHours(new Date(value).getHours() - 1) &&
        new Date(a.createdAt).getTime() <= new Date(lastDate).setHours(new Date(lastDate).getHours() - 1) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant === latestMerchant &&
        (a.status === latestNewStatus)));
    } else if (newStatus && inProgressStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt).getTime() >= new Date(value).setHours(new Date(value).getHours() - 1) &&
        new Date(a.createdAt).getTime() <= new Date(lastDate).setHours(new Date(lastDate).getHours() - 1) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant !== "" &&
        (a.status === latestNewStatus || a.status === latestInProgressStatus)));
    } else if (newStatus && reimbursedStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt).getTime() >= new Date(value).setHours(new Date(value).getHours() - 1) &&
        new Date(a.createdAt).getTime() <= new Date(lastDate).setHours(new Date(lastDate).getHours() - 1) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant !== "" &&
        (a.status === latestNewStatus || a.status === latestReimbursedStatus)));
    } else if (newStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt).getTime() >= new Date(value).setHours(new Date(value).getHours() - 1) &&
        new Date(a.createdAt).getTime() <= new Date(lastDate).setHours(new Date(lastDate).getHours() - 1) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant !== "" &&
        (a.status === latestNewStatus)));
    } else if (merchantArray.some(isValidMerchant) && inProgressStatus && reimbursedStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt).getTime() >= new Date(value).setHours(new Date(value).getHours() - 1) &&
        new Date(a.createdAt).getTime() <= new Date(lastDate).setHours(new Date(lastDate).getHours() - 1) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant === latestMerchant &&
        (a.status === latestInProgressStatus || a.status === latestReimbursedStatus)));
    } else if (merchantArray.some(isValidMerchant) && inProgressStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt).getTime() >= new Date(value).setHours(new Date(value).getHours() - 1) &&
        new Date(a.createdAt).getTime() <= new Date(lastDate).setHours(new Date(lastDate).getHours() - 1) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant === latestMerchant &&
        (a.status === latestInProgressStatus)));
    } else if (merchantArray.some(isValidMerchant) && reimbursedStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt).getTime() >= new Date(value).setHours(new Date(value).getHours() - 1) &&
        new Date(a.createdAt).getTime() <= new Date(lastDate).setHours(new Date(lastDate).getHours() - 1) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant === latestMerchant &&
        (a.status === latestReimbursedStatus)));
    } else if (inProgressStatus && reimbursedStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt).getTime() >= new Date(value).setHours(new Date(value).getHours() - 1) &&
        new Date(a.createdAt).getTime() <= new Date(lastDate).setHours(new Date(lastDate).getHours() - 1) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant !== "" &&
        (a.status === latestInProgressStatus || a.status === latestReimbursedStatus)));
    } else if (merchantArray.some(isValidMerchant)) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt).getTime() >= new Date(value).setHours(new Date(value).getHours() - 1) &&
        new Date(a.createdAt).getTime() <= new Date(lastDate).setHours(new Date(lastDate).getHours() - 1) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant === latestMerchant));
    } else if (inProgressStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt).getTime() >= new Date(value).setHours(new Date(value).getHours() - 1) &&
        new Date(a.createdAt).getTime() <= new Date(lastDate).setHours(new Date(lastDate).getHours() - 1) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant !== "" &&
        (a.status === latestInProgressStatus)));
    } else if (reimbursedStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt).getTime() >= new Date(value).setHours(new Date(value).getHours() - 1) &&
        new Date(a.createdAt).getTime() <= new Date(lastDate).setHours(new Date(lastDate).getHours() - 1) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant !== "" &&
        (a.status === latestReimbursedStatus)));
    } else {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt).getTime() >= new Date(value).setHours(new Date(value).getHours() - 1) &&
        new Date(a.createdAt).getTime() <= new Date(lastDate).setHours(new Date(lastDate).getHours() - 1) &&
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
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt).getTime() >= new Date(firstDate).setHours(new Date(firstDate).getHours() - 1) &&
        new Date(a.createdAt).getTime() <= new Date(value).setHours(new Date(value).getHours() - 1) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant === latestMerchant &&
        (a.status === latestNewStatus || a.status === latestInProgressStatus || a.status === latestReimbursedStatus)));
    } else if (merchantArray.some(isValidMerchant) && newStatus && inProgressStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt).getTime() >= new Date(firstDate).setHours(new Date(firstDate).getHours() - 1) &&
        new Date(a.createdAt).getTime() <= new Date(value).setHours(new Date(value).getHours() - 1) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant === latestMerchant &&
        (a.status === latestNewStatus || a.status === latestInProgressStatus)));
    } else if (merchantArray.some(isValidMerchant) && newStatus && reimbursedStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt).getTime() >= new Date(firstDate).setHours(new Date(firstDate).getHours() - 1) &&
        new Date(a.createdAt).getTime() <= new Date(value).setHours(new Date(value).getHours() - 1) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant === latestMerchant &&
        (a.status === latestNewStatus || a.status === latestReimbursedStatus)));
    } else if (newStatus && inProgressStatus && reimbursedStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt).getTime() >= new Date(firstDate).setHours(new Date(firstDate).getHours() - 1) &&
        new Date(a.createdAt).getTime() <= new Date(value).setHours(new Date(value).getHours() - 1) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant !== "" &&
        (a.status === latestNewStatus || a.status === latestInProgressStatus || a.status === latestReimbursedStatus)));
    } else if (merchantArray.some(isValidMerchant) && newStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt).getTime() >= new Date(firstDate).setHours(new Date(firstDate).getHours() - 1) &&
        new Date(a.createdAt).getTime() <= new Date(value).setHours(new Date(value).getHours() - 1) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant === latestMerchant &&
        (a.status === latestNewStatus)));
    } else if (newStatus && inProgressStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt).getTime() >= new Date(firstDate).setHours(new Date(firstDate).getHours() - 1) &&
        new Date(a.createdAt).getTime() <= new Date(value).setHours(new Date(value).getHours() - 1) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant !== "" &&
        (a.status === latestNewStatus || a.status === latestInProgressStatus)));
    } else if (newStatus && reimbursedStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt).getTime() >= new Date(firstDate).setHours(new Date(firstDate).getHours() - 1) &&
        new Date(a.createdAt).getTime() <= new Date(value).setHours(new Date(value).getHours() - 1) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant !== "" &&
        (a.status === latestNewStatus || a.status === latestReimbursedStatus)));
    } else if (newStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt).getTime() >= new Date(firstDate).setHours(new Date(firstDate).getHours() - 1) &&
        new Date(a.createdAt).getTime() <= new Date(value).setHours(new Date(value).getHours() - 1) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant !== "" &&
        (a.status === latestNewStatus)));
    } else if (merchantArray.some(isValidMerchant) && inProgressStatus && reimbursedStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt).getTime() >= new Date(firstDate).setHours(new Date(firstDate).getHours() - 1) &&
        new Date(a.createdAt).getTime() <= new Date(value).setHours(new Date(value).getHours() - 1) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant === latestMerchant &&
        (a.status === latestInProgressStatus || a.status === latestReimbursedStatus)));
    } else if (merchantArray.some(isValidMerchant) && inProgressStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt).getTime() >= new Date(firstDate).setHours(new Date(firstDate).getHours() - 1) &&
        new Date(a.createdAt).getTime() <= new Date(value).setHours(new Date(value).getHours() - 1) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant === latestMerchant &&
        (a.status === latestInProgressStatus)));
    } else if (merchantArray.some(isValidMerchant) && reimbursedStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt).getTime() >= new Date(firstDate).setHours(new Date(firstDate).getHours() - 1) &&
        new Date(a.createdAt).getTime() <= new Date(value).setHours(new Date(value).getHours() - 1) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant === latestMerchant &&
        (a.status === latestReimbursedStatus)));
    } else if (inProgressStatus && reimbursedStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt).getTime() >= new Date(firstDate).setHours(new Date(firstDate).getHours() - 1) &&
        new Date(a.createdAt).getTime() <= new Date(value).setHours(new Date(value).getHours() - 1) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant !== "" &&
        (a.status === latestInProgressStatus || a.status === latestReimbursedStatus)));
    } else if (merchantArray.some(isValidMerchant)) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt).getTime() >= new Date(firstDate).setHours(new Date(firstDate).getHours() - 1) &&
        new Date(a.createdAt).getTime() <= new Date(value).setHours(new Date(value).getHours() - 1) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant === latestMerchant));
    } else if (inProgressStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt).getTime() >= new Date(firstDate).setHours(new Date(firstDate).getHours() - 1) &&
        new Date(a.createdAt).getTime() <= new Date(value).setHours(new Date(value).getHours() - 1) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant !== "" &&
        (a.status === latestInProgressStatus)));
    } else if (reimbursedStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt).getTime() >= new Date(firstDate).setHours(new Date(firstDate).getHours() - 1) &&
        new Date(a.createdAt).getTime() <= new Date(value).setHours(new Date(value).getHours() - 1) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant !== "" &&
        (a.status === latestReimbursedStatus)));
    } else {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt).getTime() >= new Date(firstDate).setHours(new Date(firstDate).getHours() - 1) &&
        new Date(a.createdAt).getTime() <= new Date(value).setHours(new Date(value).getHours() - 1) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant !== "" &&
        a.status === ""));
    }
    
  }

  const handleMin = (e) => {
    setMin(e.target.value);
    // hard coded values... To be changed to dynamic later
    const value = e.target.value === "" ? 10.89 : e.target.value;

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
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt).getTime() >= new Date(firstDate).setHours(new Date(firstDate).getHours() - 1) &&
        new Date(a.createdAt).getTime() <= new Date(lastDate).setHours(new Date(lastDate).getHours() - 1) &&
        a.total >= value &&
        a.total <= latestMax &&
        a.merchant === latestMerchant &&
        (a.status === latestNewStatus || a.status === latestInProgressStatus || a.status === latestReimbursedStatus)));
    } else if (merchantArray.some(isValidMerchant) && newStatus && inProgressStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt).getTime() >= new Date(firstDate).setHours(new Date(firstDate).getHours() - 1) &&
        new Date(a.createdAt).getTime() <= new Date(lastDate).setHours(new Date(lastDate).getHours() - 1) &&
        a.total >= value &&
        a.total <= latestMax &&
        a.merchant === latestMerchant &&
        (a.status === latestNewStatus || a.status === latestInProgressStatus)));
    } else if (merchantArray.some(isValidMerchant) && newStatus && reimbursedStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt).getTime() >= new Date(firstDate).setHours(new Date(firstDate).getHours() - 1) &&
        new Date(a.createdAt).getTime() <= new Date(lastDate).setHours(new Date(lastDate).getHours() - 1) &&
        a.total >= value &&
        a.total <= latestMax &&
        a.merchant === latestMerchant &&
        (a.status === latestNewStatus || a.status === latestReimbursedStatus)));
    } else if (newStatus && inProgressStatus && reimbursedStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt).getTime() >= new Date(firstDate).setHours(new Date(firstDate).getHours() - 1) &&
        new Date(a.createdAt).getTime() <= new Date(lastDate).setHours(new Date(lastDate).getHours() - 1) &&
        a.total >= value &&
        a.total <= latestMax &&
        a.merchant !== "" &&
        (a.status === latestNewStatus || a.status === latestInProgressStatus || a.status === latestReimbursedStatus)));
    } else if (merchantArray.some(isValidMerchant) && newStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt).getTime() >= new Date(firstDate).setHours(new Date(firstDate).getHours() - 1) &&
        new Date(a.createdAt).getTime() <= new Date(lastDate).setHours(new Date(lastDate).getHours() - 1) &&
        a.total >= value &&
        a.total <= latestMax &&
        a.merchant === latestMerchant &&
        (a.status === latestNewStatus)));
    } else if (newStatus && inProgressStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt).getTime() >= new Date(firstDate).setHours(new Date(firstDate).getHours() - 1) &&
        new Date(a.createdAt).getTime() <= new Date(lastDate).setHours(new Date(lastDate).getHours() - 1) &&
        a.total >= value &&
        a.total <= latestMax &&
        a.merchant !== "" &&
        (a.status === latestNewStatus || a.status === latestInProgressStatus)));
    } else if (newStatus && reimbursedStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt).getTime() >= new Date(firstDate).setHours(new Date(firstDate).getHours() - 1) &&
        new Date(a.createdAt).getTime() <= new Date(lastDate).setHours(new Date(lastDate).getHours() - 1) &&
        a.total >= value &&
        a.total <= latestMax &&
        a.merchant !== "" &&
        (a.status === latestNewStatus || a.status === latestReimbursedStatus)));
    } else if (newStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt).getTime() >= new Date(firstDate).setHours(new Date(firstDate).getHours() - 1) &&
        new Date(a.createdAt).getTime() <= new Date(lastDate).setHours(new Date(lastDate).getHours() - 1) &&
        a.total >= value &&
        a.total <= latestMax &&
        a.merchant !== "" &&
        (a.status === latestNewStatus)));
    } else if (merchantArray.some(isValidMerchant) && inProgressStatus && reimbursedStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt).getTime() >= new Date(firstDate).setHours(new Date(firstDate).getHours() - 1) &&
        new Date(a.createdAt).getTime() <= new Date(lastDate).setHours(new Date(lastDate).getHours() - 1) &&
        a.total >= value &&
        a.total <= latestMax &&
        a.merchant === latestMerchant &&
        (a.status === latestInProgressStatus || a.status === latestReimbursedStatus)));
    } else if (merchantArray.some(isValidMerchant) && inProgressStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt).getTime() >= new Date(firstDate).setHours(new Date(firstDate).getHours() - 1) &&
        new Date(a.createdAt).getTime() <= new Date(lastDate).setHours(new Date(lastDate).getHours() - 1) &&
        a.total >= value &&
        a.total <= latestMax &&
        a.merchant === latestMerchant &&
        (a.status === latestInProgressStatus)));
    } else if (merchantArray.some(isValidMerchant) && reimbursedStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt).getTime() >= new Date(firstDate).setHours(new Date(firstDate).getHours() - 1) &&
        new Date(a.createdAt).getTime() <= new Date(lastDate).setHours(new Date(lastDate).getHours() - 1) &&
        a.total >= value &&
        a.total <= latestMax &&
        a.merchant === latestMerchant &&
        (a.status === latestReimbursedStatus)));
    } else if (inProgressStatus && reimbursedStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt).getTime() >= new Date(firstDate).setHours(new Date(firstDate).getHours() - 1) &&
        new Date(a.createdAt).getTime() <= new Date(lastDate).setHours(new Date(lastDate).getHours() - 1) &&
        a.total >= value &&
        a.total <= latestMax &&
        a.merchant !== "" &&
        (a.status === latestInProgressStatus || a.status === latestReimbursedStatus)));
    } else if (merchantArray.some(isValidMerchant)) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt).getTime() >= new Date(firstDate).setHours(new Date(firstDate).getHours() - 1) &&
        new Date(a.createdAt).getTime() <= new Date(lastDate).setHours(new Date(lastDate).getHours() - 1) &&
        a.total >= value &&
        a.total <= latestMax &&
        a.merchant === latestMerchant));
    } else if (inProgressStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt).getTime() >= new Date(firstDate).setHours(new Date(firstDate).getHours() - 1) &&
        new Date(a.createdAt).getTime() <= new Date(lastDate).setHours(new Date(lastDate).getHours() - 1) &&
        a.total >= value &&
        a.total <= latestMax &&
        a.merchant !== "" &&
        (a.status === latestInProgressStatus)));
    } else if (reimbursedStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt).getTime() >= new Date(firstDate).setHours(new Date(firstDate).getHours() - 1) &&
        new Date(a.createdAt).getTime() <= new Date(lastDate).setHours(new Date(lastDate).getHours() - 1) &&
        a.total >= value &&
        a.total <= latestMax &&
        a.merchant !== "" &&
        (a.status === latestReimbursedStatus)));
    } else {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt).getTime() >= new Date(firstDate).setHours(new Date(firstDate).getHours() - 1) &&
        new Date(a.createdAt).getTime() <= new Date(lastDate).setHours(new Date(lastDate).getHours() - 1) &&
        a.total >= value &&
        a.total <= latestMax &&
        a.merchant !== "" &&
        a.status === ""));
    }

  }

  const handleMax = (e) => {
    setMax(e.target.value);
    // hard coded values... To be changed to dynamic later
    const value = e.target.value === "" ? 809.37 : e.target.value;

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
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt).getTime() >= new Date(firstDate).setHours(new Date(firstDate).getHours() - 1) &&
        new Date(a.createdAt).getTime() <= new Date(lastDate).setHours(new Date(lastDate).getHours() - 1) &&
        a.total >= latestMin &&
        a.total <= value &&
        a.merchant === latestMerchant &&
        (a.status === latestNewStatus || a.status === latestInProgressStatus || a.status === latestReimbursedStatus)));
    } else if (merchantArray.some(isValidMerchant) && newStatus && inProgressStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt).getTime() >= new Date(firstDate).setHours(new Date(firstDate).getHours() - 1) &&
        new Date(a.createdAt).getTime() <= new Date(lastDate).setHours(new Date(lastDate).getHours() - 1) &&
        a.total >= latestMin &&
        a.total <= value &&
        a.merchant === latestMerchant &&
        (a.status === latestNewStatus || a.status === latestInProgressStatus)));
    } else if (merchantArray.some(isValidMerchant) && newStatus && reimbursedStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt).getTime() >= new Date(firstDate).setHours(new Date(firstDate).getHours() - 1) &&
        new Date(a.createdAt).getTime() <= new Date(lastDate).setHours(new Date(lastDate).getHours() - 1) &&
        a.total >= latestMin &&
        a.total <= value &&
        a.merchant === latestMerchant &&
        (a.status === latestNewStatus || a.status === latestReimbursedStatus)));
    } else if (newStatus && inProgressStatus && reimbursedStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt).getTime() >= new Date(firstDate).setHours(new Date(firstDate).getHours() - 1) &&
        new Date(a.createdAt).getTime() <= new Date(lastDate).setHours(new Date(lastDate).getHours() - 1) &&
        a.total >= latestMin &&
        a.total <= value &&
        a.merchant !== "" &&
        (a.status === latestNewStatus || a.status === latestInProgressStatus || a.status === latestReimbursedStatus)));
    } else if (merchantArray.some(isValidMerchant) && newStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt).getTime() >= new Date(firstDate).setHours(new Date(firstDate).getHours() - 1) &&
        new Date(a.createdAt).getTime() <= new Date(lastDate).setHours(new Date(lastDate).getHours() - 1) &&
        a.total >= latestMin &&
        a.total <= value &&
        a.merchant === latestMerchant &&
        (a.status === latestNewStatus)));
    } else if (newStatus && inProgressStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt).getTime() >= new Date(firstDate).setHours(new Date(firstDate).getHours() - 1) &&
        new Date(a.createdAt).getTime() <= new Date(lastDate).setHours(new Date(lastDate).getHours() - 1) &&
        a.total >= latestMin &&
        a.total <= value &&
        a.merchant !== "" &&
        (a.status === latestNewStatus || a.status === latestInProgressStatus)));
    } else if (newStatus && reimbursedStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt).getTime() >= new Date(firstDate).setHours(new Date(firstDate).getHours() - 1) &&
        new Date(a.createdAt).getTime() <= new Date(lastDate).setHours(new Date(lastDate).getHours() - 1) &&
        a.total >= latestMin &&
        a.total <= value &&
        a.merchant !== "" &&
        (a.status === latestNewStatus || a.status === latestReimbursedStatus)));
    } else if (newStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt).getTime() >= new Date(firstDate).setHours(new Date(firstDate).getHours() - 1) &&
        new Date(a.createdAt).getTime() <= new Date(lastDate).setHours(new Date(lastDate).getHours() - 1) &&
        a.total >= latestMin &&
        a.total <= value &&
        a.merchant !== "" &&
        (a.status === latestNewStatus)));
    } else if (merchantArray.some(isValidMerchant) && inProgressStatus && reimbursedStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt).getTime() >= new Date(firstDate).setHours(new Date(firstDate).getHours() - 1) &&
        new Date(a.createdAt).getTime() <= new Date(lastDate).setHours(new Date(lastDate).getHours() - 1) &&
        a.total >= latestMin &&
        a.total <= value &&
        a.merchant === latestMerchant &&
        (a.status === latestInProgressStatus || a.status === latestReimbursedStatus)));
    } else if (merchantArray.some(isValidMerchant) && inProgressStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt).getTime() >= new Date(firstDate).setHours(new Date(firstDate).getHours() - 1) &&
        new Date(a.createdAt).getTime() <= new Date(lastDate).setHours(new Date(lastDate).getHours() - 1) &&
        a.total >= latestMin &&
        a.total <= value &&
        a.merchant === latestMerchant &&
        (a.status === latestInProgressStatus)));
    } else if (merchantArray.some(isValidMerchant) && reimbursedStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt).getTime() >= new Date(firstDate).setHours(new Date(firstDate).getHours() - 1) &&
        new Date(a.createdAt).getTime() <= new Date(lastDate).setHours(new Date(lastDate).getHours() - 1) &&
        a.total >= latestMin &&
        a.total <= value &&
        a.merchant === latestMerchant &&
        (a.status === latestReimbursedStatus)));
    } else if (inProgressStatus && reimbursedStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt).getTime() >= new Date(firstDate).setHours(new Date(firstDate).getHours() - 1) &&
        new Date(a.createdAt).getTime() <= new Date(lastDate).setHours(new Date(lastDate).getHours() - 1) &&
        a.total >= latestMin &&
        a.total <= value &&
        a.merchant !== "" &&
        (a.status === latestInProgressStatus || a.status === latestReimbursedStatus)));
    } else if (merchantArray.some(isValidMerchant)) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt).getTime() >= new Date(firstDate).setHours(new Date(firstDate).getHours() - 1) &&
        new Date(a.createdAt).getTime() <= new Date(lastDate).setHours(new Date(lastDate).getHours() - 1) &&
        a.total >= latestMin &&
        a.total <= value &&
        a.merchant === latestMerchant));
    } else if (inProgressStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt).getTime() >= new Date(firstDate).setHours(new Date(firstDate).getHours() - 1) &&
        new Date(a.createdAt).getTime() <= new Date(lastDate).setHours(new Date(lastDate).getHours() - 1) &&
        a.total >= latestMin &&
        a.total <= value &&
        a.merchant !== "" &&
        (a.status === latestInProgressStatus)));
    } else if (reimbursedStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt).getTime() >= new Date(firstDate).setHours(new Date(firstDate).getHours() - 1) &&
        new Date(a.createdAt).getTime() <= new Date(lastDate).setHours(new Date(lastDate).getHours() - 1) &&
        a.total >= latestMin &&
        a.total <= value &&
        a.merchant !== "" &&
        (a.status === latestReimbursedStatus)));
    } else {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt).getTime() >= new Date(firstDate).setHours(new Date(firstDate).getHours() - 1) &&
        new Date(a.createdAt).getTime() <= new Date(lastDate).setHours(new Date(lastDate).getHours() - 1) &&
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
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt).getTime() >= new Date(firstDate).setHours(new Date(firstDate).getHours() - 1) &&
        new Date(a.createdAt).getTime() <= new Date(lastDate).setHours(new Date(lastDate).getHours() - 1) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant === e.target.value &&
        (a.status === latestNewStatus || a.status === latestInProgressStatus || a.status === latestReimbursedStatus)));
    } else if (merchantArray.some(isValidMerchant) && newStatus && inProgressStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt).getTime() >= new Date(firstDate).setHours(new Date(firstDate).getHours() - 1) &&
        new Date(a.createdAt).getTime() <= new Date(lastDate).setHours(new Date(lastDate).getHours() - 1) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant === e.target.value &&
        (a.status === latestNewStatus || a.status === latestInProgressStatus)));
    } else if (merchantArray.some(isValidMerchant) && newStatus && reimbursedStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt).getTime() >= new Date(firstDate).setHours(new Date(firstDate).getHours() - 1) &&
        new Date(a.createdAt).getTime() <= new Date(lastDate).setHours(new Date(lastDate).getHours() - 1) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant === e.target.value &&
        (a.status === latestNewStatus || a.status === latestReimbursedStatus)));
    } else if (merchantArray.some(isValidMerchant) && newStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt).getTime() >= new Date(firstDate).setHours(new Date(firstDate).getHours() - 1) &&
        new Date(a.createdAt).getTime() <= new Date(lastDate).setHours(new Date(lastDate).getHours() - 1) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant === e.target.value &&
        (a.status === latestNewStatus)));
    } else if (merchantArray.some(isValidMerchant) && inProgressStatus && reimbursedStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt).getTime() >= new Date(firstDate).setHours(new Date(firstDate).getHours() - 1) &&
        new Date(a.createdAt).getTime() <= new Date(lastDate).setHours(new Date(lastDate).getHours() - 1) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant === e.target.value &&
        (a.status === latestInProgressStatus || a.status === latestReimbursedStatus)));
    } else if (merchantArray.some(isValidMerchant) && inProgressStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt).getTime() >= new Date(firstDate).setHours(new Date(firstDate).getHours() - 1) &&
        new Date(a.createdAt).getTime() <= new Date(lastDate).setHours(new Date(lastDate).getHours() - 1) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant === e.target.value &&
        (a.status === latestInProgressStatus)));
    } else if (merchantArray.some(isValidMerchant) && reimbursedStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt).getTime() >= new Date(firstDate).setHours(new Date(firstDate).getHours() - 1) &&
        new Date(a.createdAt).getTime() <= new Date(lastDate).setHours(new Date(lastDate).getHours() - 1) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant === e.target.value &&
        (a.status === latestReimbursedStatus)));
    } else if (merchantArray.some(isValidMerchant)) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt).getTime() >= new Date(firstDate).setHours(new Date(firstDate).getHours() - 1) &&
        new Date(a.createdAt).getTime() <= new Date(lastDate).setHours(new Date(lastDate).getHours() - 1) &&
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
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt).getTime() >= new Date(firstDate).setHours(new Date(firstDate).getHours() - 1) &&
        new Date(a.createdAt).getTime() <= new Date(lastDate).setHours(new Date(lastDate).getHours() - 1) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant === e.target.value &&
        (a.status === latestNewStatus || a.status === latestInProgressStatus || a.status === latestReimbursedStatus)));
    } else if (merchantArray.some(isValidMerchant) && newStatus && inProgressStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt).getTime() >= new Date(firstDate).setHours(new Date(firstDate).getHours() - 1) &&
        new Date(a.createdAt).getTime() <= new Date(lastDate).setHours(new Date(lastDate).getHours() - 1) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant === e.target.value &&
        (a.status === latestNewStatus || a.status === latestInProgressStatus)));
    } else if (merchantArray.some(isValidMerchant) && newStatus && reimbursedStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt).getTime() >= new Date(firstDate).setHours(new Date(firstDate).getHours() - 1) &&
        new Date(a.createdAt).getTime() <= new Date(lastDate).setHours(new Date(lastDate).getHours() - 1) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant === e.target.value &&
        (a.status === latestNewStatus || a.status === latestReimbursedStatus)));
    } else if (newStatus && inProgressStatus && reimbursedStatus) {
      setMerchant("");
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt).getTime() >= new Date(firstDate).setHours(new Date(firstDate).getHours() - 1) &&
        new Date(a.createdAt).getTime() <= new Date(lastDate).setHours(new Date(lastDate).getHours() - 1) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant !== "" &&
        (a.status === latestNewStatus || a.status === latestInProgressStatus || a.status === latestReimbursedStatus)));
    } else if (merchantArray.some(isValidMerchant) && newStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt).getTime() >= new Date(firstDate).setHours(new Date(firstDate).getHours() - 1) &&
        new Date(a.createdAt).getTime() <= new Date(lastDate).setHours(new Date(lastDate).getHours() - 1) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant === e.target.value &&
        (a.status === latestNewStatus)));
    } else if (newStatus && inProgressStatus) {
      setMerchant("");
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt).getTime() >= new Date(firstDate).setHours(new Date(firstDate).getHours() - 1) &&
        new Date(a.createdAt).getTime() <= new Date(lastDate).setHours(new Date(lastDate).getHours() - 1) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant !== "" &&
        (a.status === latestNewStatus || a.status === latestInProgressStatus)));
    } else if (newStatus && reimbursedStatus) {
      setMerchant("");
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt).getTime() >= new Date(firstDate).setHours(new Date(firstDate).getHours() - 1) &&
        new Date(a.createdAt).getTime() <= new Date(lastDate).setHours(new Date(lastDate).getHours() - 1) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant !== "" &&
        (a.status === latestNewStatus || a.status === latestReimbursedStatus)));
    } else if (newStatus) {
      setMerchant("");
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt).getTime() >= new Date(firstDate).setHours(new Date(firstDate).getHours() - 1) &&
        new Date(a.createdAt).getTime() <= new Date(lastDate).setHours(new Date(lastDate).getHours() - 1) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant !== "" &&
        (a.status === latestNewStatus)));
    } else if (merchantArray.some(isValidMerchant) && inProgressStatus && reimbursedStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt).getTime() >= new Date(firstDate).setHours(new Date(firstDate).getHours() - 1) &&
        new Date(a.createdAt).getTime() <= new Date(lastDate).setHours(new Date(lastDate).getHours() - 1) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant === e.target.value &&
        (a.status === latestInProgressStatus || a.status === latestReimbursedStatus)));
    } else if (merchantArray.some(isValidMerchant) && inProgressStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt).getTime() >= new Date(firstDate).setHours(new Date(firstDate).getHours() - 1) &&
        new Date(a.createdAt).getTime() <= new Date(lastDate).setHours(new Date(lastDate).getHours() - 1) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant === e.target.value &&
        (a.status === latestInProgressStatus)));
    } else if (merchantArray.some(isValidMerchant) && reimbursedStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt).getTime() >= new Date(firstDate).setHours(new Date(firstDate).getHours() - 1) &&
        new Date(a.createdAt).getTime() <= new Date(lastDate).setHours(new Date(lastDate).getHours() - 1) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant === e.target.value &&
        (a.status === latestReimbursedStatus)));
    } else if (inProgressStatus && reimbursedStatus) {
      setMerchant("");
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt).getTime() >= new Date(firstDate).setHours(new Date(firstDate).getHours() - 1) &&
        new Date(a.createdAt).getTime() <= new Date(lastDate).setHours(new Date(lastDate).getHours() - 1) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant !== "" &&
        (a.status === latestInProgressStatus || a.status === latestReimbursedStatus)));
    } else if (merchantArray.some(isValidMerchant)) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt).getTime() >= new Date(firstDate).setHours(new Date(firstDate).getHours() - 1) &&
        new Date(a.createdAt).getTime() <= new Date(lastDate).setHours(new Date(lastDate).getHours() - 1) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant === e.target.value));
    } else if (inProgressStatus) {
      setMerchant("");
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt).getTime() >= new Date(firstDate).setHours(new Date(firstDate).getHours() - 1) &&
        new Date(a.createdAt).getTime() <= new Date(lastDate).setHours(new Date(lastDate).getHours() - 1) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant !== "" &&
        (a.status === latestInProgressStatus)));
    } else if (reimbursedStatus) {
      setMerchant("");
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt).getTime() >= new Date(firstDate).setHours(new Date(firstDate).getHours() - 1) &&
        new Date(a.createdAt).getTime() <= new Date(lastDate).setHours(new Date(lastDate).getHours() - 1) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant !== "" &&
        (a.status === latestReimbursedStatus)));
    } else {
      setMerchant("");
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt).getTime() >= new Date(firstDate).setHours(new Date(firstDate).getHours() - 1) &&
        new Date(a.createdAt).getTime() <= new Date(lastDate).setHours(new Date(lastDate).getHours() - 1) &&
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
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt).getTime() >= new Date(firstDate).setHours(new Date(firstDate).getHours() - 1) &&
        new Date(a.createdAt).getTime() <= new Date(lastDate).setHours(new Date(lastDate).getHours() - 1) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant === latestMerchant && 
        (a.status === checked || a.status === latestInProgressStatus || a.status === latestReimbursedStatus)));
    } else if (merchantArray.some(isValidMerchant) && e.target.checked && inProgressStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt).getTime() >= new Date(firstDate).setHours(new Date(firstDate).getHours() - 1) &&
        new Date(a.createdAt).getTime() <= new Date(lastDate).setHours(new Date(lastDate).getHours() - 1) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant === latestMerchant &&
        (a.status === checked || a.status === latestInProgressStatus)));
    } else if (merchantArray.some(isValidMerchant) && e.target.checked && reimbursedStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt).getTime() >= new Date(firstDate).setHours(new Date(firstDate).getHours() - 1) &&
        new Date(a.createdAt).getTime() <= new Date(lastDate).setHours(new Date(lastDate).getHours() - 1) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant === latestMerchant &&
        (a.status === checked || a.status === latestReimbursedStatus)));
    } else if (e.target.checked && inProgressStatus && reimbursedStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt).getTime() >= new Date(firstDate).setHours(new Date(firstDate).getHours() - 1) &&
        new Date(a.createdAt).getTime() <= new Date(lastDate).setHours(new Date(lastDate).getHours() - 1) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant !== "" &&
        (a.status === checked || a.status === latestInProgressStatus || a.status === latestReimbursedStatus)));
    } else if (merchantArray.some(isValidMerchant) && e.target.checked) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt).getTime() >= new Date(firstDate).setHours(new Date(firstDate).getHours() - 1) &&
        new Date(a.createdAt).getTime() <= new Date(lastDate).setHours(new Date(lastDate).getHours() - 1) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant === latestMerchant &&
        (a.status === checked)));
    } else if (e.target.checked && inProgressStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt).getTime() >= new Date(firstDate).setHours(new Date(firstDate).getHours() - 1) &&
        new Date(a.createdAt).getTime() <= new Date(lastDate).setHours(new Date(lastDate).getHours() - 1) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant !== "" &&
        (a.status === checked || a.status === latestInProgressStatus)));
    } else if (e.target.checked && reimbursedStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt).getTime() >= new Date(firstDate).setHours(new Date(firstDate).getHours() - 1) &&
        new Date(a.createdAt).getTime() <= new Date(lastDate).setHours(new Date(lastDate).getHours() - 1) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant !== "" &&
        (a.status === checked || a.status === latestReimbursedStatus)));
    } else if (e.target.checked) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt).getTime() >= new Date(firstDate).setHours(new Date(firstDate).getHours() - 1) &&
        new Date(a.createdAt).getTime() <= new Date(lastDate).setHours(new Date(lastDate).getHours() - 1) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant !== "" &&
        (a.status === checked)));
    } else if (merchantArray.some(isValidMerchant) && !e.target.checked && inProgressStatus && reimbursedStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt).getTime() >= new Date(firstDate).setHours(new Date(firstDate).getHours() - 1) &&
        new Date(a.createdAt).getTime() <= new Date(lastDate).setHours(new Date(lastDate).getHours() - 1) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant === latestMerchant && 
        (a.status === latestInProgressStatus || a.status === latestReimbursedStatus)));
    } else if (merchantArray.some(isValidMerchant) && !e.target.checked && inProgressStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt).getTime() >= new Date(firstDate).setHours(new Date(firstDate).getHours() - 1) &&
        new Date(a.createdAt).getTime() <= new Date(lastDate).setHours(new Date(lastDate).getHours() - 1) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant === latestMerchant &&
        (a.status === latestInProgressStatus)));
    } else if (merchantArray.some(isValidMerchant) && !e.target.checked && reimbursedStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt).getTime() >= new Date(firstDate).setHours(new Date(firstDate).getHours() - 1) &&
        new Date(a.createdAt).getTime() <= new Date(lastDate).setHours(new Date(lastDate).getHours() - 1) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant === latestMerchant &&
        (a.status === latestReimbursedStatus)));
    } else if (!e.target.checked && inProgressStatus && reimbursedStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt).getTime() >= new Date(firstDate).setHours(new Date(firstDate).getHours() - 1) &&
        new Date(a.createdAt).getTime() <= new Date(lastDate).setHours(new Date(lastDate).getHours() - 1) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant !== "" &&
        (a.status === latestInProgressStatus || a.status === latestReimbursedStatus)));
    } else if (merchantArray.some(isValidMerchant) && !e.target.checked) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt).getTime() >= new Date(firstDate).setHours(new Date(firstDate).getHours() - 1) &&
        new Date(a.createdAt).getTime() <= new Date(lastDate).setHours(new Date(lastDate).getHours() - 1) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant === latestMerchant));
    } else if (!e.target.checked && inProgressStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt).getTime() >= new Date(firstDate).setHours(new Date(firstDate).getHours() - 1) &&
        new Date(a.createdAt).getTime() <= new Date(lastDate).setHours(new Date(lastDate).getHours() - 1) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant !== "" &&
        (a.status === latestInProgressStatus)));
    } else if (!e.target.checked && reimbursedStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt).getTime() >= new Date(firstDate).setHours(new Date(firstDate).getHours() - 1) &&
        new Date(a.createdAt).getTime() <= new Date(lastDate).setHours(new Date(lastDate).getHours() - 1) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant !== "" &&
        (a.status === latestReimbursedStatus)));
    } else {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt).getTime() >= new Date(firstDate).setHours(new Date(firstDate).getHours() - 1) &&
        new Date(a.createdAt).getTime() <= new Date(lastDate).setHours(new Date(lastDate).getHours() - 1) &&
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
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt).getTime() >= new Date(firstDate).setHours(new Date(firstDate).getHours() - 1) &&
        new Date(a.createdAt).getTime() <= new Date(lastDate).setHours(new Date(lastDate).getHours() - 1) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant === latestMerchant &&
        (a.status === checked || a.status === latestNewStatus || a.status === latestReimbursedStatus)));
    } else if (merchantArray.some(isValidMerchant) && e.target.checked && newStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt).getTime() >= new Date(firstDate).setHours(new Date(firstDate).getHours() - 1) &&
        new Date(a.createdAt).getTime() <= new Date(lastDate).setHours(new Date(lastDate).getHours() - 1) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant === latestMerchant &&
        (a.status === checked || a.status === latestNewStatus)));
    } else if (merchantArray.some(isValidMerchant) && e.target.checked && reimbursedStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt).getTime() >= new Date(firstDate).setHours(new Date(firstDate).getHours() - 1) &&
        new Date(a.createdAt).getTime() <= new Date(lastDate).setHours(new Date(lastDate).getHours() - 1) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant === latestMerchant &&
        (a.status === checked || a.status === latestReimbursedStatus)));
    } else if (e.target.checked && newStatus && reimbursedStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt).getTime() >= new Date(firstDate).setHours(new Date(firstDate).getHours() - 1) &&
        new Date(a.createdAt).getTime() <= new Date(lastDate).setHours(new Date(lastDate).getHours() - 1) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant !== "" &&
        (a.status === checked || a.status === latestNewStatus || a.status === latestReimbursedStatus)));
    } else if (merchantArray.some(isValidMerchant) && e.target.checked) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt).getTime() >= new Date(firstDate).setHours(new Date(firstDate).getHours() - 1) &&
        new Date(a.createdAt).getTime() <= new Date(lastDate).setHours(new Date(lastDate).getHours() - 1) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant === latestMerchant &&
        (a.status === checked)));
    } else if (e.target.checked && newStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt).getTime() >= new Date(firstDate).setHours(new Date(firstDate).getHours() - 1) &&
        new Date(a.createdAt).getTime() <= new Date(lastDate).setHours(new Date(lastDate).getHours() - 1) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant !== "" &&
        (a.status === checked || a.status === latestNewStatus)));
    } else if (e.target.checked && reimbursedStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt).getTime() >= new Date(firstDate).setHours(new Date(firstDate).getHours() - 1) &&
        new Date(a.createdAt).getTime() <= new Date(lastDate).setHours(new Date(lastDate).getHours() - 1) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant !== "" &&
        (a.status === checked || a.status === latestReimbursedStatus)));
    } else if (e.target.checked) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt).getTime() >= new Date(firstDate).setHours(new Date(firstDate).getHours() - 1) &&
        new Date(a.createdAt).getTime() <= new Date(lastDate).setHours(new Date(lastDate).getHours() - 1) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant !== "" &&
        (a.status === checked)));
    } else if (merchantArray.some(isValidMerchant) && !e.target.checked && newStatus && reimbursedStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt).getTime() >= new Date(firstDate).setHours(new Date(firstDate).getHours() - 1) &&
        new Date(a.createdAt).getTime() <= new Date(lastDate).setHours(new Date(lastDate).getHours() - 1) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant === latestMerchant &&
        (a.status === latestNewStatus || a.status === latestReimbursedStatus)));
    } else if (merchantArray.some(isValidMerchant) && !e.target.checked && newStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt).getTime() >= new Date(firstDate).setHours(new Date(firstDate).getHours() - 1) &&
        new Date(a.createdAt).getTime() <= new Date(lastDate).setHours(new Date(lastDate).getHours() - 1) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant === latestMerchant &&
        (a.status === latestNewStatus)));
    } else if (merchantArray.some(isValidMerchant) && !e.target.checked && reimbursedStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt).getTime() >= new Date(firstDate).setHours(new Date(firstDate).getHours() - 1) &&
        new Date(a.createdAt).getTime() <= new Date(lastDate).setHours(new Date(lastDate).getHours() - 1) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant === latestMerchant &&
        (a.status === latestReimbursedStatus)));
    } else if (!e.target.checked && newStatus && reimbursedStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt).getTime() >= new Date(firstDate).setHours(new Date(firstDate).getHours() - 1) &&
        new Date(a.createdAt).getTime() <= new Date(lastDate).setHours(new Date(lastDate).getHours() - 1) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant !== "" &&
        (a.status === latestNewStatus || a.status === latestReimbursedStatus)));
    } else if (merchantArray.some(isValidMerchant) && !e.target.checked) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt).getTime() >= new Date(firstDate).setHours(new Date(firstDate).getHours() - 1) &&
        new Date(a.createdAt).getTime() <= new Date(lastDate).setHours(new Date(lastDate).getHours() - 1) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant === latestMerchant));
    } else if (!e.target.checked && newStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt).getTime() >= new Date(firstDate).setHours(new Date(firstDate).getHours() - 1) &&
        new Date(a.createdAt).getTime() <= new Date(lastDate).setHours(new Date(lastDate).getHours() - 1) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant !== "" &&
        (a.status === latestNewStatus)));
    } else if (!e.target.checked && reimbursedStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt).getTime() >= new Date(firstDate).setHours(new Date(firstDate).getHours() - 1) &&
        new Date(a.createdAt).getTime() <= new Date(lastDate).setHours(new Date(lastDate).getHours() - 1) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant !== "" &&
        (a.status === latestReimbursedStatus)));
    } else {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt).getTime() >= new Date(firstDate).setHours(new Date(firstDate).getHours() - 1) &&
        new Date(a.createdAt).getTime() <= new Date(lastDate).setHours(new Date(lastDate).getHours() - 1) &&
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
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt).getTime() >= new Date(firstDate).setHours(new Date(firstDate).getHours() - 1) &&
        new Date(a.createdAt).getTime() <= new Date(lastDate).setHours(new Date(lastDate).getHours() - 1) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant === latestMerchant &&
        (a.status === checked || a.status === latestNewStatus || a.status === latestInProgressStatus)));
    } else if (merchantArray.some(isValidMerchant) && e.target.checked && newStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt).getTime() >= new Date(firstDate).setHours(new Date(firstDate).getHours() - 1) &&
        new Date(a.createdAt).getTime() <= new Date(lastDate).setHours(new Date(lastDate).getHours() - 1) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant === latestMerchant &&
        (a.status === checked || a.status === latestNewStatus)));
    } else if (merchantArray.some(isValidMerchant) && e.target.checked && inProgressStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt).getTime() >= new Date(firstDate).setHours(new Date(firstDate).getHours() - 1) &&
        new Date(a.createdAt).getTime() <= new Date(lastDate).setHours(new Date(lastDate).getHours() - 1) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant === latestMerchant &&
        (a.status === checked || a.status === latestInProgressStatus)));
    } else if (e.target.checked && newStatus && inProgressStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt).getTime() >= new Date(firstDate).setHours(new Date(firstDate).getHours() - 1) &&
        new Date(a.createdAt).getTime() <= new Date(lastDate).setHours(new Date(lastDate).getHours() - 1) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant !== "" &&
        (a.status === checked || a.status === latestNewStatus || a.status === latestInProgressStatus)));
    } else if (merchantArray.some(isValidMerchant) && e.target.checked) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt).getTime() >= new Date(firstDate).setHours(new Date(firstDate).getHours() - 1) &&
        new Date(a.createdAt).getTime() <= new Date(lastDate).setHours(new Date(lastDate).getHours() - 1) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant === latestMerchant &&
        (a.status === checked)));
    } else if (e.target.checked && newStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt).getTime() >= new Date(firstDate).setHours(new Date(firstDate).getHours() - 1) &&
        new Date(a.createdAt).getTime() <= new Date(lastDate).setHours(new Date(lastDate).getHours() - 1) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant !== "" &&
        (a.status === checked || a.status === latestNewStatus)));
    } else if (e.target.checked && inProgressStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt).getTime() >= new Date(firstDate).setHours(new Date(firstDate).getHours() - 1) &&
        new Date(a.createdAt).getTime() <= new Date(lastDate).setHours(new Date(lastDate).getHours() - 1) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant !== "" &&
        (a.status === checked || a.status === latestInProgressStatus)));
    } else if (e.target.checked) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt).getTime() >= new Date(firstDate).setHours(new Date(firstDate).getHours() - 1) &&
        new Date(a.createdAt).getTime() <= new Date(lastDate).setHours(new Date(lastDate).getHours() - 1) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant !== "" &&
        (a.status === checked)));
    } else if (merchantArray.some(isValidMerchant) && !e.target.checked && newStatus && inProgressStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt).getTime() >= new Date(firstDate).setHours(new Date(firstDate).getHours() - 1) &&
        new Date(a.createdAt).getTime() <= new Date(lastDate).setHours(new Date(lastDate).getHours() - 1) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant === latestMerchant &&
        (a.status === latestNewStatus || a.status === latestInProgressStatus)));
    } else if (merchantArray.some(isValidMerchant) && !e.target.checked && newStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt).getTime() >= new Date(firstDate).setHours(new Date(firstDate).getHours() - 1) &&
        new Date(a.createdAt).getTime() <= new Date(lastDate).setHours(new Date(lastDate).getHours() - 1) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant === latestMerchant &&
        (a.status === latestNewStatus)));
    } else if (merchantArray.some(isValidMerchant) && !e.target.checked && inProgressStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt).getTime() >= new Date(firstDate).setHours(new Date(firstDate).getHours() - 1) &&
        new Date(a.createdAt).getTime() <= new Date(lastDate).setHours(new Date(lastDate).getHours() - 1) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant === latestMerchant &&
        (a.status === latestInProgressStatus)));
    } else if (!e.target.checked && newStatus && inProgressStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt).getTime() >= new Date(firstDate).setHours(new Date(firstDate).getHours() - 1) &&
        new Date(a.createdAt).getTime() <= new Date(lastDate).setHours(new Date(lastDate).getHours() - 1) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant !== "" &&
        (a.status === latestNewStatus || a.status === latestInProgressStatus)));
    } else if (merchantArray.some(isValidMerchant) && !e.target.checked) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt).getTime() >= new Date(firstDate).setHours(new Date(firstDate).getHours() - 1) &&
        new Date(a.createdAt).getTime() <= new Date(lastDate).setHours(new Date(lastDate).getHours() - 1) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant === latestMerchant));
    } else if (!e.target.checked && newStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt).getTime() >= new Date(firstDate).setHours(new Date(firstDate).getHours() - 1) &&
        new Date(a.createdAt).getTime() <= new Date(lastDate).setHours(new Date(lastDate).getHours() - 1) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant !== "" &&
        (a.status === latestNewStatus)));
    } else if (!e.target.checked && inProgressStatus) {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt).getTime() >= new Date(firstDate).setHours(new Date(firstDate).getHours() - 1) &&
        new Date(a.createdAt).getTime() <= new Date(lastDate).setHours(new Date(lastDate).getHours() - 1) &&
        a.total >= latestMin &&
        a.total <= latestMax &&
        a.merchant !== "" &&
        (a.status === latestInProgressStatus)));
    } else {
      setExpenses(() => employeeExpenses.filter((a) => new Date(a.createdAt).getTime() >= new Date(firstDate).setHours(new Date(firstDate).getHours() - 1) &&
        new Date(a.createdAt).getTime() <= new Date(lastDate).setHours(new Date(lastDate).getHours() - 1) &&
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
    setNewStatus(true);
    setInProgressStatus(true);
    setReimbursedStatus(true);
    setExpenses(() => employeeExpenses)
  }

  const sortDate = () => {
    // When Date is clicked in an attempt to sort it,
    // call necessary state variables and
    // display the components that show other <th> with neutral icons
    setMerchantSort(3);
    setTotalSort(6);
    setStatusSort(9);
    setCommentSort(12);

    // For date:
    // 0, 1, 2 -> ascending, descending, neutral
    // for all others:
    // x, x+1, x+2 -> neutral, ascending, descending

    dateSort === 0 ? setDateSort(1)
      : dateSort === 1 ? setDateSort(2)
        : setDateSort(0);

    dateSort === 0 ? setExpenses(() => expenses.sort(
    // sort descending
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt).getTime()
    ))
      : dateSort === 1 ? setExpenses(() => expenses)
        : setExpenses(() => expenses.sort(
        // sort ascending
          (a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt)
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

  const handleReceipt = () => {
    const input = document.querySelector('.receipt-uploads');
    const preview = document.querySelector('.preview');

    // https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types
    const fileTypes = [
      "image/apng",
      "image/bmp",
      "image/gif",
      "image/jpeg",
      "image/pjpeg",
      "image/png",
      "image/svg+xml",
      "image/tiff",
      "image/webp",
      "image/x-icon"
    ];

    const validFileType = (file) => {
      return fileTypes.includes(file.type);
    }

    const updateImageDisplay = () => {

      while (preview.firstChild) {
        preview.removeChild(preview.firstChild);
      }

      const curFiles = input.files;
      if (curFiles.length === 0) {
        const para = document.createElement('p');
        para.textContent = 'No files currently selected for upload';
        preview.appendChild(para);
      } else {
        const para = document.createElement('p');
        

        for (const file of curFiles) {
          if (validFileType(file)) {
            const image = document.createElement('img');
            image.src = URL.createObjectURL(file);
            image.className = "receipt";
            preview.appendChild(image);
          } else {
            const receiptItem = document.createElement('div');
            preview.appendChild(receiptItem);
            para.textContent = `File name ${file.name}: Not a valid file type. Update your selection.`;
            receiptItem.appendChild(para);
          }
        }
      }
    }

    input.addEventListener('change', updateImageDisplay);
  }

  const myForm = (
    <form>
      <div className='mt-3 d-none d-lg-block'>
        <div className="small d-flex justify-content-between">
          <span>Filter Expenses</span>
          <button type="button" onClick={clearFilters} className="text-primary btn-unstyled">Clear Filters</button>
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
      <div className="d-flex d-lg-none justify-content-between mt-3 mb-3">
        <button type="button" onClick={clearFilters} className="text-primary bg-grey" style={{ borderStyle: "none", backgroundColor: "inherit", }}>
          Clear Filters
        </button>
        <button type="button" className="btn btn-light text-primary btn-grey" data-bs-toggle="collapse" data-bs-target="#collapsibleForm">
          Done
        </button>
      </div>
    </form>
  );

  const myTable = (
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
        {expenses.map((a) => {
          return (
            <tr key={a.id}>
              <td>{a.createdAt}</td>
              <td>{a.merchant}</td>
              <td>${a.total}</td>
              {a.status === "Reimbursed"
                ? <td className="reimbursed-status">{a.status}</td> : a.status === "New"
                  ? <td className="new-status">{a.status}</td> : <td className="inprogress-status">{a.status}</td>}
              {/* <td>{a.status}</td> */}
              <td>{a.comment}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );

  


  return (
    <div className='container-fluid mt-70'>
      {/* Show on Mobile Devices and other Small Screens */}
      <div className="d-lg-none">
        <div className="row text-start">
          <div className="d-flex justify-content-between bg-grey py-1">
            <div className="col ">
              <small>To be reimbursed</small>
              <br />
              ${
                employeeExpenses.filter(
                  (a) => a.status === "New"
                ).reduce((x, y) => x + y.total, 0).toFixed(2)
              }
            </div>
            <div className="col text-end text-primary mt-3 navbar-toggler" data-bs-toggle="collapse" data-bs-target="#collapsibleForm">
              Filters <FontAwesomeIcon icon={faBars} />
            </div>
          </div> 
          <div className="collapse navbar-collapse bg-grey" id="collapsibleForm">
            {myForm}
          </div>
        </div>
        <div className="row">
          <div className="table-responsive">
            {myTable}
          </div>
        </div>
      </div>

      {/* Show on Large Screens */}
      <div className='row text-start'>
        <div className='col-3 d-none d-lg-block'>
           {myForm}   
        </div>
        <div className='col-lg-7 d-none d-lg-table'>
          <div className="table-responsive">
            {myTable}
            <span className="bottom-right pointer-cursor" onClick={() => {
              setShowAddExpenseModal(true);
            }}>
              <FontAwesomeIcon icon={faCirclePlus} />
            </span>
            <AddExpenseModal isOpen={showAddExpenseModal}>
              <form encType="multipart/form-data">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-6">
                      <div className="h3">Add Expense</div>
                      
                        <div>
                          <label className='form-label mt-3'>
                            Merchant
                            <input list="merchants" className="form-control" />
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
                            </label>
                        </div>
                        <div className="">
                          <label className='form-label mt-3'>
                            Total
                            <input type="number" className='form-control' />
                          </label>
                        </div>
                        <div>
                          <label className='form-label mt-3'>
                            Date
                            <input type="date" className='form-control' />
                          </label>
                        </div>
                        <div>
                          <label className='form-label mt-3'>
                            Comment
                            <textarea rows="4" className='form-control' />
                          </label>
                        </div>
                        
                        <button type="submit" className="btn btn-primary me-3">Save</button>
                        <button type="button" className="btn btn-light text-primary" onClick={() => {
                          setShowAddExpenseModal(false);
                        }}>Cancel</button>
                      
                    </div>
                    <div className="col-6 receipt-col">
                      <div className="row">
                        <label onClick={handleReceipt} className="btn btn-light text-primary mt-3 receipt-btn"> Select receipt
                          <input type="file" className="receipt-uploads" />
                        </label> 
                      </div>
                      <div className="row preview"></div>
                    </div>
                  </div>
                </div>
              </form>
            </AddExpenseModal>
          </div>         
             
        </div>
        <div className='col-2 d-none d-lg-block'>
          <div className='pt-2'>
            <small>To be reimbursed</small>
            <hr />
          </div>
          <div className="h2 py-5 text-center">
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
        <nav className="navbar bg-dark navbar-dark py-3 pos-fixed">
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
