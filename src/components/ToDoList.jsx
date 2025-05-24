import { useState, useContext } from 'react';
import {
  faPlus,
  faTrash,
  faCheck,
  faTimes,
  faSearch,
  faStar,
  faEdit,
  faSave,
  faTag,
  faCalendarAlt,
  faClipboardList,
} from '@fortawesome/free-solid-svg-icons';
import { TasksContext } from '../contexts/TasksContext';
import ConfirmationModal from './ConfirmationModal';
import Button from './common/Button';
import Input from './common/Input';
import Card from './common/Card';
import StatsCard from './common/StatsCard';
import Checkbox from './common/Checkbox';
import IconButton from './common/IconButton';
import AddTaskForm from './AddTaskForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ToDoList() {
  const {
    tasks,
    addTask,
    toggleTaskCompletion,
    deleteTask,
    deleteDoneTasks,
    deleteAllTasks,
    updateTask,
    filter,
    setFilter,
    sortBy,
    setSortBy,
    searchQuery,
    setSearchQuery,
    taskStats,
  } = useContext(TasksContext);
  const [showModal, setShowModal] = useState(false);
  const [modalConfig, setModalConfig] = useState(null);
  const [editingTask, setEditingTask] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);

  const handleAddTask = (taskData) => {
    addTask(taskData.text.trim(), {
      priority: taskData.priority,
      category: taskData.category,
      dueDate: taskData.dueDate,
    });
    setShowAddForm(false);
  };

  const handleEdit = (task) => {
    setEditingTask({ ...task });
  };

  const handleSaveEdit = () => {
    if (editingTask && editingTask.text.trim()) {
      updateTask(editingTask.id, editingTask);
      setEditingTask(null);
    }
  };

  const handleTogglePriority = (task) => {
    const newPriority = task.priority === 'high' ? 'medium' : 'high';
    updateTask(task.id, { ...task, priority: newPriority });
  };

  const handleDelete = (action) => {
    switch (action) {
      case 'done':
        setModalConfig({
          title: 'Delete Completed Tasks',
          message: 'Are you sure you want to delete all completed tasks?',
          onConfirm: () => {
            deleteDoneTasks();
            setShowModal(false);
          },
        });
        break;
      case 'all':
        setModalConfig({
          title: 'Delete All Tasks',
          message: 'Are you sure you want to delete all tasks? This action cannot be undone.',
          onConfirm: () => {
            deleteAllTasks();
            setShowModal(false);
          },
        });
        break;
      default:
        setModalConfig({
          title: 'Delete Task',
          message: 'Are you sure you want to delete this task?',
          onConfirm: () => {
            deleteTask(action);
            setShowModal(false);
          },
        });
    }
    setShowModal(true);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatsCard
          title="Total Tasks"
          value={taskStats.total}
          colorScheme="blue"
        />
        <StatsCard
          title="Completed"
          value={taskStats.completed}
          colorScheme="green"
        />
        <StatsCard
          title="Active"
          value={taskStats.active}
          colorScheme="yellow"
        />
        <StatsCard
          title="High Priority"
          value={taskStats.highPriority}
          colorScheme="red"
        />
      </div>

      <Card className="mb-8 animate-slide-in">
        <div className="flex flex-wrap gap-4 items-center">
          <div className="flex-1 min-w-[200px]">
            <Input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search tasks..."
              icon={faSearch}
            />
          </div>
          <div className="flex gap-2">
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            >
              <option value="all">All Tasks</option>
              <option value="active">Active</option>
              <option value="completed">Completed</option>
              <option value="high">High Priority</option>
            </select>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            >
              <option value="createdAt">Date Created</option>
              <option value="priority">Priority</option>
              <option value="text">Alphabetical</option>
            </select>
          </div>
        </div>
      </Card>

      {tasks.length === 0 ? (
        <Card className="text-center py-12 animate-fade-in">
          <FontAwesomeIcon
            icon={faClipboardList}
            className="text-6xl text-gray-400 mb-4 empty-state"
          />
          <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-300 mb-2">
            No tasks yet
          </h3>
          <p className="text-gray-500 dark:text-gray-400">
            Add a new task to get started!
          </p>
        </Card>
      ) : (
        <div className="space-y-4">
          {tasks.map((task) => (
            <Card
              key={task.id}
              className={`task-card ${task.priority === 'high' ? 'border-l-4 border-red-500' : ''
                }`}
            >
              <div className="flex items-center gap-4">
                <Checkbox
                  checked={task.completed}
                  onChange={() => toggleTaskCompletion(task.id)}
                />
                <div className="flex-1">
                  {editingTask?.id === task.id ? (
                    <input
                      type="text"
                      value={editingTask.text}
                      onChange={(e) =>
                        setEditingTask({ ...editingTask, text: e.target.value })
                      }
                      className="w-full px-2 py-1 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                      autoFocus
                    />
                  ) : (
                    <p
                      className={`text-gray-900 dark:text-gray-100 ${task.completed ? 'line-through text-gray-500' : ''
                        }`}
                    >
                      {task.text}
                    </p>
                  )}
                  {(task.category || task.dueDate) && (
                    <div className="mt-1 flex gap-2 text-sm text-gray-500 dark:text-gray-400">
                      {task.category && (
                        <span className="flex items-center gap-1">
                          <FontAwesomeIcon icon={faTag} className="text-xs" />
                          {task.category}
                        </span>
                      )}
                      {task.dueDate && (
                        <span className="flex items-center gap-1">
                          <FontAwesomeIcon icon={faCalendarAlt} className="text-xs" />
                          {new Date(task.dueDate).toLocaleDateString()}
                        </span>
                      )}
                    </div>
                  )}
                </div>
                <div className="flex gap-2">
                  {editingTask?.id === task.id ? (
                    <IconButton
                      icon={faSave}
                      variant="success"
                      size="sm"
                      onClick={handleSaveEdit}
                      tooltip="Save changes"
                    />
                  ) : (
                    <>
                      <IconButton
                        icon={task.completed ? faTimes : faCheck}
                        variant={task.completed ? 'secondary' : 'complete'}
                        size="sm"
                        onClick={() => toggleTaskCompletion(task.id)}
                        tooltip={task.completed ? 'Mark as incomplete' : 'Mark as complete'}
                      />
                      <IconButton
                        icon={faStar}
                        variant={task.priority === 'high' ? 'warning' : 'ghost'}
                        size="sm"
                        onClick={() => handleTogglePriority(task)}
                        tooltip={task.priority === 'high' ? 'Remove high priority' : 'Set high priority'}
                      />
                      <IconButton
                        icon={faEdit}
                        variant="edit"
                        size="sm"
                        onClick={() => handleEdit(task)}
                        tooltip="Edit task"
                      />
                      <IconButton
                        icon={faTrash}
                        variant="delete"
                        size="sm"
                        onClick={() => handleDelete(task.id)}
                        tooltip="Delete task"
                      />
                    </>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}

      {tasks.length > 0 && (
        <div className="mt-8 flex justify-end gap-2 animate-fade-in">
          <Button
            variant="danger"
            icon={faTrash}
            onClick={() => handleDelete('done')}
          >
            Delete Completed
          </Button>
          <Button
            variant="danger"
            icon={faTrash}
            onClick={() => handleDelete('all')}
          >
            Delete All
          </Button>
        </div>
      )}

      {showModal && modalConfig && (
        <ConfirmationModal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          {...modalConfig}
        />
      )}

      {showAddForm && (
        <AddTaskForm
          onAddTask={handleAddTask}
          onClose={() => setShowAddForm(false)}
        />
      )}

      <button
        onClick={() => setShowAddForm(true)}
        className="fixed bottom-8 right-8 w-14 h-14 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 animate-bounce-in"
      >
        <FontAwesomeIcon icon={faPlus} className="text-2xl" />
      </button>
    </div>
  );
}
