import PropTypes from 'prop-types';

export default function StatsCard({ title, value, colorScheme = 'blue', className = '' }) {
    const colorClasses = {
        blue: 'bg-blue-500 dark:bg-blue-600',
        green: 'bg-green-500 dark:bg-green-600',
        yellow: 'bg-yellow-500 dark:bg-yellow-600',
        purple: 'bg-purple-500 dark:bg-purple-600',
        red: 'bg-red-500 dark:bg-red-600',
    };

    return (
        <div className={`p-4 rounded-lg shadow-md ${colorClasses[colorScheme]} ${className}`}>
            <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
            <p className="text-3xl font-bold text-white">{value}</p>
        </div>
    );
}

StatsCard.propTypes = {
    title: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    colorScheme: PropTypes.oneOf(['blue', 'green', 'yellow', 'purple', 'red']),
    className: PropTypes.string,
}; 