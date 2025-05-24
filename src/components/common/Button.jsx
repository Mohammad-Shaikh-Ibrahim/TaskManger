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
};

const sizes = {
    sm: 'px-2 py-1 text-sm',
    md: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg',
};

export default function Button({
    children,
    variant = 'primary',
    size = 'md',
    icon,
    iconPosition = 'left',
    className = '',
    ...props
}) {
    const baseClasses = 'rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed';
    const variantClasses = variants[variant] || variants.primary;
    const sizeClasses = sizes[size] || sizes.md;
    const iconClasses = icon ? 'flex items-center gap-2' : '';

    const content = (
        <>
            {icon && iconPosition === 'left' && <FontAwesomeIcon icon={icon} />}
            {children}
            {icon && iconPosition === 'right' && <FontAwesomeIcon icon={icon} />}
        </>
    );

    return (
        <button
            className={`${baseClasses} ${variantClasses} ${sizeClasses} ${iconClasses} ${className}`}
            {...props}
        >
            {content}
        </button>
    );
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    variant: PropTypes.oneOf(Object.keys(variants)),
    size: PropTypes.oneOf(Object.keys(sizes)),
    icon: PropTypes.object,
    iconPosition: PropTypes.oneOf(['left', 'right']),
    className: PropTypes.string,
}; 