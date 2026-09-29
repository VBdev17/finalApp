function TodoForm({ task, setTask, addTask }) {
    return (
        <div>
            <input
                type="text"
                placeholder="Enter a task"
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />

            <button onClick={addTask}>Add Task</button>
        </div>
    );
}

export default TodoForm;