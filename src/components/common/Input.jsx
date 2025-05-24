import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Input({
    type = 'text',
    label,
    icon,
    error,
    className = '',
    ...props
}) {
    const baseClasses = 'w-full p-2 border rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400';
    const stateClasses = error
        ? 'border-red-500 dark:border-red-500 bg-red-50 dark:bg-red-900/20'
        : 'border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800';
    const iconClasses = icon ? 'pl-10' : '';

    return (
        <div className="w-full">
            {label && (
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    {label}
                </label>
            )}
            <div className="relative">
                {icon && (
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                        <FontAwesomeIcon icon={icon} />
                    </div>
                )}
                <input
                    type={type}
                    className={`${baseClasses} ${stateClasses} ${iconClasses} ${className}`}
                    {...props}
                />
            </div>
            {error && (
                <p className="mt-1 text-sm text-red-500 dark:text-red-400">{error}</p>
            )}
        </div>
    );
}

Input.propTypes = {
    type: PropTypes.string,
    label: PropTypes.string,
    icon: PropTypes.object,
    error: PropTypes.string,
    className: PropTypes.string,
}; 