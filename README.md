# About the Project

This task manager app features a clean and straightforward user interface, offering essential functionalities such as adding, deleting, and marking tasks as complete with a checkmark. Due to integration with a JSON server, which allows tasks to be stored persistently. Even if the server is shut down, your tasks remain safely stored, ensuring that you can access and manage them whenever needed.

### To run project

Need to have installed git bash (if windows)

1. Navigate to the project directory and execute `npm install` to install all dependencies.

2. To start the application, simply execute `npm start` in the terminal.

The application will be running at `http://localhost:3000`.

## Features

- **Add Task**: Click the "Add Task" button to open the form and add a new task.
- **Delete Task**: Click the delete icon on a task to remove it from the list.
- **Toggle Reminder**: Click on a task to toggle the reminder setting.
- **Toggle Completed**: Click on a task's checkbox to mark it as completed or not completed.

## Project Structure

- `App.js`: The main component that sets up the routes and manages the state for the tasks.
- `components/Header.js`: The header component that includes the "Add Task" button.
- `components/Tasks.js`: The component that renders the list of tasks.
- `components/AddTask.js`: The form component to add a new task.
- `components/About.js`: The about page component.
- `Footer.js`: The footer component.

## Configuration

This application does not require any additional configuration or environment variables to run.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Hat tip to anyone whose code was used.
- Inspiration.
- etc.
