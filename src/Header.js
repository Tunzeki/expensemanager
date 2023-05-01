import { useState } from 'react';
import Switch from './Switch';
import AddExpenseModal from './AddExpenseModal';

export default function Header() {
    const [showInfoModal, setShowInfoModalModal] = useState(false);

    const handleInfoModal = () => {
        setShowInfoModalModal(!showInfoModal);
    }

    return (
        <nav className="navbar bg-dark navbar-dark py-3 pos-fixed">
            <div className="header-flex-container">
                <span className="navbar-brand" style={{ paddingLeft: "10px" }}>Expense Manager</span>
                <div className="btn-flex-container">
                    <button type="button" className="btn btn-secondary text-primary me-3 navbar-btn" onClick={handleInfoModal}>
                        INFO
                    </button>
                    <button type="button" className="btn btn-secondary text-primary navbar-btn">LOGOUT</button>
                    <Switch />
                </div>   
            </div>
            <AddExpenseModal isOpen={showInfoModal}>
                <div className="container-fluid">
                    <div className="text-center">
                        <div className="">
                            <div className="h3">Welcome to Expense Manager</div>
                            <div className="h5">I'm Babatunde Ademusire</div>
                            <p>This application is a clone of <a target="_blank" rel="noreferrer" href="https://expensemanager.demo.vaadin.com/">this demo</a>, which I have customized as I saw fit.</p>
                            <p>You can search the table using the form. You can also sort the table by the table header of each column</p>
                            <p>Unlike the original project which was built using Polymer, I built this using React.
                                You can find my source code and fork the project on <a target="_blank" rel="noreferrer" href="https://github.com/Tunzeki/expensemanager">GitHub</a>.</p>
                            <button type="button" className="btn btn-primary" onClick={handleInfoModal}>Got it!</button>
                        </div>
                    </div>
                </div>
            </AddExpenseModal>
        </nav>
    );
}