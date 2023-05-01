import { useTheme } from './ThemeContext';
import './App.css';
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
            {theme === "light" ? <FontAwesomeIcon icon={faMoon} /> : <FontAwesomeIcon icon={faSun} /> } 
        </label>
    );
};

export default Switch;