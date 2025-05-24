import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { ThemeContext } from '../contexts/ThemeContext';
import '../styles/ThemeToggle.css';

export function ThemeToggle() {
    const { isDarkMode, toggleTheme } = useContext(ThemeContext);

    return (
        <button
            onClick={toggleTheme}
            className="theme-toggle"
            aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
            <FontAwesomeIcon
                icon={isDarkMode ? faSun : faMoon}
                className="theme-icon"
            />
        </button>
    );
} 