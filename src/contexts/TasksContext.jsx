import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const TasksContext = createContext();

export function TasksProvider({ children }) {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [filter, setFilter] = useState('all');
  const [sortBy, setSortBy] = useState('createdAt');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text, options = {}) => {
    const newTask = {
      id: Date.now().toString(),
      text,
      completed: false,
      priority: options.priority || 'medium',
      category: options.category || '',
      dueDate: options.dueDate || '',
      createdAt: new Date().toISOString(),
    };
    setTasks(prev => [...prev, newTask]);
  };

  const toggleTaskCompletion = (id) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  };

  const deleteDoneTasks = () => {
    setTasks(prev => prev.filter(task => !task.completed));
  };

  const deleteAllTasks = () => {
    setTasks([]);
  };

  const updateTask = (id, updatedTask) => {
    setTasks(prev =>
      prev.map(task => (task.id === id ? { ...task, ...updatedTask } : task))
    );
  };

  const filteredTasks = tasks
    .filter(task => {
      if (filter === 'active') return !task.completed;
      if (filter === 'completed') return task.completed;
      if (filter === 'high') return task.priority === 'high';
      return true;
    })
    .filter(task =>
      task.text.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === 'createdAt') {
        return new Date(b.createdAt) - new Date(a.createdAt);
      }
      if (sortBy === 'priority') {
        const priorityOrder = { high: 0, medium: 1, low: 2 };
        return priorityOrder[a.priority] - priorityOrder[b.priority];
      }
      if (sortBy === 'text') {
        return a.text.localeCompare(b.text);
      }
      return 0;
    });

  const taskStats = {
    total: tasks.length,
    completed: tasks.filter(task => task.completed).length,
    active: tasks.filter(task => !task.completed).length,
    highPriority: tasks.filter(task => task.priority === 'high').length,
  };

  return (
    <TasksContext.Provider
      value={{
        tasks: filteredTasks,
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
      }}
    >
      {children}
    </TasksContext.Provider>
  );
}

TasksProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
