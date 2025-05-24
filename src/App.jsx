import { TasksProvider } from './contexts/TasksContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { ThemeToggle } from './components/ThemeToggle';
import ToDoList from './components/ToDoList';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <TasksProvider>
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
          <ThemeToggle />
          <ToDoList />
        </div>
      </TasksProvider>
    </ThemeProvider>
  );
}

export default App;
