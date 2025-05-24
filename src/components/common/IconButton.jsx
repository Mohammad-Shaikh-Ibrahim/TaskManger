import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const variants = {
    primary: 'bg-blue-500 hover:bg-blue-600 text-white',
    secondary: 'bg-gray-500 hover:bg-gray-600 text-white',
    success: 'bg-green-500 hover:bg-green-600 text-white',
    danger: 'bg-red-500 hover:bg-red-600 text-white',
    warning: 'bg-yellow-500 hover:bg-yellow-600 text-white',
    info: 'bg-blue-400 hover:bg-blue-500 text-white',
    ghost: 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700',
    edit: 'text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/50',
    delete: 'text-red-500 hover:bg-red-50 dark:hover:bg-red-900/50',
    complete: 'text-green-500 hover:bg-green-50 dark:hover:bg-green-900/50',
};

const sizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
};

export default function IconButton({
    icon,
    variant = 'primary',
    size = 'md',
    className = '',
    onClick,
    disabled = false,
    tooltip,
    ...props
}) {
    const baseClasses = 'rounded-full transition-all duration-200 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed';
    const variantClasses = variants[variant] || variants.primary;
    const sizeClasses = sizes[size] || sizes.md;

    return (
        <button
            className={`${baseClasses} ${variantClasses} ${sizeClasses} ${className}`}
            onClick={onClick}
            disabled={disabled}
            title={tooltip}
            {...props}
        >
            <FontAwesomeIcon icon={icon} className="text-lg" />
        </button>
    );
}

IconButton.propTypes = {
    icon: PropTypes.object.isRequired,
    variant: PropTypes.oneOf(Object.keys(variants)),
    size: PropTypes.oneOf(Object.keys(sizes)),
    className: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    tooltip: PropTypes.string,
}; 