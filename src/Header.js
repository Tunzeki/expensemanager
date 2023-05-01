import Switch from './Switch';

export default function Header() {
    return (
        <nav className="navbar bg-dark navbar-dark py-3 pos-fixed">
            <div className="header-flex-container">
                <span className="navbar-brand" style={{ paddingLeft: "10px" }}>Expense Manager</span>
                <div className="btn-flex-container">
                    <button type="button" className="btn btn-secondary text-primary me-3 navbar-btn">INFO</button>
                    <button type="button" className="btn btn-secondary text-primary navbar-btn">LOGOUT</button>
                    <Switch />
                </div>
                
            </div>
        </nav>
    );
}