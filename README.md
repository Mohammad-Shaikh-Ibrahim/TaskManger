# ASAL To-Do List

A modern, feature-rich To-Do List application built with React and Tailwind CSS. This application provides a beautiful and intuitive interface for managing your tasks with advanced features like task prioritization, categorization, and filtering.

## Features

- ✨ Modern and responsive UI with dark mode support
- 📱 Mobile-friendly design
- 🎨 Beautiful animations and transitions
- 📊 Task statistics dashboard
- 🔍 Advanced search and filtering capabilities
- 📅 Due date management
- 🏷️ Task categorization
- ⭐ Priority levels (High, Medium, Low)
- 🔄 Task sorting options
- 💾 Local storage persistence
- 🎯 Task completion tracking
- 🗑️ Bulk delete operations

## Tech Stack

- React.js
- Tailwind CSS
- FontAwesome Icons
- Context API for state management
- Local Storage for data persistence

## Project Structure

```
src/
├── components/
│   ├── common/
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   ├── Checkbox.jsx
│   │   ├── IconButton.jsx
│   │   ├── Input.jsx
│   │   └── StatsCard.jsx
│   ├── AddTaskForm.jsx
│   ├── ConfirmationModal.jsx
│   ├── ThemeToggle.jsx
│   └── ToDoList.jsx
├── contexts/
│   ├── TasksContext.jsx
│   └── ThemeContext.jsx
├── styles/
│   └── index.css
└── App.jsx
```

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/Mohammad-Shaikh-Ibrahim/ASAL_To_Do_List.git
   ```

2. Install dependencies:
   ```bash
   cd ASAL_To_Do_List
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Usage

### Adding Tasks
- Click the "+" button in the bottom right corner
- Fill in the task details:
  - Task description
  - Priority level
  - Due date (optional)
  - Category (optional)
- Click "Add Task" to save

### Managing Tasks
- Mark tasks as complete/incomplete using the checkbox
- Set high priority using the star icon
- Edit task details using the edit button
- Delete individual tasks using the trash icon
- Use the search bar to find specific tasks
- Filter tasks by status or priority
- Sort tasks by creation date, priority, or alphabetically

### Bulk Operations
- Delete all completed tasks
- Delete all tasks
- View task statistics in the dashboard

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [FontAwesome](https://fontawesome.com/)
