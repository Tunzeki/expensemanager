import Switch from './Switch';

export default function Header() {
    return (
        <nav className="navbar bg-dark navbar-dark py-3 pos-fixed">
            <div className="container-fluid">
                <span className="navbar-brand">Expense Manager</span>
                <div>
                    <button type="button" className="btn btn-secondary text-primary me-3 navbar-btn">INFO</button>
                    <button type="button" className="btn btn-secondary text-primary navbar-btn">LOGOUT</button>
                </div>
                <Switch />
            </div>
        </nav>
    );
}