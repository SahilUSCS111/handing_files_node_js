const fs = require('fs');
const filePath = "./tasks.json";

// Function to load tasks from the file
const loadTasks = () => {
    try {
        const dataBuffer = fs.readFileSync(filePath);
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (error) {
        return []; // Return an empty array if there's an error (e.g., file doesn't exist)
    }
}

// Function to save tasks to the file
const saveTasks = (tasks) => {
    const dataJSON = JSON.stringify(tasks, null, 2); // Pretty-print JSON
    fs.writeFileSync(filePath, dataJSON);
    console.log("Task added"+ dataJSON);
}

// Function to add a task
const addTask = (task) => {
    const tasks = loadTasks();
    tasks.push({ task }); // Push the task as an object with a 'task' key
    saveTasks(tasks);
}

// Function to list all tasks
const listTasks = () => {
    const tasks = loadTasks();
    if (tasks.length === 0) {
        console.log("No tasks found.");
    } else {
        tasks.forEach((task, index) => {
            console.log(`${index + 1}. ${task.task}`);
        });
    }
}

// Function to remove a task by index
const removeTask = (index) => {
    const tasks = loadTasks();
    if (index < 0 || index >= tasks.length) {
        console.log("Task not found.");
    } else {
        tasks.splice(index, 1); // Remove the task at the given index
        saveTasks(tasks);
        console.log("Task removed.");
    }
}

// Command handling
const command = process.argv[2];
const argument = process.argv[3];

if (command === 'add') {
    if (argument) {
        addTask(argument);
    } else {
        console.log("Please provide a task to add.");
    }
} else if (command === "list") {
    listTasks();
} else if (command === 'remove') {
    if (argument && !isNaN(argument)) {
        removeTask(parseInt(argument) - 1); // Subtract 1 to match the array index (1-based index for user)
    } else {
        console.log("Please provide a valid task number to remove.");
    }
} else {
    console.log("Command not found!");
}
