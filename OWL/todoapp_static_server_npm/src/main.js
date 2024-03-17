const { mount, reactive } = owl;
import { Root, TaskList } from "./app.js";

// -------------------------------------------------------------------------
// Setup
// -------------------------------------------------------------------------
function createTaskStore() {
    const saveTasks = () => localStorage.setItem("todoapp", JSON.stringify(taskStore.tasks));
    const initialTasks = JSON.parse(localStorage.getItem("todoapp") || "[]");
    const taskStore = reactive(new TaskList(initialTasks), saveTasks);
    saveTasks();
    return taskStore;
}


const env = { store: createTaskStore() };
mount(Root, document.body, { dev: true, env });