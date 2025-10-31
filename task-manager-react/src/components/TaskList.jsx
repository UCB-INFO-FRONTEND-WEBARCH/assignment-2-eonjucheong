import TaskItem from "./TaskItem.jsx";

function TaskList({tasks, onToggle, onDelete}) {
    if (tasks.length === 0) {
        return <p>No tasks available</p>
    }
    return (
        <ul className="task-list">
      {tasks.map((task) => (
        <li key={task.id}>
          <TaskItem 
            task={task} 
            onToggle={onToggle} 
            onDelete={onDelete} 
          />
        </li>
      ))}
    </ul>
    )
}

export default TaskList