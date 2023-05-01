import { useTheme } from './ThemeContext';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

const Switch = () => {
    const { theme, toggleTheme } = useTheme();
    return (
        <label className="switch">
            <input
                type="checkbox"
                checked={theme === "light"}
                onChange={toggleTheme}
            />
            {theme === "light" ? <FontAwesomeIcon style={{ color: "white", paddingLeft: "10px", paddingTop: "13px" }} icon={faMoon} />
                : <FontAwesomeIcon style={{ color: "white", paddingLeft: "10px", paddingTop: "13px" }} icon={faSun} />} 
        </label>
    );
};

export default Switch;