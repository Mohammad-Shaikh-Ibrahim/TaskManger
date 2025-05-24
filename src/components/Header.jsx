import { useContext } from 'react';
import { TasksContext } from './TasksContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListCheck } from '@fortawesome/free-solid-svg-icons';

function Header() {
  const { taskStats } = useContext(TasksContext);

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm">
      <div className="max-w-4xl mx-auto p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <FontAwesomeIcon icon={faListCheck} className="text-3xl text-blue-500" />
            <h1 className="text-2xl font-bold">Task Manager</h1>
          </div>
          <div className="text-sm text-gray-500">
            {taskStats.completed} of {taskStats.total} tasks completed
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
