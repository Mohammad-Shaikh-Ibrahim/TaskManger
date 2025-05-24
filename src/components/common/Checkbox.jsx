import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

export default function Checkbox({ checked, onChange, className = '', ...props }) {
    return (
        <div className="relative">
            <input
                type="checkbox"
                checked={checked}
                onChange={onChange}
                className="sr-only"
                {...props}
            />
            <div
                className={`w-6 h-6 rounded-md border-2 transition-all duration-200 cursor-pointer
          ${checked
                        ? 'bg-blue-500 border-blue-500 dark:bg-blue-600 dark:border-blue-600'
                        : 'border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-500'
                    }
          ${className}`}
            >
                {checked && (
                    <FontAwesomeIcon
                        icon={faCheck}
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white animate-scale-in"
                    />
                )}
            </div>
        </div>
    );
}

Checkbox.propTypes = {
    checked: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
    className: PropTypes.string,
}; 