import { useState, useEffect } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function App() {
    const [task, setTask] = useState("");

    const [tasks, setTasks] = useState(
        JSON.parse(localStorage.getItem("tasks")) || []
    );

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    const addTask = () => {
        if (task.trim() === "") {
            return;
        }

        const newTask = {
            id: Date.now(),
            text: task,
            completed: false
        };

        setTasks([...tasks, newTask]);
        setTask("");
    };

    const toggleTask = (id) => {
        setTasks(
            tasks.map((task) =>
                task.id === id
                    ? { ...task, completed: !task.completed }
                    : task
            )
        );
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    return (
        <div>
            <h1>To-Do List</h1>

            <TodoForm
                task={task}
                setTask={setTask}
                addTask={addTask}
            />

            <TodoList
                tasks={tasks}
                toggleTask={toggleTask}
                deleteTask={deleteTask}
            />
        </div>
    );
}

export default App;