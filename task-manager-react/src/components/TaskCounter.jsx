function TaskCounter({tasks = []}) {
    const totalTasks = tasks.length
    const completedTasks = tasks.filter(task => task.completed).length

    return (
        <div className = "task-counter">
            <p>{completedTasks}/{totalTasks} tasks</p>
        </div>
    )
}

export default TaskCounter