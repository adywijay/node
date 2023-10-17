const fs = require('fs');

const loadTasks = () => {
    try {
        const tasks = fs.readFileSync('tasks.json');
        return JSON.parse(tasks);
    } catch (error) {
        return [];
    }
};

const saveTasks = (tasks) => {
    fs.writeFileSync('tasks.json', JSON.stringify(tasks));
};

const listTasks = () => {
    const tasks = loadTasks();
    tasks.forEach((task, index) => {
        console.log(`${index + 1}. ${task}`);
    });
};

const addTask = (task) => {
    const tasks = loadTasks();
    tasks.push(task);
    saveTasks(tasks);
    console.log('Tugas ditambahkan!');
};

const removeTask = (index) => {
    const tasks = loadTasks();
    if (index >= 0 && index < tasks.length) {
        tasks.splice(index, 1);
        saveTasks(tasks);
        console.log('Tugas dihapus!');
    } else {
        console.log('Indeks tidak valid.');
    }
};

const command = process.argv[2];
const argument = process.argv[3];

switch (command) {
    case 'list':
        listTasks();
        break;
    case 'add':
        addTask(argument);
        break;
    case 'remove':
        removeTask(argument - 1);
        break;
    default:
        console.log('Perintah tidak valid. Gunakan: list, add, remove');
}
