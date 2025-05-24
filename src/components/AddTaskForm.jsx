import { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardList, faTimes } from '@fortawesome/free-solid-svg-icons';
import Card from './common/Card';
import Input from './common/Input';
import IconButton from './common/IconButton';

export default function AddTaskForm({ onAddTask, onClose }) {
    const [taskData, setTaskData] = useState({
        text: '',
        priority: 'medium',
        category: '',
        dueDate: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (taskData.text.trim()) {
            onAddTask(taskData);
            setTaskData({
                text: '',
                priority: 'medium',
                category: '',
                dueDate: '',
            });
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 animate-fade-in">
            <Card className="w-full max-w-md mx-4 animate-bounce-in">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                        Add New Task
                    </h2>
                    <IconButton
                        icon={faTimes}
                        variant="ghost"
                        size="sm"
                        onClick={onClose}
                        tooltip="Close"
                    />
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <Input
                        type="text"
                        value={taskData.text}
                        onChange={(e) => setTaskData({ ...taskData, text: e.target.value })}
                        placeholder="What needs to be done?"
                        icon={faClipboardList}
                        autoFocus
                        className="bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
                    />
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                Priority
                            </label>
                            <select
                                value={taskData.priority}
                                onChange={(e) => setTaskData({ ...taskData, priority: e.target.value })}
                                className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                            >
                                <option value="low">Low</option>
                                <option value="medium">Medium</option>
                                <option value="high">High</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                Due Date
                            </label>
                            <input
                                type="date"
                                value={taskData.dueDate}
                                onChange={(e) => setTaskData({ ...taskData, dueDate: e.target.value })}
                                className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Category
                        </label>
                        <input
                            type="text"
                            value={taskData.category}
                            onChange={(e) => setTaskData({ ...taskData, category: e.target.value })}
                            placeholder="Add a category (optional)"
                            className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                        />
                    </div>
                    <div className="flex justify-end gap-2">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                        >
                            Add Task
                        </button>
                    </div>
                </form>
            </Card>
        </div>
    );
}

AddTaskForm.propTypes = {
    onAddTask: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
}; 