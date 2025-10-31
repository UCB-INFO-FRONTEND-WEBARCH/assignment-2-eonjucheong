import {useState} from 'react';


function TaskForm({onAddTask}) {
    const [text, setText] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text) return;
        onAddTask(text);
        setText('');
        console.log("Task added:", text);
    }
    return (
        <form onSubmit={handleSubmit} className = "task-form">
            <input 
                type="text" 
                placeholder="Enter a new task" 
                value={text} 
                onChange={(e) => setText(e.target.value)} 
            />
            <button type="submit">Add Task</button>
        </form>
    )
}

export default TaskForm