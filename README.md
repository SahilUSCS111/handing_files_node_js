Task Manager README

This is a simple task manager built using Node.js that allows you to manage your tasks through the command line. The application uses a JSON file to store the tasks and provides commands to add, list, and remove tasks.
Features

    Add a Task: Allows you to add a new task to your task list.
    List Tasks: Displays all your tasks in a numbered list.
    Remove a Task: Lets you remove a task by specifying its index (1-based index for users).

Installation

    Clone this repository to your local machine:

git clone <repository_url>

Navigate into the project folder:

cd <project_folder>

Ensure you have Node.js installed. If not, you can install it from here.

Install the required dependencies:

    npm install

Usage

The task manager works via the command line and takes three commands:

    Add a Task: To add a task, run the following command:

node <script_name.js> add "<task_description>"

Example:

node taskManager.js add "Buy groceries"

List All Tasks: To list all tasks, run the following command:

node <script_name.js> list

Example output:

1. Buy groceries
2. Complete homework

Remove a Task: To remove a task, provide the task number (1-based index):

node <script_name.js> remove <task_number>

Example:

    node taskManager.js remove 1

    This will remove the first task in the list.

File Storage

The tasks are stored in a file named tasks.json. If the file doesn't exist, the program will automatically create it. The tasks are stored as an array of objects, with each task having a task key.

Example tasks.json:

[
  { "task": "Buy groceries" },
  { "task": "Complete homework" }
]

Error Handling

    If a task is removed using an invalid index (out of range), an error message will be displayed: "Task not found."
    If no task description is provided when adding a task, a message will prompt the user to provide one: "Please provide a task to add."
    If an invalid command is given, the message "Command not found!" will be displayed.
