import { useState } from "react";

function TodoItem({ task, toggleTask, deleteTask }) {
    const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

    return (
        <>
            <li>
                <span className={task.completed ? "task-text completed" : "task-text"}>
                    {task.text}
                </span>

                <div className="task-actions">
                    <button
                        className={task.completed ? "completion-button completed" : "completion-button"}
                        onClick={() => toggleTask(task.id)}
                        aria-pressed={task.completed}
                    >
                        {task.completed ? "Completed" : "Incomplete"}
                    </button>
                    <button className="delete-button" onClick={() => setShowDeleteConfirmation(true)}>
                        Delete
                    </button>
                </div>
            </li>

            {showDeleteConfirmation && (
                <div
                    className="dialog-backdrop"
                    onClick={(event) => {
                        if (event.target === event.currentTarget) {
                            setShowDeleteConfirmation(false);
                        }
                    }}
                >
                    <section
                        className="delete-dialog"
                        role="alertdialog"
                        aria-modal="true"
                        aria-labelledby={`delete-title-${task.id}`}
                        aria-describedby={`delete-description-${task.id}`}
                    >
                        <h2 id={`delete-title-${task.id}`}>Delete this task?</h2>
                        <p id={`delete-description-${task.id}`}>
                            Are you sure you want to delete “{task.text}”?
                        </p>
                        <div className="dialog-actions">
                            <button onClick={() => setShowDeleteConfirmation(false)}>
                                Cancel
                            </button>
                            <button
                                className="confirm-delete-button"
                                onClick={() => deleteTask(task.id)}
                                autoFocus
                            >
                                Delete
                            </button>
                        </div>
                    </section>
                </div>
            )}
        </>
    );
}

export default TodoItem;